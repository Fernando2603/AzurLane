import { PROPERTY_HEXAGON } from "../constant.js";

export default function resolve_ship_property_hexagon(property_hexagon)
{
  return property_hexagon.map(hex => PROPERTY_HEXAGON[hex]);
};

