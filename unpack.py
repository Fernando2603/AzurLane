import os
import UnityPy
import time
from multiprocessing import Process

ASSET_TYPE = ["Texture2D", "Sprite"]
ABSOLUTE_PATH = os.path.dirname(os.path.abspath(__file__))

if not os.path.exists(ABSOLUTE_PATH + "/unpack"):
  os.mkdir(ABSOLUTE_PATH + "/unpack")

# define unpack_assets
def unpack_assets(title: str, source: str):
  print("start:", title)
  start = time.time()
  DESTINATION = ABSOLUTE_PATH + "/unpack/" + title

  if not os.path.exists(DESTINATION):
    os.mkdir(DESTINATION)

  for root, _, files in os.walk(ABSOLUTE_PATH + source):
    file_count = len(files)
    print(title, "file:", file_count)

    for file_name in files:
      file_path = os.path.join(root, file_name)
      env = UnityPy.load(file_path)

      for obj in env.objects:
        if obj.type.name in ASSET_TYPE:
          data = obj.read()
          dest = os.path.join(DESTINATION, data.name)

          dest, _ = os.path.splitext(dest)
          dest = dest + ".png"

          img = data.image
          img.save(dest)

  end = time.time()
  print("finished:", title, "in", end - start, "seconds")
# end unpack_assets

# unpack_banner
def unpack_banner():
  unpack_assets("banner", "/assets/herohrzicon/")

# unpack_chibiIcon
def unpack_chibi():
  unpack_assets("chibi", "/assets/qicon/")

# unpack_shipyardIcon
def unpack_shipyard():
  unpack_assets("shipyard", "/assets/shipyardicon/")

# unpack_icon
def unpack_icon():
  unpack_assets("icon", "/assets/squareicon/")

if __name__ == "__main__":
  p1 = Process(target=unpack_banner)
  p1.start()
  p2 = Process(target=unpack_chibi)
  p2.start()
  p3 = Process(target=unpack_shipyard)
  p3.start()
  p4 = Process(target=unpack_icon)
  p4.start()
  p1.join()
  p2.join()
  p3.join()
  p4.join()