"""Groupme"""
__docformat__ = "numpy"

import json
import os
import io
import pathlib
import urllib.request as urllib

import requests
from dotenv import load_dotenv

load_dotenv()

base = "https://api.groupme.com/v3"
TOKEN = os.getenv("GROUPME_TOKEN")
end = f"?token={TOKEN}"

group_to_bot = {
    os.getenv("TEST_GROUP_ID"): os.getenv("TEST_GROUP_BOT"),
    os.getenv("MAIN_GROUP_ID"): os.getenv("MAIN_GROUP_BOT"),
}


def upload_image(image: str, local: bool) -> requests.Response:
    url = "https://image.groupme.com/pictures"
    headers = {
        "Content-Type": "image/jpeg",
        "X-Access-Token": os.getenv("X-Access-Token"),
    }
    if local:
        path_string = pathlib.Path(__file__).parent.parent.resolve()
        path = os.path.join(path_string, image)
        return requests.post(url, data=open(path, "rb").read(), headers=headers)
    with urllib.urlopen(image) as data:
        return requests.post(url, data=io.BytesIO(data.read()), headers=headers)


def send_message(message: str, group_id: str) -> requests.Response:
    mid = "/bots/post"
    bot_id = group_to_bot[group_id]
    return requests.post(url=f"{base+mid}?bot_id={bot_id}&text={message}")


def send_image(
    image: str, group_id: str, text: str = None, local: bool = False
) -> requests.Response:
    response = upload_image(image, local).json()
    image_url = response["payload"]["picture_url"]
    mid = "/bots/post"
    bot_id = group_to_bot[group_id]
    data = {
        "bot_id": bot_id,
        "text": text,
        "attachments": [{"type": "image", "url": image_url}],
    }
    return requests.post(base + mid + end, data=json.dumps(data))
