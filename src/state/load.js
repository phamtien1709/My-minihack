var loadState = {
	preload: function () {
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.time.advancedTiming = true;
		KT.game.stage.disableVisibilityChange = true;
		// KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('line', 'assets/line.png');
		KT.game.load.image('dot', 'assets/dot.png');
		KT.game.load.image('bar1', 'assets/blockBar.png');
		KT.game.load.image('btn', 'assets/button.png');
		KT.game.load.image('piano', 'assets/pianoNote.png');
		KT.game.load.image('violet', 'assets/pianoNoteViolet.png');
		KT.game.load.image('orange', 'assets/pianoNoteOrange.png');
		KT.game.load.image('pianoEffect', 'assets/effectPiano.png');
		KT.game.load.image('note', 'assets/note.png');
		KT.game.load.image('optionDropDown', 'assets/optionDropDown.png');
		KT.game.load.image('bg', 'assets/bg.png');
		KT.game.load.image('btn_touch', 'assets/btn_touch.png');
		KT.game.load.image('btn_touched', 'assets/btn_touched.png');
		KT.game.load.image('btn_setting', 'assets/btn_setting.png');
		KT.game.load.image('ballEffect', 'assets/ballEffect.png');
		KT.game.load.image('ballEffect2', 'assets/ballEffect2.png');
		KT.game.load.image('bg_under', 'assets/bg_under.png');
		KT.game.load.image('eff_mid', 'assets/eff1.png');
		KT.game.load.image('eff_lt', 'assets/eff-left.png');
		KT.game.load.image('eff_rt', 'assets/eff-right.png');
		KT.game.load.image('eff_midOrange', 'assets/eff1Orange.png');
		KT.game.load.image('eff_ltOrange', 'assets/eff-leftOrange.png');
		KT.game.load.image('eff_rtOrange', 'assets/eff-rightOrange.png');
		KT.game.load.image('eff_midViolet', 'assets/eff1Violet.png');
		KT.game.load.image('eff_ltViolet', 'assets/eff-leftViolet.png');
		KT.game.load.image('eff_rtViolet', 'assets/eff-rightViolet.png');
		KT.game.load.image('eff_midX2', 'assets/eff-midX2.png');
		KT.game.load.image('eff_ltX2', 'assets/eff-leftX2.png');
		KT.game.load.image('eff_rtX2', 'assets/eff-rightX2.png');
		KT.game.load.image('hand', 'assets/hand.png');
		KT.game.load.image('holdhand', 'assets/holdtohand.png');
		KT.game.load.image('3', 'assets/3.png');
		KT.game.load.image('2', 'assets/2.png');
		KT.game.load.image('1', 'assets/1.png');
		KT.game.load.image('eff_per', 'assets/eff_per.png');
		KT.game.load.image('greenX3', 'assets/pianoNoteX3.png');
		KT.game.load.image('orangeX3', 'assets/pianoNoteOrangeX3.png');
		KT.game.load.image('violetX3', 'assets/pianoNoteVioletX3.png');
		KT.game.load.image('greenMini', 'assets/squareMiniLastGreen.png');
		KT.game.load.image('orangeMini', 'assets/squareMiniLastOrange.png');
		KT.game.load.image('violetMini', 'assets/squareMiniLastViolet.png');
		KT.game.load.image('greenX2', 'assets/pianoNoteX2.png');
		KT.game.load.image('orangeX2', 'assets/pianoNoteOrangeX2.png');
		KT.game.load.image('violetX2', 'assets/pianoNoteVioletX2.png');
		KT.game.load.image('noteX2', 'assets/noteX2.png');
		KT.game.load.image('gift', 'assets/giftSquare.png');
		KT.game.load.image('heart', 'assets/heart.png');
		KT.game.load.image('diamond', 'assets/diamond.png');
		KT.game.load.image('perfect', 'assets/perfect.png');
		KT.game.load.image('scorebox', 'assets/score.png');
		KT.game.load.image('effbg1', 'assets/effbg1.png');
		KT.game.load.image('effbg2', 'assets/effbg2.png');
		KT.game.load.image('effbg4', 'assets/effbg4.png');
		KT.game.load.image('effbg3', 'assets/effbg3.png');
		KT.game.load.image('effbg5', 'assets/effbg5.png');
		KT.game.load.image('bg-menu', 'assets/bg-menu.png');
		KT.game.load.image('gem', 'assets/gem.png');
		KT.game.load.image('lock', 'assets/lock.png');
		KT.game.load.image('music', 'assets/music.png');
		KT.game.load.image('music-gem', 'assets/music-gem.png');
		KT.game.load.image('playTu', 'assets/play.png');
		KT.game.load.image('play-music', 'assets/play-music.png');
		KT.game.load.image('rank', 'assets/rank.png');
		KT.game.load.image('setting', 'assets/setting.png');
		KT.game.load.image('shop', 'assets/shop.png');
		KT.game.load.image('start', 'assets/start.png');
		KT.game.load.image('start2', 'assets/start_2.png');
		KT.game.load.image('tab', 'assets/tab.png');
		KT.game.load.image('unlock', 'assets/unlock.png');
		KT.game.load.image('bg-color', 'assets/bg-color.png');
		KT.game.load.image('endless-mode', 'assets/endlessMode.png');
		//check and uncheck
		KT.game.load.image('btn_check', 'assets/check.png');
		KT.game.load.image('btn_uncheck', 'assets/uncheck.png');

	},
	create: function () {
		// checkLoginState();
		//data guitar faded
		KT.guitarNotes = [2.071, 2.829, 3.578, 4.325, 5.063, 5.779, 6.49, 7.233, 7.963, 8.688, 9.426, 10.159, 10.925, 11.652, 12.008, 12.413, 13.157, 13.903, 14.656, 15.022, 15.377, 15.776, 16.132, 16.892, 17.613, 17.958, 18.36, 18.751, 21.651, 22.032, 22.756, 23.891, 24.268, 24.65, 24.994, 26.499, 26.861, 27.198, 27.583, 27.951, 28.366, 28.71, 29.476, 29.834, 30.194, 30.502, 30.933, 31.689, 32.063, 32.445, 32.829, 33.517, 33.881, 34.271, 34.612, 36.423, 36.801, 37.169, 37.535, 42.307, 42.659, 43.02, 43.411, 48.174, 48.546, 48.901, 49.259, 51.038, 51.301, 51.52, 51.931, 52.245, 52.945, 54.051, 54.413, 54.768, 55.139, 56.949, 57.298, 57.649, 58.007, 58.732, 59.106, 60.227, 60.587, 60.969];
		//data piano
		KT.pianoNotes = [3.286, 4.723, 5.078, 5.44, 5.794, 6.148, 7.222, 7.589, 8.651, 9.004, 10.081, 10.432, 10.793, 11.136, 11.52, 11.903, 13.687, 14.037, 14.414, 14.737, 16.148, 16.5, 16.863, 17.24, 17.59, 18.64, 19.003, 20.075, 20.452, 21.515, 21.851, 22.228, 22.578, 22.928, 23.305, 25.445, 26.155, 26.863, 27.579, 28.29, 28.647, 29.005, 30.083, 30.445, 31.161, 31.507, 31.869, 32.94, 33.294, 34.018, 34.364, 34.719, 35.789, 36.159, 36.505, 36.876, 37.238, 37.576, 38.301, 39.014, 39.718, 40.081, 40.437, 41.507, 41.867, 42.577, 42.937, 43.296, 44.364, 44.72, 45.433, 45.79, 46.146, 47.223, 47.583, 48.298, 48.644, 49.004, 50.074, 50.43, 51.51, 51.86, 53.296, 53.653, 54.006, 54.369, 54.719, 55.792, 56.146, 57.219, 57.585, 58.656, 59.009, 59.366, 59.719, 60.075, 60.439];
		KT.pianoNotesFrame = [];
		for (i in KT.pianoNotes) {
			KT.pianoNotesFrame.push(KT.pianoNotes[i]);
		}
		//EDM music data
		KT.EDMNotesGreen = [2.656, 4.297, 6.001, 7.719, 9.427, 11.142, 12.857, 14.571, 16.286, 18.001, 19.712, 21.427, 23.142, 24.854, 26.57, 28.284, 31.737, 36.002, 38.794, 40.288, 42.871, 42.994, 43.088, 43.166, 49.941, 56.578, 56.71, 56.839];
		KT.EDMNotesOrange = [3.425, 5.155, 6.872, 8.58, 10.295, 12.001, 13.714, 15.43, 27.426, 33.120, 35.17, 35.182, 35.196, 35.213, 35.246, 35.267, 35.288, 35.311, 35.331, 35.357, 35.807, 35.823, 35.838, 35.855, 35.896, 38.632, 38.641, 38.664, 38.705, 38.732, 38.75, 42.002, 42.105, 42.249, 42.427, 42.642, 45.496, 45.542, 45.605, 45.999, 47.774, 49.502, 49.612, 49.715, 55.721, 55.988, 56.153, 56.381];
		KT.EDMNotesViolet = [17.145, 17.572, 18.862, 19.286, 19.497, 21.004, 21.86, 22.286, 22.717, 22.932, 23.576, 23.999, 25.289, 25.715, 26.147, 26.356, 27.86, 29.142, 29.573, 30.001, 30.229, 30.231, 30.443, 30.661, 30.88, 31.078, 31.292, 32.152, 32.289, 32.567, 32.79, 33.002, 33.661, 33.869, 34.304, 34.508, 34.715, 35.572, 36.428, 36.663, 37.729, 37.937, 38.143, 39, 39.09, 39.214, 39.429, 39.86, 41.144, 41.368, 41.575, 43.288, 43.711, 44.148, 44.372, 44.584, 44.795, 44.999, 45.427, 46.120, 46.283, 46.712, 46.931, 47.144, 47.369, 47.573, 47.999, 48.221, 48.427, 48.652, 48.86, 49.079, 49.289, 50.147, 50.373, 50.577, 50.812, 51.003, 51.231, 51.436, 51.642, 52.291, 52.509, 52.715, 52.937, 53.148, 53.574, 53.79, 54.006, 54.223, 54.434, 54.852, 55.079, 55.289, 56.998];
		// KT.EDMNotesBig = [0.7]
		//Violin music data
		KT.violinNotesGreen = [2.23, 2.356, 2.479, 2.609, 10.227, 10.354, 10.478, 10.602, 19.736, 19.981, 20.233, 20.481, 21.486, 21.973, 22.238, 22.477, 23.227, 23.731, 24.226, 24.731, 25.222, 25.731, 26.233, 26.357, 26.477, 26.613, 27.733, 27.981, 28.25, 28.485, 29.486, 29.982, 30.23, 30.478, 31.227, 31.74, 32.223, 32.734, 33.227, 33.733, 34.225, 34.353, 34.479, 34.609, 34.989, 35.236, 35.482, 35.729, 35.978, 36.232, 36.484, 36.98, 37.227, 37.476, 37.729, 37.983, 38.225, 38.477, 38.982, 39.233, 39.477, 39.729, 39.975, 40.225, 40.476, 40.979, 41.232, 41.474, 41.727, 41.976, 42.225, 42.477, 42.987, 43.233, 43.48, 43.73, 43.977, 44.226, 44.479, 44.972, 45.225, 45.478, 45.729, 45.979, 46.229, 46.477, 46.984, 47.236, 47.476, 47.731, 47.978, 48.223, 48.477, 48.983, 49.129, 49.23, 49.478, 49.732, 49.874, 50.005, 50.242, 50.475];
		KT.violinNotesOrange = [6.722, 8.723, 14.731, 16.732, 18.728];
		KT.violinNotesViolet = [50.722, 51.224, 51.375, 51.479, 51.598, 51.726, 51.847, 51.972, 52.091, 52.225, 52.367, 52.472, 52.727, 52.981, 53.228, 53.484, 53.6, 53.761, 53.854, 53.976, 54.13, 54.228, 54.393, 54.473, 54.727, 55.228, 55.601, 55.731, 55.85, 55.979, 56.106, 56.225, 56.37, 56.486, 56.73, 57.228, 57.376, 57.491, 57.601, 57.728, 57.851, 57.973, 58.114, 58.221, 58.384, 58.477, 58.731, 58.91, 59.113, 59.224, 59.48, 59.603, 59.727, 59.856, 59.978, 60.1, 60.221, 60.479, 60.615, 61.725, 61.746, 61.857, 62.098, 62.229, 62.377, 62.726];
		KT.violinNotesBig = [2.739, 10.731, 22.721, 26.742, 30.722, 34.737, 38.728, 40.728, 42.731, 46.725, 48.727];
		//Aman data
		KT.amanGreen = [];
		KT.amanOrange = [];
		KT.amanViolet = [];
		//bigroom data
		KT.bigGreen = [];
		KT.bigOrange = [];
		KT.bigViolet = [];
		//always
		KT.alwaysGreen = [];
		KT.alwaysOrange = [];
		KT.alwaysViolet = [];
		//anewdawn
		KT.anewdawnGreen = [];
		KT.anewdawnOrange = [];
		KT.anewdawnViolet = [];
		//asimple
		KT.asimpleGreen = [];
		KT.asimpleOrange = [];
		KT.asimpleViolet = [];
		//beautifullight
		KT.beautifullightGreen = [];
		KT.beautifullightOrange = [];
		KT.beautifullightViolet = [];
		//BeethovenFurElise
		KT.BeethovenFurEliseGreen = [];
		KT.BeethovenFurEliseOrange = [];
		KT.BeethovenFurEliseViolet = [];
		//BelieveInYourself
		KT.BelieveInYourselfGreen = [];
		KT.BelieveInYourselfOrange = [];
		KT.BelieveInYourselfViolet = [];
		//Brightandhappy
		KT.BrightandhappyGreen = [];
		KT.BrightandhappyOrange = [];
		KT.BrightandhappyViolet = [];
		//EDMparty
		KT.EDMpartyGreen = [];
		KT.EDMpartyOrange = [];
		KT.EDMpartyViolet = [];
		//EmotinalEDM
		KT.EmotinalEDMGreen = [];
		KT.EmotinalEDMOrange = [];
		KT.EmotinalEDMViolet = [];
		//EmotionalOrchestra_BestAudio
		KT.EmotionalOrchestra_BestAudioGreen = [];
		KT.EmotionalOrchestra_BestAudioOrange = [];
		KT.EmotionalOrchestra_BestAudioViolet = [];
		//EnergyActionOpliftingPop
		KT.EnergyActionOpliftingPopGreen = [];
		KT.EnergyActionOpliftingPopOrange = [];
		KT.EnergyActionOpliftingPopViolet = [];
		// HighDrama_InProductionMusic
		KT.HighDrama_InProductionMusicGreen = [];
		KT.HighDrama_InProductionMusicOrange = [];
		KT.HighDrama_InProductionMusicViolet = [];
		// HyperEpic
		KT.HyperEpicGreen = [];
		KT.HyperEpicOrange = [];
		KT.HyperEpicViolet = [];
		// MotivationalCorporatePiano_GorkemMusic
		KT.MotivationalCorporatePiano_GorkemMusicGreen = [];
		KT.MotivationalCorporatePiano_GorkemMusicOrange = [];
		KT.MotivationalCorporatePiano_GorkemMusicViolet = [];
		// NewYearMood_IvanLuzan
		KT.NewYearMood_IvanLuzanGreen = [];
		KT.NewYearMood_IvanLuzanOrange = [];
		KT.NewYearMood_IvanLuzanViolet = [];
		// Rush_Columnals
		KT.Rush_ColumnalsGreen = [];
		KT.Rush_ColumnalsOrange = [];
		KT.Rush_ColumnalsViolet = [];
		// SpringSonata2
		KT.SpringSonata2Green = [];
		KT.SpringSonata2Orange = [];
		KT.SpringSonata2Violet = [];
		// TheDaysGoBy_DanPhillipson
		KT.TheDaysGoBy_DanPhillipsonGreen = [];
		KT.TheDaysGoBy_DanPhillipsonOrange = [];
		KT.TheDaysGoBy_DanPhillipsonViolet = [];
		// TouchingAndIntimate_DPmusicStudio
		KT.TouchingAndIntimate_DPmusicStudioGreen = [];
		KT.TouchingAndIntimate_DPmusicStudioOrange = [];
		KT.TouchingAndIntimate_DPmusicStudioViolet = [];
		// UpliftingInspiringMoment_ElektorProject
		KT.UpliftingInspiringMoment_ElektorProjectGreen = [];
		KT.UpliftingInspiringMoment_ElektorProjectOrange = [];
		KT.UpliftingInspiringMoment_ElektorProjectViolet = [];
		//start menu state
		// ajax
		$.ajax({
			url: "./assets/Music/SwissChristmas_GOBrien.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear.toFixed(3)) + 2;
						KT.amanGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear.toFixed(3)) + 2;
						KT.amanOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear.toFixed(3)) + 2;
						KT.amanViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/Club_Oddvision.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear);
						KT.bigGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear);
						KT.bigOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear);
						KT.bigViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/AlwaysConnected_PeterMcIsaacMusic.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.alwaysGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.alwaysOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.alwaysViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/ANewDawn_OliveMusique.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.anewdawnGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.anewdawnOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.anewdawnViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/ASimpleWish_OliveMusique.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.asimpleGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.asimpleOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.asimpleViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/BeautifulPiano_LightOfMusic.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.beautifullightGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.beautifullightOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.beautifullightViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/BeethovenFurElise_IsakuKageyama.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BeethovenFurEliseGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BeethovenFurEliseOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BeethovenFurEliseViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/BelieveInYourself_OliveMusique.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BelieveInYourselfGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BelieveInYourselfOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.BelieveInYourselfViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/EDMparty.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EDMpartyGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EDMpartyOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EDMpartyViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/EmotinalEDM.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotinalEDMGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotinalEDMOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotinalEDMViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/EmotionalOrchestra_BestAudio.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotionalOrchestra_BestAudioGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotionalOrchestra_BestAudioOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EmotionalOrchestra_BestAudioViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/EnergyActionOpliftingPop.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EnergyActionOpliftingPopGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EnergyActionOpliftingPopOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.EnergyActionOpliftingPopViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/HighDrama_InProductionMusic.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HighDrama_InProductionMusicGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HighDrama_InProductionMusicOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HighDrama_InProductionMusicViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/HyperEpic.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HyperEpicGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HyperEpicOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.HyperEpicViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/MotivationalCorporatePiano_GorkemMusic.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.MotivationalCorporatePiano_GorkemMusicGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.MotivationalCorporatePiano_GorkemMusicOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.MotivationalCorporatePiano_GorkemMusicViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/NewYearMood_IvanLuzan.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.NewYearMood_IvanLuzanGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.NewYearMood_IvanLuzanOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.NewYearMood_IvanLuzanViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/Rush_Columnals.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.Rush_ColumnalsGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.Rush_ColumnalsOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.Rush_ColumnalsViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/SpringSonata2.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.SpringSonata2Green.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.SpringSonata2Orange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.SpringSonata2Violet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/TheDaysGoBy_DanPhillipson.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TheDaysGoBy_DanPhillipsonGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TheDaysGoBy_DanPhillipsonOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TheDaysGoBy_DanPhillipsonViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/TouchingAndIntimate_DPmusicStudio.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TouchingAndIntimate_DPmusicStudioGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TouchingAndIntimate_DPmusicStudioOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.TouchingAndIntimate_DPmusicStudioViolet.push(val);
					}
				}
			}
		});
		$.ajax({
			url: "./assets/Music/UpliftingInspiringMoment_ElektorProject.json",
			data: [],
			type: "GET",
			contentType: "application/json",
			success: function (data) {
				// console.log(data);
				for (i in data) {
					// console.log(data[i].nodeID);
					if (data[i].nodeID == 96) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.UpliftingInspiringMoment_ElektorProjectGreen.push(val);
					}
					if (data[i].nodeID == 97) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.UpliftingInspiringMoment_ElektorProjectOrange.push(val);
					}
					if (data[i].nodeID == 98) {
						var val = parseFloat(data[i].timeAppear) + 2;
						KT.UpliftingInspiringMoment_ElektorProjectViolet.push(val);
					}
				}
				// Start the load state
				KT.game.state.start('menu');
			}
		});


	}
}