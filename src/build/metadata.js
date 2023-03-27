import { write } from "../utils.js";
import { ship_data_group, ship_data_statistics, ship_group } from "../data.js";
import {
  resolve_ship_property_hexagon,
  resolve_ship_rarity,
  resolve_ship_nationality,
  resolve_ship_hull_type,
  resolve_ship_armor
} from "../resolver.js";

const SHIPS = {};

for (const idx of ship_data_group.all)
{
  const {
    group_type,
    property_hexagon,
    nationality,
    type
  } = ship_data_group[idx];

  const {
    armor_type,
    default_equip_list,
    english_name,
    rarity,
    tag_list
  } = ship_data_statistics[group_type + "1"];

  const SHIP = {
    id: idx,
    gid: group_type,
    name: ship_group[group_type],
    codename: english_name,
    rarity: resolve_ship_rarity(tag_list.includes("Plan-Class") ? rarity + 2 : rarity),
    property_hexagon: resolve_ship_property_hexagon(property_hexagon),
    nationality: resolve_ship_nationality(nationality),
    hull_type: resolve_ship_hull_type(type),
    armor: resolve_ship_armor(armor_type),
    default_equip: default_equip_list
  };

  SHIPS[group_type] = SHIP;
};

const BUILD = SHIPS;

write("dist", "metadata.json", BUILD);
