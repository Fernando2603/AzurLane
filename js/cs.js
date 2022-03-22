import fs from 'node:fs';
import path from 'path';
import fetch from 'node-fetch';
import {skin_list} from './skin_list.js';
import {skin_list_use} from './skin_list_use.js';

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
		AzurAPI			= azurAPI;
		ShipBanner	= shipBanner;
		console.log("AzurAPI & ShipBanner Loaded!");
		// console.log(shipBanner);
		data_extract(azurAPI, shipBanner);
	},
	(error) => {
		console.log('error: ' + error);
	}
);

function data_extract(azurapi, ship_banner) {
	ship_banner.forEach((ship) => {
		const ship_name	= ship.names;
		const ship_id		= ship.id;
		const ship_skin	= ship.skins;

		ship_skin.forEach((skin) => {
			const skin_name			= skin.name;
			const skin_banner		= skin.banner;
			const skin_icon			= skin.icon;
			const skin_chibi		= skin.chibi;
			const skin_shipyard	= skin.shipyard;

			function link_remove(file) {
				const file_return = file.replace("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/","");
				return file_return
			};

			const skin_banner_final 	= link_remove(skin_banner);
			const skin_icon_final 		= link_remove(skin_icon);
			const skin_chibi_final 		= link_remove(skin_chibi);
			const skin_shipyard_final = link_remove(skin_shipyard);

			let pass_1	= true;
			let pass_2	= true;
			let pass_3	= true;
			let pass_4	= true;

			if ( skin_banner_final.includes("000/Banner.png") ) {pass_1 = false};
			if ( skin_icon_final.includes("000/Icon.png") ) {pass_2 = false};
			if ( skin_chibi_final.includes("000/ChibiIcon.png") ) {pass_3 = false};
			if ( skin_shipyard_final.includes("000/ShipyardIcon.png") ) {pass_4 = false};

			const new_library = ship_id;
			const new_folder 	= skin_name.replace(/ /g, "_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");

			const old_path_banner			= "/images/skins/" + skin_banner_final;
			const old_path_icon				= "/images/skins/" + skin_icon_final;
			const old_path_chibi			= "/images/skins/" + skin_chibi_final;
			const old_path_shipyard		= "/images/skins/" + skin_shipyard_final;
			const new_path_banner 	= "/skins/" + new_library + "/" + new_folder + "/Banner.png";
			const new_path_icon			= "/skins/" + new_library + "/" + new_folder + "/Icon.png";
			const new_path_chibi 		= "/skins/" + new_library + "/" + new_folder + "/ChibiIcon.png";
			const new_path_shipyard	= "/skins/" + new_library + "/" + new_folder + "/ShipyardIcon.png";

			if ( pass_1 ) { json_data.push({old_path:old_path_banner, new_path:new_path_banner}) };
			if ( pass_2 ) { json_data.push({old_path:old_path_icon, new_path:new_path_icon}) };
			if ( pass_3 ) { json_data.push({old_path:old_path_chibi, new_path:new_path_chibi}) };
			if ( pass_4 ) { json_data.push({old_path:old_path_shipyard, new_path:new_path_shipyard}) };
		});

	});
	const json_content = JSON.stringify(json_data, null , "\t");
	fs.writeFile("./skin_path.json", json_content, 'utf8', function (err) {
		if (err) {
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};

		console.log("=> ./skin_path.json has been updated!");
	});
};
