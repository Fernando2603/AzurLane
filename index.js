// using module because node-fetch v3 doesnt support commonJS
import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let AzurAPI		= [];
let ShipBanner	= [];
let json_data	= [];
let table_array = [];

Promise.all([
	fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json")
	.then(res => res.json()),
	fetch("https://raw.githubusercontent.com/Fernando2603/AzurLane/main/ShipBanner.json")
	.then(res => res.json())
]).then(
	([azurAPI, shipBanner]) => {
		AzurAPI		= azurAPI;
		console.log("AzurAPI & ShipBanner Loaded!");
		ShipBanner	= shipBanner;
		data_extract(azurAPI, shipBanner); 
	},
	(error) => {
		console.log('error: ' + error);
	}
);

function data_extract(azurapi, ship_banner) {

	const __dirname	= dirname(fileURLToPath(import.meta.url));
	
	azurapi.forEach((ship) => {

		let ship_name	= ship.names.en;
		const ship_id	= ship.id;
		const skin_link	= "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/";
		const ship_skin	= ship.skins; // array

		// replace name because azurapi names.en output is hiryu.meta & royal.meta
		if ( ship_id === "30001" ) { ship_name = "Hiryuu META" };
		if ( ship_id === "30002" ) { ship_name = "Ark Royal META" };

		// check banner exist or not
		let banner_get	= ship_banner.find( banner => banner.id === ship_id );
		let skin_output	= [];

		if ( banner_get ) {

			ship_skin.forEach((skin) => {

				const skin_name			= skin.name;
				let skin_availability	= false;
				let banner_skin_get		= "";

				banner_get.skins.forEach((banner_skin_data) => {

					if ( banner_skin_data.name === skin_name ) {

						banner_skin_get		= banner_skin_data;
						skin_availability	= true;

					};

				});

				if ( skin_availability ) {

					// both azurapi/shipbanner have this skin
					let skin_banner		= banner_skin_get.banner;
					let skin_icon		= banner_skin_get.icon;
					let skin_chibi		= banner_skin_get.chibi;
					let skin_shipyard	= banner_skin_get.shipyard;
					const skin_type		= banner_skin_get.type;

					let check_file		= false;
					let file_trigger_1	= false;
					let file_trigger_2	= false;
					let file_trigger_3	= false;
					let file_trigger_4	= false;
					const includes_skin	= "/000/Default/";
					if ( skin_banner.includes(includes_skin) )		{ check_file	= true; file_trigger_1	= true };
					if ( skin_icon.includes(includes_skin) )		{ check_file	= true; file_trigger_2	= true };
					if ( skin_chibi.includes(includes_skin) )		{ check_file	= true; file_trigger_3	= true };
					if ( skin_shipyard.includes(includes_skin) )	{ check_file	= true; file_trigger_4	= true };

					if ( check_file ) {

						// updated skin and remove unknown skin image
						const replace_name	= ship_name.replace(/ /g,"_");
						const skin_folder	= skin_name.replace(/ /g,"_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
						const skin_library	= skin_link + ship_id + "/" + skin_folder + "/";

						const file_path		= "/images/skins/" + ship_id + "/" + skin_folder + "/";
						const absolute_path	= join(__dirname, file_path);
						const update_path	= join(__dirname, "/update/");

						let status_file_1	= false;
						let status_file_2	= false;
						let status_file_3	= false;
						let status_file_4	= false;

						// loop new skin file from wiki & relocate
						fs.readdirSync(update_path).forEach((file) => {

							// filter current file with this ship name
							if ( file.startsWith(replace_name + skin_type) ) {

								let default_skin_file	= false;
								let image_type			= "";

								// filter default file
								if ( 
									file === replace_name + "Banner.png" ||
									file === replace_name + "Icon.png" ||
									file === replace_name + "ChibiIcon.png" ||
									file === replace_name + "ShipyardIcon.png"
								) { default_skin_file	= true };

								if ( file.includes("Banner.png") )			{ image_type = "Banner.png" };
								if ( file.includes("Icon.png") )			{ image_type = "Icon.png" };
								if ( file.includes("ChibiIcon.png") )		{ image_type = "ChibiIcon.png" };
								if ( file.includes("ShipyardIcon.png") )	{ image_type = "ShipyardIcon.png" };

								const new_skin_path	= join(update_path, ship_id + "/" + skin_folder + "/");
								const old_skin_path	= join(update_path, file);

								// create directory
								fs.mkdirSync(new_skin_path, { recursive:true });

								// move default file to directory
								if ( default_skin_file ) {
									console.log(file);
									fs.renameSync(old_skin_path, join(new_skin_path + image_type));
								};

								// thus if only using 1 fs.renameSync this make default & non-default skin replaced each other
								// and make non-default skin file ignore/reject the default skin loop
								// move non-default skin to directory
								if ( skin_name !== "Default" ) {
									console.log(file);
									fs.renameSync(old_skin_path, join(new_skin_path + image_type));
								};

							};
							
						});

						if ( fs.existsSync(absolute_path) ) {

							fs.readdirSync(absolute_path).forEach((file) => {

								if ( file === "Banner.png" )		{ status_file_1 = true };
								if ( file === "Icon.png" )			{ status_file_2 = true };
								if ( file === "ChibiIcon.png" )		{ status_file_3 = true };
								if ( file === "ShipyardIcon.png" )	{ status_file_4 = true };

							});

						};

						if (
							status_file_1 && file_trigger_1 ||
							status_file_2 && file_trigger_2 ||
							status_file_3 && file_trigger_3 ||
							status_file_4 && file_trigger_4
						) {
							table_array.push({
								status: "New Patch",
								name: ship_name,
								id: ship_id,
								type: skin_type,
								skin: skin_name,
								folder: skin_folder
							});
						};

						if ( status_file_1 && file_trigger_1 ) { skin_banner	= skin_library + "Banner.png" };
						if ( status_file_2 && file_trigger_2 ) { skin_icon		= skin_library + "Icon.png" };
						if ( status_file_3 && file_trigger_3 ) { skin_chibi		= skin_library + "ChibiIcon.png" };
						if ( status_file_4 && file_trigger_4 ) { skin_shipyard	= skin_library + "ShipyardIcon.png" };

					};

					skin_output.push({
						name: skin_name,
						type: skin_type,
						banner: skin_banner,
						icon: skin_icon,
						chibi: skin_chibi,
						shipyard: skin_shipyard
					});

				};


				if ( !skin_availability ) {

					// new skin that shipbanner doesnt have
					const replace_name	= ship_name.replace(/ /g,"_");
					const skin_folder	= skin_name.replace(/ /g,"_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
					const skin_library	= skin_link + ship_id + "/" + skin_folder + "/";

					const file_path		= "/images/skins/" + ship_id + "/" + skin_folder + "/";
					const absolute_path	= join(__dirname, file_path);
					const update_path	= join(__dirname, "/update/");

					let status_file_1	= false;
					let status_file_2	= false;
					let status_file_3	= false;
					let status_file_4	= false;

					let skin_type		= "";

					// loop new skin file from wiki & relocate
					fs.readdirSync(update_path).forEach((file) => {

						// check skin type for first file get and make other same as this type
						if ( skin_name === "Default" ) { skin_type	= "Default" };
						if ( skin_type === "" ) {
							skin_type	= file.replace(replace_name, "")
								.replace("Banner.png", "")
								.replace("Icon.png", "")
								.replace("ChibiIcon", "")
								.replace("ShipyardIcon.png", "");
						};

						// filter current file with this ship name
						if ( file.startsWith(replace_name) && file.includes(skin_type).replace("Default", "") ) {

							let default_skin_file	= false;
							let image_type			= "";

							// filter default file
							if ( 
								file === replace_name + "Banner.png" ||
								file === replace_name + "Icon.png" ||
								file === replace_name + "ChibiIcon.png" ||
								file === replace_name + "ShipyardIcon.png"
							) { default_skin_file	= true };

							if ( file.includes("Banner.png") )			{ image_type = "Banner.png" };
							if ( file.includes("Icon.png") )			{ image_type = "Icon.png" };
							if ( file.includes("ChibiIcon.png") )		{ image_type = "ChibiIcon.png" };
							if ( file.includes("ShipyardIcon.png") )	{ image_type = "ShipyardIcon.png" };

							const new_skin_path	= join(update_path, ship_id + "/" + skin_folder + "/");
							const old_skin_path	= join(update_path, file);

							// create directory
							fs.mkdirSync(new_skin_path, { recursive:true });

							// move default file to directory
							if ( default_skin_file ) {
								console.log(file);
								fs.renameSync(old_skin_path, join(new_skin_path + image_type));
							};

							// thus if only using 1 fs.renameSync this make default & non-default skin replaced each other
							// and make non-default skin file ignore/reject the default skin loop
							// move non-default skin to directory
							if ( skin_name !== "Default" ) {
								console.log(file);
								fs.renameSync(old_skin_path, join(new_skin_path + image_type));
							};

						};
						
					});

					if ( fs.existsSync(absolute_path) ) {

						fs.readdirSync(absolute_path).forEach((file) => {

							if ( file === "Banner.png" )		{ status_file_1 = true };
							if ( file === "Icon.png" )			{ status_file_2 = true };
							if ( file === "ChibiIcon.png" )		{ status_file_3 = true };
							if ( file === "ShipyardIcon.png" )	{ status_file_4 = true };

						});

					};

					table_array.push({
						status: "New Skin",
						name: ship_name,
						id: ship_id,
						type: skin_type,
						skin: skin_name,
						folder: skin_folder
					});

					let new_skin_banner		= skin_link + "000/Default/Banner.png";
					let new_skin_icon		= skin_link + "000/Default/Icon.png";
					let new_skin_chibi		= skin_link + "000/Default/ChibiIcon.png";
					let new_skin_shipyard	= skin_link + "000/Default/ShipyardIcon.png";

					if ( status_file_1 ) { new_skin_banner		= skin_library + "Banner.png" };
					if ( status_file_2 ) { new_skin_icon		= skin_library + "Icon.png" };
					if ( status_file_3 ) { new_skin_chibi		= skin_library + "ChibiIcon.png" };
					if ( status_file_4 ) { new_skin_shipyard	= skin_library + "ShipyardIcon.png" };

					skin_output.push({
						status: "new skin",
						name: skin_name,
						banner: new_skin_banner,
						icon: new_skin_icon,
						chibi: new_skin_chibi,
						shipyard: new_skin_shipyard
					});

				};

			});

		};

		let ship_json_builder	= ({
			id: ship_id,
			name: ship_name,
			skins: skin_output
		});

		if ( !banner_get ) {

			// new ship
			let unknown_skin_get	= [];

			ship_skin.forEach((skin) => {

				const skin_name		= skin.name;
				const replace_name	= ship_name.replace(/ /g,"_");
				const skin_folder	= skin_name.replace(/ /g,"_").replace(/\W/g,"").replace(/__/g,"_").replace(/_*$/,"");
				const skin_library	= skin_link + ship_id + "/" + skin_folder + "/";

				const file_path		= "/images/skins/" + ship_id + "/" + skin_folder + "/";
				const absolute_path	= join(__dirname, file_path);
				const update_path	= join(__dirname, "/update/");

				let status_file_1	= false;
				let status_file_2	= false;
				let status_file_3	= false;
				let status_file_4	= false;

				let skin_type		= "";

				// loop new skin file from wiki & relocate
				fs.readdirSync(update_path).forEach((file) => {

					// check skin type for first file get and make other same as this type
					if ( skin_name === "Default" ) { skin_type	= "Default" };
					if ( skin_type === "" ) {
						skin_type	= file.replace(replace_name, "")
							.replace("Banner.png", "")
							.replace("Icon.png", "")
							.replace("ChibiIcon", "")
							.replace("ShipyardIcon.png", "");
					};

					// filter current file with this ship name
					if ( file.startsWith(replace_name) && file.includes(skin_type).replace("Default", "") ) {

						let default_skin_file	= false;
						let image_type			= "";

						// filter default file
						if ( 
							file === replace_name + "Banner.png" ||
							file === replace_name + "Icon.png" ||
							file === replace_name + "ChibiIcon.png" ||
							file === replace_name + "ShipyardIcon.png"
						) { default_skin_file	= true };

						if ( file.includes("Banner.png") )			{ image_type = "Banner.png" };
						if ( file.includes("Icon.png") )			{ image_type = "Icon.png" };
						if ( file.includes("ChibiIcon.png") )		{ image_type = "ChibiIcon.png" };
						if ( file.includes("ShipyardIcon.png") )	{ image_type = "ShipyardIcon.png" };

						const new_skin_path	= join(update_path, ship_id + "/" + skin_folder + "/");
						const old_skin_path	= join(update_path, file);

						// create directory
						fs.mkdirSync(new_skin_path, { recursive:true });

						// move default file to directory
						if ( default_skin_file ) {
							console.log(file);
							fs.renameSync(old_skin_path, join(new_skin_path + image_type));
						};

						// thus if only using 1 fs.renameSync this make default & non-default skin replaced each other
						// and make non-default skin file ignore/reject the default skin loop
						// move non-default skin to directory
						if ( skin_name !== "Default" ) {
							console.log(file);
							fs.renameSync(old_skin_path, join(new_skin_path + image_type));
						};

					};
					
				});

				if ( fs.existsSync(absolute_path) ) {

					fs.readdirSync(absolute_path).forEach((file) => {

						if ( file === "Banner.png" )		{ status_file_1 = true };
						if ( file === "Icon.png" )			{ status_file_2 = true };
						if ( file === "ChibiIcon.png" )		{ status_file_3 = true };
						if ( file === "ShipyardIcon.png" )	{ status_file_4 = true };

					});

				};

				table_array.push({
					status: "New Ship",
					name: ship_name,
					id: ship_id,
					type: skin_type,
					skin: skin_name,
					folder: skin_folder
				});

				let new_skin_banner		= skin_link + "000/Default/Banner.png";
				let new_skin_icon		= skin_link + "000/Default/Icon.png";
				let new_skin_chibi		= skin_link + "000/Default/ChibiIcon.png";
				let new_skin_shipyard	= skin_link + "000/Default/ShipyardIcon.png";

				if ( status_file_1 ) { new_skin_banner		= skin_library + "Banner.png" };
				if ( status_file_2 ) { new_skin_icon		= skin_library + "Icon.png" };
				if ( status_file_3 ) { new_skin_chibi		= skin_library + "ChibiIcon.png" };
				if ( status_file_4 ) { new_skin_shipyard	= skin_library + "ShipyardIcon.png" };

				unknown_skin_get.push({
					status: "new ship",
					name: skin_name,
					type: skin_type,
					banner: new_skin_banner,
					icon: new_skin_icon,
					chibi: new_skin_chibi,
					shipyard: new_skin_shipyard
				});

			});

			ship_json_builder	= ({
				status: "new ship",
				id: ship_id,
				name: ship_name,
				skins: unknown_skin_get
			});

		};

		json_data.push(ship_json_builder);

	});

	console.table(
		table_array.map(idx => {
			return {
				"STATUS": idx.status,
				"SHIP": idx.name,
				"ID": idx.id,
				"TYPE": idx.type,
				"SKIN": idx.skin,
				"FOLDER": idx.folder
			};
		})
	);

	const json_content	= JSON.stringify(json_data, null , "\t");

	fs.writeFile("./main.json", json_content, 'utf8', function (err) {

		if (err) {
			console.log("An error occured while writing JSON to File");
			return console.log(err);
		};

		console.log("=> ./main.json has been updated!");

	});
};