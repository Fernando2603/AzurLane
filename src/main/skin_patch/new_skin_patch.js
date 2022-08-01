import fs from "node:fs";
import { join } from "path";

export default function new_skin_patch(ship, ship_banner, ship_skin, __dirname)
{
	// ship <azurapi>
	const ship_name = ship.names.en;
	const ship_id   = ship.id;

	// ship_skin <azurapi>
	const skin_name = ship_skin.name;

	// output
	let table_array;
	let skin_output;

	// general
	const skin_link = "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/";

	// script
	const replace_name = ship_name.replace(/ /g, "_");
	const skin_folder  = skin_name.replace(/ /g, "_").replace(/\W/g, "").replace(/__/g, "_").replace(/_*$/, "");
	const skin_library = skin_link + ship_id + "/" + skin_folder + "/";

	const file_path     = "/images/skins/" + ship_id + "/" + skin_folder + "/";
	const absolute_path = join(__dirname, file_path);
	const update_path   = join(__dirname, "/update/");

	let status_file_1 = false;
	let status_file_2 = false;
	let status_file_3 = false;
	let status_file_4 = false;

	let ship_skin_type = "";

	// loop new skin file from wiki & relocate
	fs.readdirSync(update_path).forEach((file) =>
	{
		let skin_type = ship_skin_type;

		if (skin_name === "Default") skin_type = "Default";
		if (skin_type === "")
		{
			skin_type = file.replace(replace_name, "")
				.replace("Banner.png", "")
				.replace("ChibiIcon.png", "")
				.replace("ShipyardIcon.png", "")
				.replace("Icon.png", "");
		};

		// filter current file with this ship name
		if (file.startsWith(replace_name) && file.includes(skin_type.replace("Default", "")))
		{
			let default_skin_file = false;
			let image_type = "";
			if (ship_skin_type === "") ship_skin_type = skin_type;

			// filter default file
			if (
				file === replace_name + "Banner.png" ||
				file === replace_name + "Icon.png" ||
				file === replace_name + "ChibiIcon.png" ||
				file === replace_name + "ShipyardIcon.png"
			) default_skin_file = true;

			if (file.includes("Banner.png"))
				image_type = "Banner.png";

			if (file.includes("Icon.png"))
				image_type = "Icon.png";

			if (file.includes("ChibiIcon.png"))
				image_type = "ChibiIcon.png";

			if (file.includes("ShipyardIcon.png"))
				image_type = "ShipyardIcon.png";

			const new_skin_path = absolute_path;
			const old_skin_path = join(update_path, file);

			// create directory
			fs.mkdirSync(new_skin_path, { recursive: true });

			// move default file to directory
			if (default_skin_file)
			{
				console.log(file);
				fs.renameSync(old_skin_path, join(new_skin_path + image_type));
			};

			// thus if only using 1 fs.renameSync this make default & non-default skin replaced each other
			// and make non-default skin file ignore/reject the default skin loop
			// move non-default skin to directory
			if (skin_name !== "Default")
			{
				console.log(file);
				fs.renameSync(old_skin_path, join(new_skin_path + image_type));
			};
		};
	});

	if (fs.existsSync(absolute_path))
	{
		fs.readdirSync(absolute_path).forEach((file) =>
		{
			if (file === "Banner.png")
				status_file_1 = true;

			if (file === "Icon.png")
				status_file_2 = true;

			if (file === "ChibiIcon.png")
				status_file_3 = true;

			if (file === "ShipyardIcon.png")
				status_file_4 = true;
		});
	};

	table_array = ({
		status: "New Skin",
		name: ship_name,
		id: ship_id,
		type: ship_skin_type,
		skin: skin_name,
		folder: skin_folder
	});

	let new_skin_banner   = skin_link + "000/Default/Banner.png";
	let new_skin_icon     = skin_link + "000/Default/Icon.png";
	let new_skin_chibi    = skin_link + "000/Default/ChibiIcon.png";
	let new_skin_shipyard = skin_link + "000/Default/ShipyardIcon.png";

	if (status_file_1) new_skin_banner   = skin_library + "Banner.png";
	if (status_file_2) new_skin_icon     = skin_library + "Icon.png";
	if (status_file_3) new_skin_chibi    = skin_library + "ChibiIcon.png";
	if (status_file_4) new_skin_shipyard = skin_library + "ShipyardIcon.png";

	skin_output = ({
		name: skin_name,
		type: ship_skin_type,
		banner: new_skin_banner,
		icon: new_skin_icon,
		chibi: new_skin_chibi,
		shipyard: new_skin_shipyard
	});

	return ({
		table_array: table_array,
		skin_output: skin_output
	});
};
