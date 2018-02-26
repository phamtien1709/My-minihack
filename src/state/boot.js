var bootState = {
	preload: function () {
		KT.game.scale.pageAlignHorizontally = true;
		KT.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		KT.game.time.advancedTiming = true;
		//audio
		KT.game.load.audio('collideMiniNote', 'assets/Music/collideMiniNote.mp3');
		KT.game.load.image('fb', 'assets/fb-login.png');
		// font
		KT.game.load.bitmapFont('pixelFont', 'assets/desyrel.png', 'assets/desyrel.xml');
		// Load the image
	},
	create: function () {
		KT.game.stage.backgroundColor = "#0099ff";
		KT.btnFB = KT.game.add.button(KT.game.width / 2, KT.game.height / 3, 'fb');
		KT.btnFB.anchor.set(0.5);
		checkLoginState(()=>{
			getUserID(()=>{
                KT.game.state.start('load');
			})
		});
		KT.btnFB.events.onInputDown.add(() => {
			FB.login(function (response) {
				//handle
				// console.log(response.status);
				if (response.status == 'unknown') {
					alert("Đăng nhập lỗi, hãy đăng nhập lại! :'(");
				}
				if (response.status == 'connected') {
					KT.game.state.start('boot');
				}
			}, {
					scope: 'user_friends,email,public_profile, publish_actions'
				});
		})
		txt_loading = KT.game.add.text(KT.game.world.centerX, KT.game.world.centerY, 'Loading...', {
            font: "60px Roboto",
            fill: "white",
            boundsAlignH: "center",
            boundsAlignV: "middle"
		});
		txt_loading.anchor.set(0.5);
		// Set some game settings
		KT.NOTEAll = [];
		KT.greenNotes = [];
		KT.orangeNotes = [];
		KT.violetNotes = [];
		KT.x2Notes = [];
		KT.listSong = [
			{
				name: "PIANO",
				value: "Piano"
			},
			{
				name: "Faded Guitar",
				value: "faded"
			},
			{
				name: "GUITAR",
				value: "aman"
			},
			{
				name: "EDM",
				value: "EDM"
			},
			{
				name: "P&Y",
				value: "Violin"
			},
			{
				name: "BIG ROOM",
				value: "Bigroom"
			},
			{
				name: "A NEW DAWN",
				value: "ANewDawn"
			},
			{
				name: "A SIMPLE",
				value: "ASimple"
			},
			{
				name: "BEAUTIFULIGHT",
				value: "Beautiful_light"
			},
			{
				name: "BeethovenFurElise",
				value: "BeethovenFurElise"
			},
			{
				name: "BelieveInYourself",
				value: "BelieveInYourself"
			},
			{
				name: "EmotionalOrchestra7",
				value: "EmotionalOrchestra_BestAudio"
			},
			{
				name: "EnergyAction",
				value: "EnergyActionOpliftingPop"
			},
			{
				name: "Motivational",
				value: "MotivationalCorporatePiano_GorkemMusic"
			},
			{
				name: "NewYearMood",
				value: "NewYearMood_IvanLuzan"
			},
			{
				name: "Rush_Columnals",
				value: "Rush_Columnals"
			},
			{
				name: "TheDaysGoBy",
				value: "TheDaysGoBy_DanPhillipson"
			},
			{
				name: "TouchingAndIntimate",
				value: "TouchingAndIntimate_DPmusicStudio"
			},
			{
				name: "Uplifting",
				value: "UpliftingInspiringMoment_ElektorProject"
			}
		];

		// KT.game.state.start('load');
	},
	update: function(){
		if(KT.checkCallbackLogin){
			KT.btnFB.destroy();
		}
	}
};