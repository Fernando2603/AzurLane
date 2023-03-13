/* eslint-disable no-console */
import { readdirSync, existsSync } from "node:fs";
import { SHIP_IMAGE, path } from "./utils.js";
import { ship_skins } from "./data.js";
import { skins } from "./dist.js";

const border = (type = "=") => console.log(new Array(101).join(type));
console.time("=> Check Runtime");

const FILE_DATA = [];

for (const idx in ship_skins)
  ship_skins[idx].forEach(skin => FILE_DATA.push(skin.file));

const USED_FILE   = {};
const UNUSED_FILE = {};

async function check_local_file()
{
  let ships_file_count = 0;
  let local_file_count = 0;

  const check_if_file_exist = (file) =>
  {
    if (file && !existsSync(path(file)))
      console.log("[\x1b[31mMISSING\x1b[0m]:", file);
  };

  // loop ships and find missing folder/file in local folder
  skins.forEach(ship =>
  {
    const SHIP_PATH = "images/skins/" + ship.gid;

    if (existsSync(path(SHIP_PATH)))
    {
      for (const skin of ship.skins)
      {
        let skin_path = SHIP_PATH + "/" + skin.id;

        if (skin.shared)
          skin_path = "images/skins/" + skin.shared + "/" + skin.id;
        else
        {
          if (skin.banner)
            ships_file_count++;

          if (skin.chibi)
            ships_file_count++;

          if (skin.icon)
            ships_file_count++;

          if (skin.shipyard)
            ships_file_count++;
        };

        if (existsSync(path(skin_path)))
        {
          check_if_file_exist(skin.banner);
          check_if_file_exist(skin.chibi);
          check_if_file_exist(skin.icon);
          check_if_file_exist(skin.shipyard);
        }
        else console.log(`[\x1b[31mMISSING\x1b[0m]: images/skins/${ship.gid}/${skin.id}`);
      };
    }
    else console.log(`[\x1b[31mMISSING\x1b[0m]: images/skins/${ship.gid}`);
  });

  // loop all images/skins folder
  // and search for unknown folder/file
  //
  // structure: root/images/skins/{ship.gid}/{skin.id}/{KNOWN_LIST}
  const KNOWN_LIST = ["banner.png", "chibi.png", "icon.png", "shipyard.png"];
  const SKINS = readdirSync(path("images/skins"));
  SKINS.forEach(ship =>
  {
    const SHIP_FOLDER = readdirSync(path("images/skins/" + ship));
    const DATA = skins.find(idx => idx.gid.toString() === ship);

    if (!DATA)
      console.log("[\x1b[33mWARNING\x1b[0m]: Unknown ship folder ->", `images/skins/${ship}`);

    SHIP_FOLDER.forEach(skin =>
    {
      const SKIN_FOLDER = readdirSync(path("images/skins/" + ship + "/" + skin));

      if (DATA)
      {
        const SKIN = DATA.skins.find(idx => idx.id.toString() === skin);

        if (!SKIN)
          console.log("[\x1b[33mWARNING\x1b[0m]: Unknown skin folder ->", `images/skins/${ship}/${skin}`);

        if (SKIN && !SKIN.banner && existsSync(path(`images/skins/${ship}/${skin}/banner.png`)))
          console.log("[\x1b[33mWARNING\x1b[0m]:", `images/skins/${ship}/${skin} exist in local file but not used`);

        if (SKIN && !SKIN.chibi && existsSync(path(`images/skins/${ship}/${skin}/chibi.png`)))
          console.log("[\x1b[33mWARNING\x1b[0m]:", `images/skins/${ship}/${skin} exist in local file but not used`);

        if (SKIN && !SKIN.icon && existsSync(path(`images/skins/${ship}/${skin}/icon.png`)))
          console.log("[\x1b[33mWARNING\x1b[0m]:", `images/skins/${ship}/${skin} exist in local file but not used`);

        if (SKIN && !SKIN.shipyard && existsSync(path(`images/skins/${ship}/${skin}/shipyard.png`)))
          console.log("[\x1b[33mWARNING\x1b[0m]:", `images/skins/${ship}/${skin} exist in local file but not used`);
      };

      for (const file of SKIN_FOLDER)
      {
        if (!KNOWN_LIST.includes(file))
          console.log("[\x1b[33mWARNING\x1b[0m]: Unknown skin file ->", `images/skins/${ship}/${skin}/${file}`);

        local_file_count++;
      };
    });
  });

  border("-");
  console.log("\x1b[32m", "FILE COUNT\x1b[0m:", `${ships_file_count}/${local_file_count} [JSON/LOCAL]`);
};

async function check_assets_file(title, folder)
{
  const ASSETS = readdirSync(folder);

  const FILE_LIST = [...FILE_DATA];
  const USED = [];
  const UNUSED = [];

  ASSETS.forEach(file =>
  {
    const FILE = file.replace(".png", "").toLowerCase();
    if (FILE_LIST.includes(FILE))
    {
      FILE_LIST.splice(FILE_LIST.indexOf(FILE), 1);
      USED.push(file);
    }
    else
      UNUSED.push(file);
  });

  USED_FILE[title] = USED.length;
  UNUSED_FILE[title] = UNUSED.length;

  if (FILE_LIST.length)
    console.log("\x1b[31m", title, "\x1b[0mmissing", FILE_LIST.length, "file(s).");
  else
    console.log("\x1b[32m", title, "\x1b[0massets is up to date");
};

console.time("=> Check Local File Runtime");
border();
console.log("=> Check Local File");
border();
check_local_file();
border("-");
console.timeEnd("=> Check Local File Runtime");
border("-");

border();
console.time("=> Check Assets Runtime");
console.log("=> Check Assets");
border();
check_assets_file("banner", SHIP_IMAGE.banner);
check_assets_file("chibi", SHIP_IMAGE.chibi);
check_assets_file("icon", SHIP_IMAGE.icon);
check_assets_file("shipyard", SHIP_IMAGE.shipyard);
border("-");
console.log("USED ASSETS:", USED_FILE);
console.log("UNUSED ASSETS:", UNUSED_FILE);
border("-");
console.timeEnd("=> Check Assets Runtime");
border("-");
console.timeEnd("=> Check Runtime");
