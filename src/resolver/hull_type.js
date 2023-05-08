import { ship_data_by_type } from "../data.js";

export default function resolve_ship_hull_type(type)
{
  if (type in ship_data_by_type)
    return ship_data_by_type[type].type_name;

  console.log("resolve_ship_hulltype: cannot resolve", type);
  return type;
};
