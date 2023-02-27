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
  filepath("ship_skin_template"),
  filepath("ship_data_group"),
  filepath("ship_data_statistics"),
  filepath("ship_data_by_type"),
  filepath("name_code")
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
