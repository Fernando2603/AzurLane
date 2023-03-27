import { update } from "./update/index.js";
import extract from "./update/extract.js";

const REPOSITORY = "https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN";

const filepath = (name) =>
{
  return {
    name: name,
    link: `${REPOSITORY}/ShareCfg/${name}.json`
  };
};

const LINK = [
  filepath("equip_data_statistics"),
  filepath("equip_data_template"),
  filepath("name_code"),
  filepath("ship_data_blueprint"),
  filepath("ship_data_breakout"),
  filepath("ship_data_group"),
  filepath("ship_data_statistics"),
  filepath("ship_data_strengthen"),
  filepath("ship_data_template"),
  filepath("ship_data_by_type"),
  filepath("ship_data_trans"),
  filepath("ship_meta_breakout"),
  filepath("ship_meta_repair"),
  filepath("ship_meta_repair_effect"),
  filepath("ship_skin_template"),
  filepath("ship_skin_words"),
  filepath("ship_skin_words_extra"),
  filepath("ship_strengthen_blueprint"),
  filepath("ship_strengthen_meta"),
  filepath("skill_data_template"),
  filepath("spweapon_data_statistics"),
  filepath("spweapon_type"),
  filepath("spweapon_upgrade"),
  filepath("transform_data_template"),
  filepath("weapon_property")
];

let fetch_error = 0;
let fetch_success = 0;

const CACHE = {};

const finish = (name, result) =>
{
  if (!name) return fetch_error++;

  console.log("write:", name);
  fetch_success++;

  CACHE[name.replace(".json", "")] = result;

  if (!fetch_error & fetch_success === LINK.length)
    extract(CACHE);
};

LINK.forEach(idx => update(idx, finish));
