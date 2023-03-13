import name_code from "../data/name_code.json" assert { type: "json" };
import ship_data_by_type from "../data/ship_data_by_type.json" assert { type: "json" };
import ship_data_group from "../data/ship_data_group.json" assert { type: "json" };
import ship_data_statistics from "../data/ship_data_statistics.json" assert { type: "json" };
import ship_skin_template from "../data/ship_skin_template.json" assert { type: "json" };
import skin_page_template from "../data/skin_page_template.json" assert { type: "json" };

// extract
import ship_group from "../data/extract/ship_group.json" assert { type: "json" };
import ship_skins from "../data/extract/ship_skins.json" assert { type: "json" };

export {
  name_code,
  ship_data_by_type,
  ship_data_group,
  ship_data_statistics,
  ship_skin_template,
  skin_page_template,
  ship_group,
  ship_skins
};
