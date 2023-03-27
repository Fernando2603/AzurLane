import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "node:fs";

export const REPOSITORY_LINK = "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/";
export const ABSOLUTE_PATH = dirname(dirname(fileURLToPath(import.meta.url)));
export const path = (name) => join(ABSOLUTE_PATH, name);

export const write = (parent_directory, name, data = {}, callback = null) =>
{
  let write_path = parent_directory + "/" + name;
  let write_name = name;
  let write_data = data;

  if (parent_directory === "root" || !parent_directory)
    write_path = name;

  return writeFile(
    path(write_path),
    JSON.stringify(write_data, 2, "\t"),
    "utf8",
    (error) =>
    {
      if (callback)
      {
        if (error) console.log("write:", write_path, "error");
        return callback(error ? false : write_name, write_data);
      };

      if (error)
      {
        console.log(error);
        return false;
      };

      console.log("write:", write_path);
      return true;
    }
  );
};
