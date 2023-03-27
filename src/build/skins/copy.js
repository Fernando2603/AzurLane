import { copyFile, existsSync, mkdirSync } from "node:fs";
import { path } from "../../utils.js";

export default async function copy(target, id, type, callback)
{
  const FOLDER = path("images/skins/" + id);

  if (!existsSync(FOLDER))
    mkdirSync(FOLDER, { recursive: true });

  const DESTINATION = FOLDER + "/" + type + ".png";

  if (existsSync(DESTINATION))
    return callback(null, `images/skins/${id}/${type}.png`);

  copyFile(target, DESTINATION, (error) => callback(error, `images/skins/${id}/${type}.png`));
};
