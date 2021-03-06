import argparse
import json

from urllib.request import urlopen
import time

parser = argparse.ArgumentParser(description="Get the current netlify preview url")
parser.add_argument("site_id")
parser.add_argument("sha")
parser.add_argument("--context", action="store_true")

# Parse args and set API url.
args = parser.parse_args()

url = f"https://api.netlify.com/api/v1/sites/{args.site_id}/deploys"
sha = args.sha
switch = args.context

with urlopen(url) as f:
    resp = json.load(f)


def get_deploy(resp, sha):
    for deploy in resp:
        if deploy["commit_ref"] == sha:
            return deploy
    return resp[0]

deploy = get_deploy(resp, sha)
if switch:
    if deploy["context"] == "production":
        print("Production")
    else:
        print("Preview")
else:
    while deploy["state"] == "building":
        with urlopen(url) as f:
            resp = json.load(f)
        deploy = get_deploy(resp, sha)
        time.sleep(5)

    if deploy["state"] == "error":
        print("failure")
    else:
        # Get the first part of the url.
        domain = deploy["deploy_ssl_url"].split(".")[0][7:]
        if deploy["deploy_ssl_url"].startswith("https://main"):
            print("")
        else:
            print(deploy["deploy_ssl_url"])
