import { SKIN_TAG } from "../utils.js";

export default function resolve_skin_tag(tag)
{
  return tag.map(x => SKIN_TAG[x]);
};
