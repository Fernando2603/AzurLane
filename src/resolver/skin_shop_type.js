import { skin_page_template } from "../data.js";

export default function resolve_skin_shop_type(type)
{
  if (type in skin_page_template)
    return skin_page_template[type];

  console.log("can't resolve skin_shop_type_id", type);
  return null;
};
