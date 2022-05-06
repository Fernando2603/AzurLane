export default function skin_list_extract(skin, skin_template, ship_gid) {
	let skin_list	= [];
	skin.forEach((idx) => {
		const skin_index	= idx.toString();
		let ship_group		= "";
		if ( skin_template[skin_index] ) {
			ship_group	= skin_template[skin_index].ship_group;
		};

		if ( ship_group === ship_gid ) {
			skin_list.push(skin_index);
		};
	});

	return skin_list
};