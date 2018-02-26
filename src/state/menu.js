var menuState = {
	preload: function () {
	},
	create: function () {
		KT.timeoutGenHeart = KT.game.time.create();
		console.log(KT.accessToken);
		// Add a background image
		console.log(KT.nameFB);
		console.log(KT.checkId);
		console.log(KT.oidUserData);
		// console.log(KT.listSongSyns);
		KT.bg = KT.game.add.sprite(0, 0, 'bg-menu');
		KT.bg.height = KT.game.height;
		KT.bg.width = KT.game.width;
		KT.bg.smoothed = false;
		KT.idCreated = 0;
		KT.previousName = 0;
		KT.styleMenu = {
			font: "20px pixelFont",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		};
		//btn dropdown;
		KT.menuGroup = KT.game.add.group();
		

		KT.ready = false;
		// Display the name of the game
		//stylePhaser
		// // Explain how to start the game
		//other style drop
		KT.txt_load = KT.game.add.text(KT.game.width / 20, KT.game.height / 100, 'Wait', {
			font: "20px Roboto",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		});
		// Create a new Phaser keyboard variable: the up arrow key
		KT.timeDuration = 5880;
		KT.rhynthm = 0;
		KT.speedDot = 0;
		//heart group
		KT.heartGroup = KT.game.add.group();
		var heartSprite = KT.game.add.sprite(KT.game.width / 2.3, KT.game.height / 32, 'heart');
		heartSprite.anchor.set(0.5);
		heartSprite.scale.set(KT.game.width / 1080);
		KT.heart_count = KT.game.add.text(KT.game.width / 2.2, KT.game.height / 28, `${KT.heart}/15`, {
			font: "20px Roboto",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		});
		KT.heart_count.anchor.set(0.5);
		KT.heartGroup.add(heartSprite);
		KT.heartGroup.add(KT.heart_count);
		//diamond group
		KT.diamonGroup = KT.game.add.group();
		var diamondSprite = KT.game.add.sprite(KT.game.width * 5 / 6, KT.game.height / 32, 'gem');
		diamondSprite.anchor.set(0.5);
		diamondSprite.scale.set(KT.game.width / 1080);
		KT.diamond_count = KT.game.add.text(KT.game.width * 5 / 6, KT.game.height / 28, `${KT.diamond}`, {
			font: "20px Roboto",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		});
		KT.diamond_count.anchor.set(0.5);
		//option under background menu
		var music_tab = KT.game.add.button(KT.game.width / 8, KT.game.height * 14 / 15, 'music');
		music_tab.anchor.set(0.5);
		music_tab.scale.set(KT.game.width / 1080);
		var shop_tab = KT.game.add.button(KT.game.width / 8 * 3.2, KT.game.height * 14 / 15, 'shop');
		shop_tab.anchor.set(0.5);
		shop_tab.scale.set(KT.game.width / 1080);
		var rank_tab = KT.game.add.button(KT.game.width / 8 * 5.2, KT.game.height * 14 / 15, 'rank');
		rank_tab.anchor.set(0.5);
		rank_tab.scale.set(KT.game.width / 1080);
		var setting_tab = KT.game.add.button(KT.game.width / 8 * 7, KT.game.height * 14 / 15, 'setting');
		setting_tab.anchor.set(0.5);
		setting_tab.scale.set(KT.game.width / 1080);
		KT.scrollMask = KT.game.add.graphics(0, 0);
		KT.scrollMask.beginFill();
		KT.scrollMask.drawRect(0, KT.game.height * 0.27, KT.game.width, KT.game.height * 0.59);
		KT.scrollMask.endFill();
		KT.grap = KT.game.add.graphics(0, KT.game.height / 4);
		KT.grap.drawRect(0, 0, KT.game.width, KT.game.height);
		KT.grap.inputEnabled = true;
		KT.grap.input.enableDrag();
		// KT.grap.input.boundsRect = new Phaser.Rectangle(0, -800,KT.game.width, KT.game.height * 0.094 + 15 * KT.game.height * 0.147);
		KT.grap.input.allowHorizontalDrag = false;
		for (i = 0; i < 15; i++) {
			this.createTabSong(i, KT.listSongSyns[i]);
		}
		// KT.bg.mask = KT.scrollMask;
		KT.grap.mask = KT.scrollMask;
		KT.bg_color = KT.game.add.sprite(0, 0, 'bg-color');
		KT.bg_color.height = KT.game.height;
		KT.bg_color.width = KT.game.width;
		KT.bg_color.kill();
		KT.txt_loading = KT.game.add.text(KT.game.world.centerX, KT.game.world.centerY, 'Loading...', {
			font: "60px Roboto",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		});
		KT.txt_loading.anchor.set(0.5);
		KT.bg_color.addChild(KT.txt_loading);
		KT.game.load.onLoadStart.add(this.loadStart);
		KT.game.load.onFileComplete.add(this.fileComplete);
		KT.game.load.onLoadComplete.add(this.loadComplete);
		// var endlessMode = KT.game.add.sprite(KT.game.world.centerX, KT.game.height/10,'endless-mode');
		// endlessMode.anchor.set(0.5);
		// endlessMode.scale.set(KT.game.width / 1080);
		// When the 'upKey' is pressed, it will call the 'start' function once
	},
	update: function () {
		if (KT.ready) {
			// KT.game.state.start('test');
		}
	},
	render: function () {
		if (KT.heart < 15) {
			KT.game.debug.text(`${Math.floor(KT.timeHeart / 60)}:${Math.floor(KT.timeHeart) % 60}`, KT.game.width / 2.4, KT.game.height / 15);
		};
		KT.heart_count.setText(`${KT.heart}/15`);
	},
	start: function () {
		// Start the actual game
		KT.game.state.start('play');
	},
	toggleMenu: function () {
		if (KT.menuGroup.y == 0) {
			var menuTween = KT.game.add.tween(KT.menuGroup).to({
				y: -KT.game.height + 50
			}, 500, Phaser.Easing.Bounce.Out, true);

		}
		if (KT.menuGroup.y == -KT.game.height + 50) {
			var menuTween = KT.game.add.tween(KT.menuGroup).to({
				y: 0
			}, 500, Phaser.Easing.Bounce.Out, true);
		}
	},
	loadSong: function (name, link) {
		KT.game.load.audio(name, link);
		KT.game.load.start();
		KT.bg_color.revive();
	},
	loadStart: function () {
		KT.txt_load.setText('Loading..');
	},
	fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
		KT.txt_load.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
		// console.log(cacheKey);
		KT.songLoadByMenu = cacheKey;
	},
	loadComplete: function () {
		KT.txt_load.setText("Load Complete");
		KT.game.state.start('test');
	},
	repTimeoutGenHeart: function () {
		console.log('update heart');
	},
	formatTime: function (s) {
		var minutes = "0" + Math.floor(s / 60);
		var seconds = "0" + (s - minutes * 60);
		return minutes.substr(-2) + ":" + seconds.substr(-2);
	},
	createTime: function () {
		var minutes;
		if ((KT.timeHeart % 60) / 60 >= 0.5) {
			minutes = Math.round(KT.timeHeart / 60) - 1;
		}
		else {
			minutes = Math.round(KT.timeHeart / 60);
		}
		var seconds = (KT.timeHeart % 60);
		KT.timeoutGenHeart = KT.game.time.events.repeat(Phaser.Timer.MINUTE * minutes + Phaser.Timer.SECOND * seconds, 20, this.repTimeoutGenHeart);
		// KT.timeoutGenHeart.start();
	},
	createTabSong: function (i, songData) {
		// console.log(i);
		var tabSong = KT.game.add.sprite(KT.game.width / 2, KT.game.height * 0.094 + i * KT.game.height * 0.147, 'tab');
		tabSong.anchor.set(0.5);
		tabSong.scale.set(KT.game.width / 1080);
		//title in tab
		var nameSong = KT.game.add.text(-220, -80, `${songData.name}`, {
			font: "40px Roboto",
			fill: "white",
			boundsAlignH: "center",
			boundsAlignV: "middle"
		});
		tabSong.addChild(nameSong);
		//unlocked
		if (songData.status == "unlocked") {
			var btn_play = KT.game.add.button(350, 30, 'playTu');
			btn_play.anchor.set(0.5);
			tabSong.addChild(btn_play);
			var songInHighscore = KT.highscore.find(function (obj) {
				return obj.song == songData.value;
			});
			var play_music = KT.game.add.sprite(-370, 0, 'play-music');
			play_music.anchor.set(0.5);
			tabSong.addChild(play_music);
			// console.log(songInHighscore.perfectPercent);
			if (songInHighscore.perfectPercent >= 60 && songInHighscore.perfectPercent < 71) {
				var starList = [1, 0, 0];
			} else if (songInHighscore.perfectPercent >= 71 && songInHighscore.perfectPercent < 81) {
				var starList = [1, 1, 0];
			} else if (songInHighscore.perfectPercent >= 81) {
				var starList = [1, 1, 1];
			} else {
				var starList = [0, 0, 0];
			}
			// console.log(starList);
			//draw star
			for (i = 0; i < starList.length; i++) {
				if (starList[i] == 0) {
					var star = KT.game.add.sprite(-130 + i * 85, 30, 'start');
					star.anchor.set(0.5);
					tabSong.addChild(star);
				} else if (starList[i] == 1) {
					var star = KT.game.add.sprite(-130 + i * 85, 30, 'start2');
					star.anchor.set(0.5);
					tabSong.addChild(star);
				}
			}
			btn_play.events.onInputDown.add(() => {
				// console.log(i);
				if(KT.heart >0){
					if (songData.value == "faded") {
						this.chooseSong(KT.guitarNotes, [],[],[], 3900, 'faded', songData);
					}
					else if (songData.value == "ANewDawn") {
						this.chooseSong(KT.anewdawnGreen,KT.anewdawnOrange, KT.anewdawnViolet,[], 8340,'ANewDawn', songData);
					}
					else if (songData.value == "BelieveInYourself") {
						this.chooseSong(KT.BelieveInYourselfGreen,KT.BelieveInYourselfOrange, KT.BelieveInYourselfViolet,[], 7740,'BelieveInYourself', songData);
					}
					else if (songData.value == "EmotionalOrchestra_BestAudio") {
						this.chooseSong(KT.EmotionalOrchestra_BestAudioGreen,KT.EmotionalOrchestra_BestAudioOrange, KT.EmotionalOrchestra_BestAudioViolet,[], 8400,'EmotionalOrchestra_BestAudio', songData);
					}
					else if (songData.value == "ASimple") {
						this.chooseSong(KT.asimpleGreen,KT.asimpleOrange, KT.asimpleViolet,[], 8100,'ASimple', songData);
					}
					else if (songData.value == "BeethovenFurElise") {
						this.chooseSong(KT.BeethovenFurEliseGreen,KT.BeethovenFurEliseOrange, KT.BeethovenFurEliseViolet,[], 8700,'BeethovenFurElise', songData);
					}
					else if (songData.value == "Beautiful_light") {
						this.chooseSong(KT.beautifullightGreen,KT.beautifullightOrange, KT.beautifullightViolet,[], 7800,'Beautiful_light', songData);
					}
					else if (songData.value == "MotivationalCorporatePiano_GorkemMusic") {
						this.chooseSong(KT.MotivationalCorporatePiano_GorkemMusicGreen,KT.MotivationalCorporatePiano_GorkemMusicOrange, KT.MotivationalCorporatePiano_GorkemMusicViolet,[], 7860,'MotivationalCorporatePiano_GorkemMusic', songData);
					}
					else if (songData.value == "EnergyActionOpliftingPop") {
						this.chooseSong(KT.EnergyActionOpliftingPopGreen,KT.EmotionalOrchestra_BestAudioOrange, KT.EmotionalOrchestra_BestAudioViolet,[], 8340,'EnergyActionOpliftingPop', songData);
					}
					else if (songData.value == "NewYearMood_IvanLuzan") {
						this.chooseSong(KT.NewYearMood_IvanLuzanGreen,KT.NewYearMood_IvanLuzanOrange, KT.NewYearMood_IvanLuzanViolet,[], 8400,'NewYearMood_IvanLuzan', songData);
					}
					else if (songData.value == "TouchingAndIntimate_DPmusicStudio") {
						this.chooseSong(KT.TouchingAndIntimate_DPmusicStudioGreen,KT.TouchingAndIntimate_DPmusicStudioOrange, KT.TouchingAndIntimate_DPmusicStudioViolet,[], 7800,'TouchingAndIntimate_DPmusicStudio', songData);
					}
					else if (songData.value == "UpliftingInspiringMoment_ElektorProject") {
						this.chooseSong(KT.UpliftingInspiringMoment_ElektorProjectGreen,KT.UpliftingInspiringMoment_ElektorProjectOrange, KT.UpliftingInspiringMoment_ElektorProjectViolet,[], 4860,'UpliftingInspiringMoment_ElektorProject', songData);
					}
					else if (songData.value == "aman") {
						this.chooseSong(KT.amanGreen,KT.amanOrange, KT.amanViolet,[], 4200,'aman', songData);
					}
					else if (songData.value == "TheDaysGoBy_DanPhillipson") {
						this.chooseSong(KT.TheDaysGoBy_DanPhillipsonGreen,KT.TheDaysGoBy_DanPhillipsonOrange, KT.TheDaysGoBy_DanPhillipsonViolet,[], 10320,'TheDaysGoBy_DanPhillipson', songData);
					}
					else if (songData.value == "Rush_Columnals") {
						this.chooseSong(KT.Rush_ColumnalsGreen,KT.Rush_ColumnalsOrange, KT.Rush_ColumnalsViolet,[], 5040,'Rush_Columnals', songData);
					}
					btn_play.inputEnabled = false;
					// console.log('input');
					KT.heart -= 1;
					updateHeart();
				}
				else{
					alert('Not enough heart');
				}
			});
			KT.grap.addChild(tabSong);
		}
		//locked
		else if (songData.status == "locked") {
			var btn_play = KT.game.add.button(350, 30, 'unlock');
			btn_play.anchor.set(0.5);
			tabSong.addChild(btn_play);
			var play_music = KT.game.add.sprite(-370, 0, 'music-gem');
			play_music.anchor.set(0.5);
			tabSong.addChild(play_music);
			// var price = KT.game.add.text()
			var lockSprite = KT.game.add.sprite(-50, 30, 'lock');
			lockSprite.anchor.set(0.5);
			tabSong.addChild(lockSprite);
			var price = KT.game.add.text(300, 20, `${songData.price}`, {
				font: "40px Roboto",
				fill: "white",
				boundsAlignH: "center",
				boundsAlignV: "middle"
			});
			tabSong.addChild(price);
			btn_play.events.onInputDown.add(() => {
				// console.log(i);
				handleUnlockSong(songData.price, KT.diamond, songData.name, songData.value);
				btn_play.inputEnabled = false;
			});
			KT.grap.addChild(tabSong);
		}
	},
	chooseSong: function (greenNotes, orangeNotes, violetNotes,x2Notes, timeDuration, nameOfSong, songData) {
		KT.greenNotes = greenNotes;
		KT.orangeNotes = orangeNotes;
		KT.violetNotes = violetNotes;
		KT.x2Notes = x2Notes;
		KT.timeDuration = timeDuration;
		// KT.song = KT.game.add.audio('aman');
		// console.log('faded')
		KT.nameOfSong = nameOfSong;
		// console.log(KT.greenNotes);
		var objSong = KT.highscore.find(function (objSong) {
			return objSong.song == songData.value;
		});
		// console.log(objSong);
		KT.perPrevious = objSong.perfectPercent;
		// console.log()
		KT.NOTEAll = KT.greenNotes.concat(KT.orangeNotes, KT.violetNotes);
		KT.NOTEAll.sort(function (a, b) { return a - b });
        KT.NOTEAllDefault = [];
        KT.orangeNotesDefault = [];
        KT.violetNotesDefault = [];
        KT.greenNotesDefault = [];
        this.createNoteDefault(KT.NOTEAllDefault, KT.NOTEAll);
        this.createNoteDefault(KT.orangeNotesDefault, KT.orangeNotes);
        this.createNoteDefault(KT.violetNotesDefault, KT.violetNotes);
        this.createNoteDefault(KT.greenNotesDefault, KT.greenNotes);
		KT.ready = true;
		this.loadSong(KT.nameOfSong, `assets/Music/${KT.nameOfSong}.mp3`);
	},
    createNoteDefault: function (arrDefault, arrToDefault) {
        for (i = 0; i < arrToDefault.length; i++) {
            arrDefault[i] = arrToDefault[i];
        }
    }
};
