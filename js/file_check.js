import fs from 'node:fs';
import path from 'path';
import fetch from 'node-fetch';
import {local_file_list} from "../js/local_file_list.js";

let AzurAPI		= [];
let ShipBanner	= [];
let json_data	= [];

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ShipBanner.json")
	.then(res => res.json())
]).then(
	([azurAPI, shipBanner]) => {
		AzurAPI		= azurAPI;
		ShipBanner	= shipBanner;
		console.log("AzurAPI & ShipBanner Loaded!");
		data_extract(azurAPI, shipBanner);
	},
	(error) => {
		console.log('error: ' + error);
	}
);

function data_extract(azurapi, ship_banner) {
	let count = 0;
	ship_banner.forEach((ship) => {
		const ship_name	= ship.names;
		const ship_id	= ship.id;
		const ship_skin	= ship.skins;

		ship_skin.forEach((skin) => {
			const skin_name		= skin.name;
			const skin_banner	= skin.banner;
			const skin_icon		= skin.icon;
			const skin_chibi	= skin.chibi;
			const skin_shipyard	= skin.shipyard;

			function link_remove(file) {
				const file_return = file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
				return file_return
			};

			let banner_file 	= link_remove(skin_banner);
			let icon_file		= link_remove(skin_icon);
			let chibi_file		= link_remove(skin_chibi);
			let shipyard_file	= link_remove(skin_shipyard);

			let status_quo = false;

			local_file_list.forEach((file) => {
				if (file === banner_file) {count++; status_quo = true};
				if (file === icon_file) {count++; status_quo = true};
				if (file === chibi_file) {count++; status_quo = true};
				if (file === shipyard_file) {count++; status_quo = true};
	
			});
			// check if file exist in localhost or not
			if ( !status_quo ) { console.log(file) };

		});

	});
	console.log(count);

	console.log("check unused file");
	let count_v2 = 0;
	local_file_list.forEach((file) => {
		let status_quo = false;
		ship_banner.forEach((ship) => {
			ship.skins.forEach((skin) => {
				const skin_name		= skin.name;
				const skin_banner	= skin.banner;
				const skin_icon		= skin.icon;
				const skin_chibi	= skin.chibi;
				const skin_shipyard	= skin.shipyard;

				function link_remove(file) {
					const file_return = file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
					return file_return
				};

				let banner_file 	= link_remove(skin_banner);
				let icon_file		= link_remove(skin_icon);
				let chibi_file		= link_remove(skin_chibi);
				let shipyard_file	= link_remove(skin_shipyard);

				if (file === banner_file) {count_v2++; status_quo = true};
				if (file === icon_file) {count_v2++; status_quo = true};
				if (file === chibi_file) {count_v2++; status_quo = true};
				if (file === shipyard_file) {count_v2++; status_quo = true};

			});
		});
		if ( !status_quo ) { console.log(file) };
	});
	console.log(count_v2);

	// const json_content = JSON.stringify(json_data, null , "\t");
	// fs.writeFile("./skin_path.json", json_content, 'utf8', function (err) {
	// 	if (err) {
	// 		console.log("An error occured while writing JSON to File");
	// 		return console.log(err);
	// 	};

	// 	console.log("=> ./skin_path.json has been updated!");
	// });
};
