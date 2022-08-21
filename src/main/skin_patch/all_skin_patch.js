import fs from "node:fs";
import { join } from "path";

export default function all_skin_patch(ship, ship_banner, ship_skin, __dirname)
{
	// ship <azurapi>
	const SHIP_NAME = ship.names.en;
	const SHIP_ID   = ship.id;

	// ship_banner
	const SKIN_TYPE   = ship_banner.type;
	let skin_banner   = ship_banner.banner;
	let skin_icon     = ship_banner.icon;
	let skin_chibi    = ship_banner.chibi;
	let skin_shipyard = ship_banner.shipyard;

	// ship_skin <azurapi>
	const SKIN_NAME = ship_skin.name;

	// output
	let table_array;
	let skin_output;

	// general
	const SKIN_LINK     = "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/";
	const INCLUDES_SKIN = "/000/Default/";
	let check_file      = false;
	let file_trigger_1  = skin_banner.includes(INCLUDES_SKIN);
	let file_trigger_2  = skin_icon.includes(INCLUDES_SKIN);
	let file_trigger_3  = skin_chibi.includes(INCLUDES_SKIN);
	let file_trigger_4  = skin_shipyard.includes(INCLUDES_SKIN);

	if (file_trigger_1 || file_trigger_2 || file_trigger_3 || file_trigger_4) check_file = true;

	// check if missing file available
	if (check_file)
	{
		// updated skin and remove unknown skin image from main.json
		const REPLACE_NAME = SHIP_NAME.replace(/ /g, "_");
		const SKIN_FOLDER  = SKIN_NAME.replace(/ /g, "_").replace(/\W/g, "").replace(/__/g, "_").replace(/_*$/, "");
		const SKIN_LIBRARY = SKIN_LINK + SHIP_ID + "/" + SKIN_FOLDER + "/";

		const FILE_PATH     = "/images/skins/" + SHIP_ID + "/" + SKIN_FOLDER + "/";
		const ABSOLUTE_PATH = join(__dirname, FILE_PATH);
		const UPDATE_PATH   = join(__dirname, "/update/");

		let status_file_1 = false;
		let status_file_2 = false;
		let status_file_3 = false;
		let status_file_4 = false;

		// loop new skin file from wiki & relocate
		fs.readdirSync(UPDATE_PATH).forEach((file) =>
		{
			// filter current file with this ship name
			if (file.startsWith(REPLACE_NAME + SKIN_TYPE.replace("Default", "")))
			{
				let default_skin_file = false;
				let image_type = "";

				// filter default file
				if (
					file === REPLACE_NAME + "Banner.png" ||
					file === REPLACE_NAME + "Icon.png" ||
					file === REPLACE_NAME + "ChibiIcon.png" ||
					file === REPLACE_NAME + "ShipyardIcon.png"
				) default_skin_file = true;

				if (file.includes("Banner.png"))
					image_type = "Banner.png";

				if (file.includes("Icon.png"))
					image_type = "Icon.png";

				if (file.includes("ChibiIcon.png"))
					image_type = "ChibiIcon.png";

				if (file.includes("ShipyardIcon.png"))
					image_type = "ShipyardIcon.png";

				const NEW_SKIN_PATH = ABSOLUTE_PATH;
				const OLD_SKIN_PATH = join(UPDATE_PATH, file);

				// create directory
				fs.mkdirSync(NEW_SKIN_PATH, { recursive: true });

				// move default file to directory
				if (default_skin_file)
				{
					console.log(file);
					fs.renameSync(OLD_SKIN_PATH, join(NEW_SKIN_PATH + image_type));
				};

				// thus if only using 1 fs.renameSync this make default & non-default skin replaced each other
				// and make non-default skin file ignore/reject the default skin loop
				// move non-default skin to directory
				if (SKIN_NAME !== "Default")
				{
					console.log(file);
					fs.renameSync(OLD_SKIN_PATH, join(NEW_SKIN_PATH + image_type));
				};
			};
		});

		if (fs.existsSync(ABSOLUTE_PATH))
		{
			fs.readdirSync(ABSOLUTE_PATH).forEach((file) =>
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

		if (
			status_file_1 && file_trigger_1 ||
			status_file_2 && file_trigger_2 ||
			status_file_3 && file_trigger_3 ||
			status_file_4 && file_trigger_4
		) table_array = ({
			status: "New Patch",
			name: SHIP_NAME,
			id: SHIP_ID,
			type: SKIN_TYPE,
			skin: SKIN_NAME,
			folder: SKIN_FOLDER
		});

		if (status_file_1 && file_trigger_1) skin_banner   = SKIN_LIBRARY + "Banner.png";
		if (status_file_2 && file_trigger_2) skin_icon     = SKIN_LIBRARY + "Icon.png";
		if (status_file_3 && file_trigger_3) skin_chibi    = SKIN_LIBRARY + "ChibiIcon.png";
		if (status_file_4 && file_trigger_4) skin_shipyard = SKIN_LIBRARY + "ShipyardIcon.png";
	};

	skin_output = ({
		name: SKIN_NAME,
		type: SKIN_TYPE,
		banner: skin_banner,
		icon: skin_icon,
		chibi: skin_chibi,
		shipyard: skin_shipyard
	});

	return ({
		table_array: table_array,
		skin_output: skin_output
	});
};
