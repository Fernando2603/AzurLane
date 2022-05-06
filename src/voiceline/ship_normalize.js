export default function ship_normalize(data) {
	const data_return	= data
		.toLowerCase()
		.replace(/\s+/g, "_")
		.replace("μ","muse")
		.replace(".","")
		.replace("'","")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
	return data_return
};