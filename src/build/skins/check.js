import { existsSync } from "node:fs";
import { path } from "../../utils.js";
import { SHIP_IMAGE } from "../../constant.js";

import copy from "./copy.js";

export default async function check(id, file)
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
        copy(TARGET_FILE, id, image_type, (error, destination) =>
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
    else if (existsSync(path(`images/skins/${id}/${image_type}.png`)))
      STATUS[image_type] = `images/skins/${id}/${image_type}.png`;
    else
      console.log(TARGET_FILE, "not exists");
  };

  await Promise.all(PROMISES);

  return STATUS;
};
