import ship_normalize from './ship_normalize.js';
import resolve_namecode from './resolve_namecode.js';

export default function voiceline_extract(
	ship,
	skin_list,
	skin_template,
	skin_voiceline,
	skin_voiceline_extra,
	name_code
) {
	let ship_name	= ship.names.en;
	const ship_id	= ship.id;
	const ship_gid	= ship._gid;
	if ( ship_id === "30001" ) { ship_name = "Hiryuu META" };
	if ( ship_id === "30002" ) { ship_name = "Ark Royal META" };

	let skin_output	= [];

	if ( skin_list.length !== 0 ) {
		skin_list.forEach((skin) => {
			const voiceline_data	= skin_voiceline[skin];
			let skin_name			= skin_template[skin].name;
			const normalize_skin	= ship_normalize(skin_name);
			const normalize_name	= ship_normalize(ship_name);

			if ( normalize_skin === normalize_name )	{ skin_name	= "Default" };
			if ( skin_name.includes("namecode") )		{ skin_name	= "Default" };
			if ( skin_name.includes("Retrofit") )		{ skin_name	= "Retrofit" };
			
			const line_battle			= resolve_namecode(voiceline_data.battle, name_code);
			const line_detail			= resolve_namecode(voiceline_data.detail, name_code);
			const line_drop_descrip		= resolve_namecode(voiceline_data.drop_descrip, name_code);
			const line_expedition		= resolve_namecode(voiceline_data.expedition, name_code);
			const line_feeling1			= resolve_namecode(voiceline_data.feeling1, name_code);
			const line_feeling2			= resolve_namecode(voiceline_data.feeling2, name_code);
			const line_feeling3			= resolve_namecode(voiceline_data.feeling3, name_code);
			const line_feeling4			= resolve_namecode(voiceline_data.feeling4, name_code);
			const line_feeling5			= resolve_namecode(voiceline_data.feeling5, name_code);
			const line_headtouch		= resolve_namecode(voiceline_data.headtouch, name_code);
			const line_home				= resolve_namecode(voiceline_data.home, name_code);
			const line_hp_warning		= resolve_namecode(voiceline_data.hp_warning, name_code);
			const line_login			= resolve_namecode(voiceline_data.login, name_code);
			const line_lose				= resolve_namecode(voiceline_data.lose, name_code);
			const line_mail				= resolve_namecode(voiceline_data.mail, name_code);
			const line_main				= resolve_namecode(voiceline_data.main, name_code);
			const line_mission			= resolve_namecode(voiceline_data.mission, name_code);
			const line_mission_complete	= resolve_namecode(voiceline_data.mission_complete, name_code);
			const line_profile			= resolve_namecode(voiceline_data.profile, name_code);
			const line_propose			= resolve_namecode(voiceline_data.propose, name_code);
			const line_skill			= resolve_namecode(voiceline_data.skill, name_code);
			const line_touch			= resolve_namecode(voiceline_data.touch, name_code);
			const line_touch2			= resolve_namecode(voiceline_data.touch2, name_code);
			const line_unlock			= resolve_namecode(voiceline_data.unlock, name_code);
			const line_upgrade			= resolve_namecode(voiceline_data.upgrade, name_code);
			const line_win_mvp			= resolve_namecode(voiceline_data.win_mvp, name_code);


			let voiceline_battle			= ({ type: "battle", line: line_battle });
			let voiceline_detail			= ({ type: "detail", line: line_detail });
			let voiceline_drop_descrip		= ({ type: "drop_descrip", line: line_drop_descrip });
			let voiceline_expedition		= ({ type: "expedition", line: line_expedition });
			let voiceline_feeling1			= ({ type: "feeling1", line: line_feeling1 });
			let voiceline_feeling2			= ({ type: "feeling2", line: line_feeling2 });
			let voiceline_feeling3			= ({ type: "feeling3", line: line_feeling3 });
			let voiceline_feeling4			= ({ type: "feeling4", line: line_feeling4 });
			let voiceline_feeling5			= ({ type: "feeling5", line: line_feeling5 });
			let voiceline_headtouch			= ({ type: "headtouch", line: line_headtouch });
			let voiceline_home				= ({ type: "home", line: line_home });
			let voiceline_hp_warning		= ({ type: "hp_warning", line: line_hp_warning });
			let voiceline_login				= ({ type: "login", line: line_login });
			let voiceline_lose				= ({ type: "lose", line: line_lose });
			let voiceline_mail				= ({ type: "mail", line: line_mail });
			let voiceline_main				= ({ type: "main", line: line_main });
			let voiceline_mission			= ({ type: "mission", line: line_mission });
			let voiceline_mission_complete	= ({ type: "mission_complete", line: line_mission_complete });
			let voiceline_profile			= ({ type: "profile", line: line_profile });
			let voiceline_propose			= ({ type: "propose", line: line_propose });
			let voiceline_skill				= ({ type: "skill", line: line_skill });
			let voiceline_touch				= ({ type: "touch", line: line_touch });
			let voiceline_touch2			= ({ type: "touch2", line: line_touch2 });
			let voiceline_unlock			= ({ type: "unlock", line: line_unlock });
			let voiceline_upgrade			= ({ type: "upgrade", line: line_upgrade });
			let voiceline_win_mvp			= ({ type: "win_mvp", line: line_win_mvp });

			const voiceline_oath	= skin_voiceline_extra[skin];
			if ( voiceline_oath ) {
				if ( voiceline_oath.battle !== "" ) {
					const oath_battle	= { oath: resolve_namecode(voiceline_oath.battle[0][1], name_code) };
					voiceline_battle	= ({ ...voiceline_battle, ...oath_battle })
				};
				if ( voiceline_oath.detail !== "" ) {
					const oath_detail	= { oath: resolve_namecode(voiceline_oath.detail[0][1], name_code) };
					voiceline_detail	= ({ ...voiceline_detail, ...oath_detail })
				};
				if ( voiceline_oath.expedition !== "" ) {
					const oath_expedition	= { oath: resolve_namecode(voiceline_oath.expedition[0][1], name_code) };
					voiceline_expedition	= ({ ...voiceline_expedition, ...oath_expedition })
				};
				if ( voiceline_oath.feeling1 !== "" ) {
					const oath_feeling1	= { oath: resolve_namecode(voiceline_oath.feeling1[0][1], name_code) };
					voiceline_feeling1	= ({ ...voiceline_feeling1, ...oath_feeling1 })
				};
				if ( voiceline_oath.feeling2 !== "" ) {
					const oath_feeling2	= { oath: resolve_namecode(voiceline_oath.feeling2[0][1], name_code) };
					voiceline_feeling2	= ({ ...voiceline_feeling2, ...oath_feeling2 })
				};
				if ( voiceline_oath.feeling3 !== "" ) {
					const oath_feeling3	= { oath: resolve_namecode(voiceline_oath.feeling3[0][1], name_code) };
					voiceline_feeling3	= ({ ...voiceline_feeling3, ...oath_feeling3 })
				};
				if ( voiceline_oath.feeling4 !== "" ) {
					const oath_feeling4	= { oath: resolve_namecode(voiceline_oath.feeling4[0][1], name_code) };
					voiceline_feeling4	= ({ ...voiceline_feeling4, ...oath_feeling4 })
				};
				if ( voiceline_oath.feeling5 !== "" ) {
					const oath_feeling5	= { oath: resolve_namecode(voiceline_oath.feeling5[0][1], name_code) };
					voiceline_feeling5	= ({ ...voiceline_feeling5, ...oath_feeling5 })
				};
				if ( voiceline_oath.headtouch !== "" ) {
					const oath_headtouch	= { oath: resolve_namecode(voiceline_oath.headtouch[0][1], name_code) };
					voiceline_headtouch	= ({ ...voiceline_headtouch, ...oath_headtouch })
				};
				if ( voiceline_oath.home !== "" ) {
					const oath_home	= { oath: resolve_namecode(voiceline_oath.home[0][1], name_code) };
					voiceline_home	= ({ ...voiceline_home, ...oath_home })
				};
				if ( voiceline_oath.login !== "" ) {
					const oath_login	= { oath: resolve_namecode(voiceline_oath.login[0][1], name_code) };
					voiceline_login	= ({ ...voiceline_login, ...oath_login })
				};
				if ( voiceline_oath.lose !== "" ) {
					const oath_lose	= { oath: resolve_namecode(voiceline_oath.lose[0][1], name_code) };
					voiceline_lose	= ({ ...voiceline_lose, ...oath_lose })
				};
				if ( voiceline_oath.mail !== "" ) {
					const oath_mail	= { oath: resolve_namecode(voiceline_oath.mail[0][1], name_code) };
					voiceline_mail	= ({ ...voiceline_mail, ...oath_mail })
				};
				if ( voiceline_oath.main !== "" ) {
					const oath_main	= { oath: resolve_namecode(voiceline_oath.main[0][1], name_code) };
					voiceline_main	= ({ ...voiceline_main, ...oath_main })
				};
				if ( voiceline_oath.main_extra !== "" ) {
					const oath_main_extra	= { extra: resolve_namecode(voiceline_oath.main_extra[0][1], name_code) };
					voiceline_main			= ({ ...voiceline_main, ...oath_main_extra })
				};
				if ( voiceline_oath.mission !== "" ) {
					const oath_mission	= { oath: resolve_namecode(voiceline_oath.mission[0][1], name_code) };
					voiceline_mission	= ({ ...voiceline_mission, ...oath_mission })
				};
				if ( voiceline_oath.mission_complete !== "" ) {
					const oath_mission_complete	= { oath: resolve_namecode(voiceline_oath.mission_complete[0][1], name_code) };
					voiceline_mission_complete	= ({ ...voiceline_mission_complete, ...oath_mission_complete })
				};
				if ( voiceline_oath.profile !== "" ) {
					const oath_profile	= { oath: resolve_namecode(voiceline_oath.profile[0][1], name_code) };
					voiceline_profile	= ({ ...voiceline_profile, ...oath_profile })
				};
				if ( voiceline_oath.skill !== "" ) {
					const oath_skill	= { oath: resolve_namecode(voiceline_oath.skill[0][1], name_code) };
					voiceline_skill	= ({ ...voiceline_skill, ...oath_skill })
				};
				if ( voiceline_oath.touch !== "" ) {
					const oath_touch	= { oath: resolve_namecode(voiceline_oath.touch[0][1], name_code) };
					voiceline_touch	= ({ ...voiceline_touch, ...oath_touch })
				};
				if ( voiceline_oath.touch2 !== "" ) {
					const oath_touch2	= { oath: resolve_namecode(voiceline_oath.touch2[0][1], name_code) };
					voiceline_touch2	= ({ ...voiceline_touch2, ...oath_touch2 })
				};
				if ( voiceline_oath.unlock !== "" ) {
					const oath_unlock	= { oath: resolve_namecode(voiceline_oath.unlock[0][1], name_code) };
					voiceline_unlock	= ({ ...voiceline_unlock, ...oath_unlock })
				};
				if ( voiceline_oath.upgrade !== "" ) {
					const oath_upgrade	= { oath: resolve_namecode(voiceline_oath.upgrade[0][1], name_code) };
					voiceline_upgrade	= ({ ...voiceline_upgrade, ...oath_upgrade })
				};
				if ( voiceline_oath.win_mvp !== "" ) {
					const oath_win_mvp	= { oath: resolve_namecode(voiceline_oath.win_mvp[0][1], name_code) };
					voiceline_win_mvp	= ({ ...voiceline_win_mvp, ...oath_win_mvp })
				};
			};

			const voiceline_array	= [
				voiceline_battle,
				voiceline_detail,
				voiceline_drop_descrip,
				voiceline_expedition,
				voiceline_feeling1,
				voiceline_feeling2,
				voiceline_feeling3,
				voiceline_feeling4,
				voiceline_feeling5,
				voiceline_headtouch,
				voiceline_home,
				voiceline_hp_warning,
				voiceline_login,
				voiceline_lose,
				voiceline_mail,
				voiceline_main,
				voiceline_mission,
				voiceline_mission_complete,
				voiceline_profile,
				voiceline_propose,
				voiceline_skill,
				voiceline_touch,
				voiceline_touch2,
				voiceline_unlock,
				voiceline_upgrade,
				voiceline_win_mvp
			];

			let voiceline_list	= [];

			voiceline_array.forEach((type) => {
				const voice_type	= type.type;
				const voice_line	= type.line;
				if ( voice_line !== "" ) { voiceline_list.push(type) };
			});

			const skin_get	= ({ id: skin, name: skin_name, voiceline: voiceline_list });
			skin_output.push(skin_get);
		});
	} else { console.log(ship.names.en.padEnd(20) + "E404-NULL".padEnd(10) + "VOICE_LINE EN") };

	const ship_output	= ({
		id: ship.id,
		gid: ship._gid,
		name: ship.names.en,
		skins: skin_output
	});

	return ship_output
};