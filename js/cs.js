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

async function moveFile(oldPath, newPath) {
  // 1. Create the destination directory
  // Set the `recursive` option to `true` to create all the subdirectories
  await fs.mkdir(path.dirname(newPath), { recursive: true });
  try {
    // 2. Rename the file (move it to the new directory)
    await fs.rename(oldPath, newPath);
  } catch (error) {
    if (error.code === 'EXDEV') {
      // 3. Copy the file as a fallback
      await fs.copyFile(oldPath, newPath);
      // Remove the old file
      await fs.unlink(oldPath);
    } else {
      // Throw any other error
      throw error;
    }
  }
}

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

			const list_check_banner 	= skin_list.find(element => element.replace("\\","/") === skin_banner_final);
			const list_check_icon 		= skin_list.find(element => element.replace("\\","/") === skin_icon_final);
			const list_check_chibi 		= skin_list.find(element => element.replace("\\","/") === skin_chibi_final);
			const list_check_shipyard = skin_list.find(element => element.replace("\\","/") === skin_shipyard_final);

			let old_path_banner 	= "/images/skins/"+list_check_banner.replace("\\","/");
			let old_path_icon			= "/images/skins/"+list_check_icon.replace("\\","/");
			let old_path_chibi 		= "/images/skins/"+list_check_chibi.replace("\\","/");
			let old_path_shipyard	= "/images/skins/"+list_check_shipyard.replace("\\","/");

			const new_library 		= ship_id;
			const ship_replace 		= ship_name.replace(/ /g,"_");

			let image_library 		= ship_replace;
			if ( ship_replace.includes("_μ") || ship_replace.includes("_µ") ) { image_library	= ship_replace.replace("_μ","_µ") };
			if ( ship_name === "Ōkami Mio" ) { image_library = "Ookami_Mio" };
			if ( ship_name === "Kaga(BB)" ) { image_library = "Kaga_(Battleship)" };
			if ( ship_name === "Kasumi" ) { image_library = "Kasumi_(Venus_Vacation)" };
			if ( ship_name === "Kasumi Retrofit" ) { image_library = "Kasumi" };
			if ( ship_id === "Collab001" ) { image_library = "Neptune_(Neptunia)"}
			if ( ship_name === "Pamiat' Merkuria" ) { image_library = "Pamiat_Merkuria" };

			let new_image_banner 		= list_check_banner.split("\\").pop();
			let new_image_icon 			= list_check_icon.split("\\").pop();
			let new_image_chibi			= list_check_chibi.split("\\").pop();
			let new_image_shipyard	= list_check_shipyard.split("\\").pop();

			let pass_1	= true;
			let pass_2	= true;
			let pass_3	= true;
			let pass_4	= true;

			if ( new_image_banner === "UnknownBanner.png" ) {pass_1 = false};
			if ( new_image_icon === "UnknownIcon.png" ) {pass_2 = false};
			if ( new_image_chibi === "UnknownChibiIcon.png" ) {pass_3 = false};
			if ( new_image_shipyard === "UnknownShipyardIcon.png" ) {pass_4 = false};

			let image_banner_create 	= new_image_banner.replace(image_library, "");
			let image_icon_create 		= new_image_icon.replace(image_library, "");
			let image_chibi_create 		= new_image_chibi.replace(image_library, "");
			let image_shipyard_create = new_image_shipyard.replace(image_library, "");

			let new_path_banner 	= "/skins/" + new_library + "/" + image_banner_create;
			let new_path_icon			= "/skins/" + new_library + "/" + image_icon_create;
			let new_path_chibi 		= "/skins/" + new_library + "/" + image_chibi_create;
			let new_path_shipyard	= "/skins/" + new_library + "/" + image_shipyard_create;

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
