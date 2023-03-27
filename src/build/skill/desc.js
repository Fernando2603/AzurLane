export default function desc(line, data)
{
  let description = line;

  for (let i = 0; i < data.length; i++)
    description = description.replaceAll(`$${i + 1}`, data[i][9][0]);

  while (description.includes("  "))
    description = description.replaceAll("  ", " ");

  return description.trim();
};
