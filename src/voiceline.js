import fs from "node:fs";
import fetch from "node-fetch";

import skin_list_extract from "./voiceline/skin_list_extract.js";
import voiceline_extract from "./voiceline/voiceline_extract.js";

function main(azurapi, voiceline, voiceline_extra, skin_id, skin_template, name_code)
{
	let ship_skin_list_id = [];

	azurapi.forEach((ship) =>
	{
		const SHIP_GID    = ship._gid;
		const SKIN_LIST   = skin_list_extract(skin_id, skin_template, SHIP_GID);
		const SHIP_OUTPUT = voiceline_extract(ship, SKIN_LIST, skin_template, voiceline, voiceline_extra, name_code);

		if (SHIP_OUTPUT.skins.length !== 0)
			ship_skin_list_id.push(SHIP_OUTPUT);
	});

	fs.writeFile(
		"./voiceline.json",
		JSON.stringify(ship_skin_list_id, null, "\t"),
		"utf8",
		(err) => err ? console.log(err) : console.log("=> ./src/voiceline.json has been updated!")
	);
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
	(error) => console.log("error: " + error)
);
