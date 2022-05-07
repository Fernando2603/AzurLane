export default function resolve_namecode(line, name_code) {
	let line_output	= line;
	if ( line.includes("namecode") ) {
		let keys = [];
    	Object.keys(name_code).forEach(function(key){
    		const keys_find	= keys.find(idx => idx === key);
    		if ( !keys_find ) keys.push(key);
	    });
	    do {
	    	keys.forEach((code) => {
		    	const replace_name	= `{namecode:${code}}`;
		    	const format_name	= name_code[code].name;
		    	line_output	= line_output.replace(replace_name, format_name);
		    });
	    }
    	while( line_output.includes("namecode") );
	};

	if ( line.includes("<color") ) {
		line_output	= line_output.replace("<color=#ffde38>", "").replace("</color>", "");
	};
	return line_output
};