import fs from "node:fs";
import { join } from "path";

export default function ship_patch(ship, ship_skin, ship_banner, __dirname)
{
	// ship <azurapi>
	const SHIP_NAME = ship.names.en;
	const SHIP_ID   = ship.id;

	// general
	const SKIN_LINK = "https://raw.githubusercontent.com/Fernando2603/AzurLane/main/images/skins/";

	// output
	let table_array = [];
	let skin_output = [];

	// script
	ship_skin.forEach((skin) =>
	{
		const SKIN_NAME    = skin.name;
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

		let ship_skin_type = "";

		// loop new skin file from wiki & relocate
		fs.readdirSync(UPDATE_PATH).forEach((file) =>
		{
			let skin_type = ship_skin_type;

			// check skin type for first file get and make other same as this type
			if (SKIN_NAME === "Default") skin_type = "Default";
			if (skin_type === "")
			{
				skin_type = file.replace(REPLACE_NAME, "")
					.replace("Banner.png", "")
					.replace("ChibiIcon.png", "")
					.replace("ShipyardIcon.png", "")
					.replace("Icon.png", "");
			};

			// filter current file with this ship name
			if (file.startsWith(REPLACE_NAME) && file.includes(skin_type.replace("Default", "")))
			{
				let default_skin_file = false;
				let image_type = "";
				if (ship_skin_type === "") ship_skin_type = skin_type;

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

		table_array.push({
			status: "New Ship",
			name: SHIP_NAME,
			id: SHIP_ID,
			type: ship_skin_type,
			skin: SKIN_NAME,
			folder: SKIN_FOLDER
		});

		let new_skin_banner   = SKIN_LINK + "000/Default/Banner.png";
		let new_skin_icon     = SKIN_LINK + "000/Default/Icon.png";
		let new_skin_chibi    = SKIN_LINK + "000/Default/ChibiIcon.png";
		let new_skin_shipyard = SKIN_LINK + "000/Default/ShipyardIcon.png";

		if (status_file_1) new_skin_banner   = SKIN_LIBRARY + "Banner.png";
		if (status_file_2) new_skin_icon     = SKIN_LIBRARY + "Icon.png";
		if (status_file_3) new_skin_chibi    = SKIN_LIBRARY + "ChibiIcon.png";
		if (status_file_4) new_skin_shipyard = SKIN_LIBRARY + "ShipyardIcon.png";

		skin_output.push({
			name: SKIN_NAME,
			type: ship_skin_type,
			banner: new_skin_banner,
			icon: new_skin_icon,
			chibi: new_skin_chibi,
			shipyard: new_skin_shipyard
		});
	});

	const SHIP_OUTPUT = ({
		id: SHIP_ID,
		name: SHIP_NAME,
		skins: skin_output
	});

	return ({ table_array: table_array, SHIP_OUTPUT: SHIP_OUTPUT });
};
