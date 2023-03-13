import { PROPERTY_HEXAGON } from "../utils.js";

export default function resolve_ship_property_hexagon(property_hexagon)
{
  return property_hexagon.map(hex => PROPERTY_HEXAGON[hex]);
};

