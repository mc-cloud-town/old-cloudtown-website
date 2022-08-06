import requests
import json
from pathlib import Path

members_path = Path("../members.json")
members = json.loads(Path("../members.json").read_text("utf-8"))

for user in members:
    print(user["mc_name"])

    if uuid := user.get("mc_uuid"):
        try:
            data = requests.get(
                f"https://api.mojang.com/user/profiles/{uuid}/names"
            ).json()
        except:
            continue
        user["mc_name"] = data[-1]["name"]
        continue

    data = requests.get(
        f"https://api.mojang.com/users/profiles/minecraft/{user['mc_name']}"
    )
    try:
        data = data.json()
        data["id"]
    except:
        print(user["mc_name"], data.text)
        continue

    user["mc_name"] = data["name"]
    user["mc_uuid"] = data["id"]

with open(members_path, "w", encoding="utf-8") as f:
    json.dump(members, f, separators=(',', ':'), ensure_ascii=False)
