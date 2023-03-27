import { resolve_namecode } from "./resolver.js";
import { skill_data_template } from "./data.js";
import { write } from "./utils.js";

const DATA = {};
const CSX = {};

const resolve_skill_desc = (desc, data) =>
{
  let description = desc;

  for (let i = 0; i < data.length; i++)
    description = description.replaceAll(`$${i + 1}`, data[i][9][0]);

  return description;
};

for (const skill of skill_data_template.all)
{
  const { desc, desc_add, id, name, type } = skill_data_template[skill];

  if (!desc || !name || !desc_add.length) continue;

  DATA[id] = {
    id: id,
    name: resolve_namecode(name),
    desc: desc,
    add: desc_add,
    max_level: resolve_skill_desc(desc, desc_add),
    type: type
  };

  CSX[id] = {
    name: resolve_namecode(name),
    desc: desc,
    max_level: resolve_skill_desc(desc, desc_add)
  };
};

write("dist", "skill.json", DATA);
write("dist", "skill_csx.json", CSX);
