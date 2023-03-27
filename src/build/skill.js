import { resolve_namecode } from "../resolver.js";
import { skill_data_template } from "../data.js";
import { write } from "../utils.js";

import resolve_description from "./skill/desc.js";

const DATA = {};

for (const skill of skill_data_template.all)
{
  const { desc, desc_add, id, name, type } = skill_data_template[skill];

  if (!desc || !name || !desc_add.length) continue;

  DATA[id] = {
    id: id,
    name: resolve_namecode(name),
    desc: desc,
    add: desc_add,
    max_level: resolve_description(desc, desc_add),
    type: type
  };
};

write("dist", "skill.json", DATA);
