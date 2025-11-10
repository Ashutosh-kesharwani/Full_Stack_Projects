import os
import requests
from time import sleep

# 1️⃣ Folder name where images will be saved
folder = "images\Canvas-Image"

# 🔍 Check if folder already exists
if os.path.exists(folder):
    print(f"⚠️ Folder '{folder}' already exists. No new downloads started.")
else:
    # 2️⃣ If not exist, create the folder
    os.makedirs(folder)
    print(f"📁 Created folder: {folder}")

    # 3️⃣ Base URL pattern — '{}' will be replaced by numbers
    base_url = "https://zelt.app/assets/img/home/hero/sequence/{}.webp"

    # 4️⃣ Image range (change as needed)
    #range set according to number of images present there 
    start, end = 1, 117

    # 5️⃣ Download loop
    for i in range(start, end + 1):
        url = base_url.format(i)
        filename = os.path.join(folder, f"canvas-{i}.webp")
        try:
            res = requests.get(url, timeout=10)
            if res.status_code == 200:
                with open(filename, "wb") as f:
                    f.write(res.content)
                print(f"✅ Downloaded: {filename}")
            else:
                print(f"⚠️ Skipped {i} (HTTP {res.status_code})")
        except Exception as e:
            print(f"❌ Error downloading {i}: {e}")
        sleep(0.2)

    print(f"\n🎉 All images downloaded successfully inside the '{folder}' folder!")
