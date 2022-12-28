import all_skin_patch from "./skin_patch/all_skin_patch.js";
import new_skin_patch from "./skin_patch/new_skin_patch.js";

export default function skin_patch(ship, ship_skin, ship_banner, __dirname, has_mk2)
{
	// output
	const SKIN_OUTPUT = [];
	const TABLE_ARRAY = [];

	// script
	ship_skin.forEach((skin) =>
	{
		const SKIN_NAME       = skin.name;
		let skin_availability = false;
		let banner_skin_get   = "";
		let skin_patcher      = { skin_output: [], table_array: [] };

		// searching skin is available in shipbanner
		ship_banner.skins.forEach((banner_skin_data) =>
		{
			const { name } = banner_skin_data;

			if (name === SKIN_NAME)
			{
				banner_skin_get   = banner_skin_data;
				skin_availability = true;
			};
		});

		// temporary fix { ignore new skin for mark2 parent }
		let skip_skin = false;

		if (has_mk2 && !skin_availability)
			skip_skin = true;

		if (!skip_skin)
			if (skin_availability)
				skin_patcher = all_skin_patch(ship, banner_skin_get, skin, __dirname);
			else
				skin_patcher = new_skin_patch(ship, banner_skin_get, skin, __dirname);

		const SKIN_OUTPUT_PATCH = skin_patcher.skin_output;
		const TABLE_ARRAY_PATCH = skin_patcher.table_array;

		if (SKIN_OUTPUT_PATCH.length !== 0)
			SKIN_OUTPUT.push(SKIN_OUTPUT_PATCH);

		if (TABLE_ARRAY_PATCH !== undefined && TABLE_ARRAY_PATCH.length !== 0)
			TABLE_ARRAY.push(TABLE_ARRAY_PATCH);
	});

	return ({ table_array: TABLE_ARRAY, skin_output: SKIN_OUTPUT });
};
