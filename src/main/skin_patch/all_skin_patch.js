// using module because node-fetch v3 doesnt support commonJS
import fs from 'node:fs';
import fetch from 'node-fetch';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export default function all_skin_patch(ship, ship_banner, ship_skin, __dirname) {
	// ship <azurapi>
	const ship_name		= ship.names.en;
	const ship_id		= ship.id;

	// ship_banner
	const skin_type		= ship_banner.type;
	let skin_banner		= ship_banner.banner;
	let skin_icon		= ship_banner.icon;
	let skin_chibi		= ship_banner.chibi;
	let skin_shipyard	= ship_banner.shipyard;

	// ship_skin <azurapi>
	const skin_name		= ship_skin.name;

	// output
	let table_array;
	let skin_output;

	// general
	const skin_link		= "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/"; 
	const includes_skin	= "/000/Default/";
	let check_file		= false;
	let file_trigger_1	= skin_banner.includes(includes_skin);
	let file_trigger_2	= skin_icon.includes(includes_skin);
	let file_trigger_3	= skin_chibi.includes(includes_skin);
	let file_trigger_4	= skin_shipyard.includes(includes_skin);

	if ( file_trigger_1 || file_trigger_2 || file_trigger_3 || file_trigger_4 ) { check_file	= true };

	// check if missing file available
	if ( check_file ) {
		// updated skin and remove unknown skin image from main.json
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
			if ( file.startsWith(replace_name + skin_type.replace("Default", "") ) ) {
				let default_skin_file	= false;
				let image_type			= "";

				// filter default file
				if ( 
					file === replace_name + "Banner.png" ||
					file === replace_name + "Icon.png" ||
					file === replace_name + "ChibiIcon.png" ||
					file === replace_name + "ShipyardIcon.png"
				) { default_skin_file	= true };

				if ( file.includes("Banner.png") )			{ image_type	= "Banner.png" };
				if ( file.includes("Icon.png") )			{ image_type	= "Icon.png" };
				if ( file.includes("ChibiIcon.png") )		{ image_type	= "ChibiIcon.png" };
				if ( file.includes("ShipyardIcon.png") )	{ image_type	= "ShipyardIcon.png" };

				const new_skin_path	= absolute_path;
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
				if ( file === "Banner.png" )		{ status_file_1	= true };
				if ( file === "Icon.png" )			{ status_file_2	= true };
				if ( file === "ChibiIcon.png" )		{ status_file_3	= true };
				if ( file === "ShipyardIcon.png" )	{ status_file_4	= true };
			});
		};

		if (
			status_file_1 && file_trigger_1 ||
			status_file_2 && file_trigger_2 ||
			status_file_3 && file_trigger_3 ||
			status_file_4 && file_trigger_4
		) {
			table_array	= ({
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

	skin_output	= ({
		name: skin_name,
		type: skin_type,
		banner: skin_banner,
		icon: skin_icon,
		chibi: skin_chibi,
		shipyard: skin_shipyard
	});

	const output_builder	= ({
		table_array: table_array,
		skin_output: skin_output
	});

	return output_builder
};