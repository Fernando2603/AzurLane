// using module because node-fetch v3 doesnt support commonJS
import fs from "node:fs";

import skin_patch from "./main/skin_patch.js";
import ship_patch from "./main/ship_patch.js";

export default function main(azurapi, ship_banner, __dirname)
{
	const JSON_DATA   = [];
	const TABLE_ARRAY = [];

	azurapi.forEach((ship) =>
	{
		let ship_name   = ship.names.en;
		const SHIP_ID   = ship.id;
		const SHIP_SKIN = ship.skins; // array

		// replace name because azurapi names.en output is hiryu.meta & royal.meta
		if (SHIP_ID === "30001") ship_name = "Hiryuu META";
		if (SHIP_ID === "30002") ship_name = "Ark Royal META";

		// check banner exist or not
		const BANNER_GET  = ship_banner.find(banner => banner.id === SHIP_ID);
		const SKIN_OUTPUT = [];

		// json builder
		let ship_output = ({
			id: SHIP_ID,
			name: ship_name,
			skins: SKIN_OUTPUT
		});

		// temporary fix
		let has_mark_two_ship = false;

		if (!ship_name.includes(" II"))
			if (azurapi.find(idx => idx.names.en === ship_name + " II"))
				has_mark_two_ship = true;

		if (BANNER_GET)
		{
			const SKIN_PATCH_DATA   = skin_patch(ship, SHIP_SKIN, BANNER_GET, __dirname, has_mark_two_ship);
			const SKIN_OUTPUT_PATCH = SKIN_PATCH_DATA.skin_output;
			const TABLE_ARRAY_PATCH = SKIN_PATCH_DATA.table_array;
			SKIN_OUTPUT.push(...SKIN_OUTPUT_PATCH);
			TABLE_ARRAY.push(...TABLE_ARRAY_PATCH);
		}
		else
		{
			const SHIP_PATCH_DATA   = ship_patch(ship, SHIP_SKIN, BANNER_GET, __dirname);
			const SHIP_OUTPUT_PATCH = SHIP_PATCH_DATA.ship_output;
			const TABLE_ARRAY_PATCH = SHIP_PATCH_DATA.table_array;
			ship_output = SHIP_OUTPUT_PATCH;
			TABLE_ARRAY.push(...TABLE_ARRAY_PATCH);
		};

		JSON_DATA.push(ship_output);
	});

	// eslint-disable-next-line no-console
	console.table(
		TABLE_ARRAY.map(idx =>
		{
			return {
				STATUS: idx.status,
				SHIP: idx.name,
				ID: idx.id,
				TYPE: idx.type,
				SKIN: idx.skin,
				FOLDER: idx.folder
			};
		})
	);

	fs.writeFile(
		"./src/ShipBanner.json",
		JSON.stringify(JSON_DATA, null, "\t"),
		"utf8",
		(err) => err ? console.log(err) : console.log("=> ./src/ShipBanner.json has been updated!")
	);
};
