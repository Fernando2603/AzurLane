import { ship_data_by_type } from "../data.js";

export default function resolve_ship_hulltype(type)
{
  if (ship_data_by_type.all.includes(type))
    return ship_data_by_type[type].type_name;

  console.log("resolve_ship_hulltype: cannot resolve", type);
  return type;
};
