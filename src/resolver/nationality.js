import { SHIP_NATIONALITY } from "../constant.js";

export default function resolve_ship_nationality(type)
{
  if (SHIP_NATIONALITY[type])
    return SHIP_NATIONALITY[type];

  console.log("resolve_ship_nationality: cannot resolve", type);
  return type;
};
