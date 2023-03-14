import { copyFile, existsSync, mkdirSync } from "node:fs";
import { SHIP_IMAGE, path } from "../utils.js";
import { ship_skins } from "../data.js";

/*
  NOTES:
    on run this file always copy/replace images from AzurAssets to images/skins.
    this behavior is intended to skip file changes check but the performance is slow

  TODO:
    creating hash check on AzurAssets and link into dist/ship_skins.json
    is the best way to improve script performance if the script really slow to run
*/

const copy = async (target, gid, id, type, callback) =>
{
  const FOLDER = path("images/skins/" + gid + "/" + id);

  if (!existsSync(FOLDER))
    mkdirSync(FOLDER, { recursive: true });

  const DESTINATION = FOLDER + "/" + type + ".png";

  if (existsSync(DESTINATION))
    return callback(null, `images/skins/${gid}/${id}/${type}.png`);

  copyFile(target, DESTINATION, (error) => callback(error, `images/skins/${gid}/${id}/${type}.png`));
};

const check = async (gid, id, file) =>
{
  const STATUS = {
    banner: false,
    chibi: false,
    icon: false,
    shipyard: false
  };

  const PROMISES = [];

  for (const image_type in SHIP_IMAGE)
  {
    const TARGET_FILE = SHIP_IMAGE[image_type] + "/" + file + ".png";

    if (existsSync(TARGET_FILE))
    {
      const PROMISE = new Promise((resolve) =>
      {
        copy(TARGET_FILE, gid, id, image_type, (error, destination) =>
        {
          if (error)
            console.log("skin:", id, "file:", file, "type:", image_type, "desc: copy error");
          else
            STATUS[image_type] = destination;

          resolve();
        });
      });

      PROMISES.push(PROMISE);
    }
    else if (existsSync(path(`images/skins/${gid}/${id}/${image_type}.png`)))
      STATUS[image_type] = `images/skins/${gid}/${id}/${image_type}.png`;
    else
      console.log(TARGET_FILE, "not exists");
  };

  await Promise.all(PROMISES);

  return STATUS;
};

export default async function skins(gid)
{
  const LIST  = ship_skins[gid];
  const BUILD = [];

  if (!LIST) return BUILD;

  for (const skin of LIST)
  {
    const { id, name, type, desc, tag, file } = skin;

    const SKIN = {
      id: id,
      name: name,
      type: type,
      desc: desc,
      tag: tag
    };

    const FILE = {
      banner: null,
      chibi: null,
      icon: null,
      shipyard: null
    };

    const CHECK = await check(gid, id, file);

    for (const dest in CHECK)
      if (CHECK[dest])
        FILE[dest] = CHECK[dest];

    BUILD.push({ ...SKIN, ...FILE });
  };

  return BUILD;
};
