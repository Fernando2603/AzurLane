// using module because node-fetch v3 doesnt support commonJS
import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import all_skin_patch from './skin_patch/all_skin_patch.js';
import new_skin_patch from './skin_patch/new_skin_patch.js';

export default function skin_patch(ship, ship_skin, ship_banner, __dirname) {
	// ship <azurapi>
	const ship_name	= ship.names.en;
	const ship_id	= ship.id;

	// output
	let skin_output	= [];
	let table_array	= [];

	// script
	ship_skin.forEach((skin) => {
		const skin_name			= skin.name;
		let skin_availability	= false;
		let banner_skin_get		= "";
		let skin_patch;

		// searching skin is available in shipbanner
		ship_banner.skins.forEach((banner_skin_data) => {
			if ( banner_skin_data.name === skin_name ) {
				banner_skin_get		= banner_skin_data;
				skin_availability	= true;
			};
		});

		if ( skin_availability ) {
			skin_patch	= all_skin_patch(ship, banner_skin_get, skin, __dirname);
		};

		if ( !skin_availability ) {
			skin_patch	= new_skin_patch(ship, banner_skin_get, skin, __dirname);
		};

		const skin_output_patch	= skin_patch.skin_output;
		const table_array_patch	= skin_patch.table_array;

		if ( skin_output_patch.length !== 0 ) {
			skin_output.push(skin_output_patch);
		};
		if ( table_array_patch !== undefined && table_array_patch.length !== 0 ) {
			table_array.push(table_array_patch);
		};
	});
	const output_builder	= ({ table_array: table_array, skin_output: skin_output });
	return output_builder
};