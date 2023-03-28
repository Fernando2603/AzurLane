import ship_group from "./extract/ship_group.js";
import ship_skins from "./extract/ship_skins.js";
import ship_research from "./extract/ship_research.js";
import ship_meta from "./extract/ship_meta.js";

export default function extract(cache)
{
  console.log("extracting");

  ship_group(cache);
  ship_skins(cache);
  ship_research(cache);
  ship_meta(cache);
};
