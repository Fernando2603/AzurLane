import { name_code } from "../data.js";

export default function resolve_namecode(line)
{
  let line_output = line;

  if (line.includes("namecode"))
  {
    let keys = [];

    Object.keys(name_code).forEach((key) =>
    {
      if (!keys.includes(key)) keys.push(key);
    });

    do
    {
      // eslint-disable-next-line no-loop-func
      keys.forEach((code) =>
      {
        const REPLACE_NAME = `{namecode:${code}}`;
        const FORMAT_NAME  = name_code[code].name;

        line_output = line_output.replace(REPLACE_NAME, FORMAT_NAME);
      });
    }
    while (line_output.includes("namecode"));
  };

  if (line.includes("<color"))
    line_output = line_output.replace("<color=#ffde38>", "").replace("</color>", "");

  return line_output;
};
