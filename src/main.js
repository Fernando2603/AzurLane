// using module because node-fetch v3 doesnt support commonJS
import fs from "node:fs";

import skin_patch from "./main/skin_patch.js";
import ship_patch from "./main/ship_patch.js";

export default function main(azurapi, ship_banner, __dirname)
{
	let json_data   = [];
	let table_array = [];

	azurapi.forEach((ship) =>
	{
		let ship_name   = ship.names.en;
		const ship_id   = ship.id;
		const ship_skin = ship.skins; // array

		// replace name because azurapi names.en output is hiryu.meta & royal.meta
		if (ship_id === "30001") ship_name = "Hiryuu META";
		if (ship_id === "30002") ship_name = "Ark Royal META";

		// check banner exist or not
		let banner_get  = ship_banner.find(banner => banner.id === ship_id);
		let skin_output = [];

		// json builder
		let ship_output = ({
			id: ship_id,
			name: ship_name,
			skins: skin_output
		});

		if (banner_get)
		{
			const skin_patch_data   = skin_patch(ship, ship_skin, banner_get, __dirname);
			const skin_output_patch = skin_patch_data.skin_output;
			const table_array_patch = skin_patch_data.table_array;
			skin_output.push(...skin_output_patch);
			table_array.push(...table_array_patch);
		}
		else
		{
			const ship_patch_data   = ship_patch(ship, ship_skin, banner_get, __dirname);
			const ship_output_patch = ship_patch_data.ship_output;
			const table_array_patch = ship_patch_data.table_array;
			ship_output = ship_output_patch;
			table_array.push(...table_array_patch);
		};

		json_data.push(ship_output);
	});

	// eslint-disable-next-line no-console
	console.table(
		table_array.map(idx =>
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

	const json_content = JSON.stringify(json_data, null, "\t");

	fs.writeFile("./src/ShipBanner.json", json_content, "utf8", function (err)
	{
		if (err)
		{
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};
		console.log("=> ./src/ShipBanner.json has been updated!");
	});
};
