import { copyFile, existsSync, mkdirSync } from "node:fs";
import { SHIP_IMAGE, path } from "../utils.js";
import { ship_skins } from "../data.js";

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
    banner: null,
    chibi: null,
    icon: null,
    shipyard: null
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
      FILE[dest] = CHECK[dest];

    BUILD.push({ ...SKIN, ...FILE });
  };

  return BUILD;
};
