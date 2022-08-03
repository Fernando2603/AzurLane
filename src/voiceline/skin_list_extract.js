export default function skin_list_extract(skin, skin_template, ship_gid)
{
	let skin_list = [];
	skin.forEach((idx) =>
	{
		const SKIN_INDEX = idx.toString();
		let ship_group   = "";
		if (skin_template[SKIN_INDEX])
			ship_group = skin_template[SKIN_INDEX].ship_group;


		if (ship_group === ship_gid)
			skin_list.push(SKIN_INDEX);
	});

	return skin_list;
};
