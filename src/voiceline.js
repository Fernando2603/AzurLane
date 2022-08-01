import fs from "node:fs";
import fetch from "node-fetch";

import skin_list_extract from "./voiceline/skin_list_extract.js";
import voiceline_extract from "./voiceline/voiceline_extract.js";

function main(azurapi, voiceline, voiceline_extra, skin_id, skin_template, name_code)
{
	let ship_skin_list_id = [];

	azurapi.forEach((ship) =>
	{
		const ship_gid    = ship._gid;
		const skin_list  = skin_list_extract(skin_id, skin_template, ship_gid);
		const ship_output = voiceline_extract(ship, skin_list, skin_template, voiceline, voiceline_extra, name_code);

		if (ship_output.skins.length !== 0)
			ship_skin_list_id.push(ship_output);
	});

	const save_to_json = JSON.stringify(ship_skin_list_id, null, "\t");
	fs.writeFile("./voiceline.json", save_to_json, "utf8", function (err)
	{
		if (err)
		 return console.log(err);
	});
};

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
		.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/sharecfgdata/ship_skin_words.json")
		.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/ship_skin_words_extra.json")
		.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/ship_skin_words.json")
		.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/ship_skin_template.json")
		.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/AzurLaneTools/AzurLaneData/main/EN/ShareCfg/name_code.json")
		.then(res => res.json())
]).then(
	([azurAPI, voiceline, voiceline_extra, skin_id, skin_template, name_code]) =>
	{
		console.log("AzurAPI & VoiceLine Loaded!");
		main(azurAPI, voiceline, voiceline_extra, skin_id.all, skin_template, name_code);
	},
	(error) =>
	{
		console.log("error: " + error);
	}
);
