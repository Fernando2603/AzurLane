export default function ship_normalize(data)
{
	return data
		.toLowerCase()
		.replace(/\s+/g, "_")
		.replace("μ", "muse")
		.replace(".", "")
		.replace("'", "")
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "");
};
