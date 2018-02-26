// import { setInterval } from "timers";

var testState = {
    preload: function () {
        // KT.game.load.audio('music', 'assets/Music/DemoHalleujah.mp3');
    },
    create: function () {
        // console.log(KT.configs.RATE_SPEED)
        // console.log(KT.idCreated);
        KT.song = KT.game.add.audio(KT.songLoadByMenu);
        KT.checkData = false;
        KT.timeoutPlay = KT.game.time.create();
        KT.game.physics.startSystem(Phaser.Physics.ARCADE);
        KT.game.physics.setBoundsToWorld();
        KT.bg = KT.game.add.sprite(0, 0, 'bg');
        KT.bg.height = KT.game.height;
        KT.bg.width = KT.game.width;
        KT.bg.smoothed = false;
        KT.barGroup = KT.game.add.physicsGroup();
        KT.checkInputTest = false;
        KT.dead = false;
        //number value
        KT.normalModeDone = false;
        KT.timeAddAfterNormalMode = 0;
        //
        KT.veloYMini = 700;
        KT.score = 0;
        KT.perPoint = 0;
        KT.posGenPrevious = KT.game.width / 2;
        KT.inWorld = false;
        KT.pianoGroup = KT.game.add.physicsGroup();
        KT.pianoList = [];
        KT.miniNoteGroup = KT.game.add.physicsGroup();
        KT.miniNoteList = [];
        KT.noteBigGroup = KT.game.add.physicsGroup();
        KT.groupOverlap = KT.game.add.group();
        KT.getPianoFirst = 0;
        KT.effectGroup = KT.game.add.physicsGroup();
        KT.effectList = [];
        KT.effectList2 = [];
        KT.effectList3 = [];
        KT.effectOnTime = 0;
        KT.giftNoteGroup = KT.game.add.physicsGroup();
        KT.giftNoteList = [];
        KT.audioCollideMiniNote = KT.game.add.audio('collideMiniNote');
        KT.rndGiftTime = Math.random() * KT.timeDuration / 60 * 1000;
        // console.log(KT.rndGiftTime);
        KT.giftNoteList.push(new NoteGiftController(Math.random() * (KT.game.width - 100) + 50, -20, 'gift', {
            time: KT.rndGiftTime
        }));
        KT.timeFirst = false;
        KT.checkPlay = false;
        KT.style = {
            font: "20px Roboto",
            fill: "white",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        KT.style2 = {
            font: "32px Roboto",
            fill: "white",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        KT.style3 = {
            font: "15px Roboto",
            fill: "#fffb1c",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        KT.style4 = {
            font: "25px Roboto",
            fill: "#2bffdf",
            boundsAlignH: "center",
            boundsAlignV: "middle"
        };
        //up level
        KT.testFisrtDone = false;
        KT.songLv = 1;
        KT.timePrev = 0;
        KT.song.onStop.add(this.songStopped, this);
        KT.song.onPlay.add(() => {
            this.changeArrayToGenNote();
            KT.timeAddAfterNormalMode = 3;
        }, this);
        //
        KT.replayButton = KT.game.add.button(KT.game.width / 2, KT.game.height / 2 - 130, 'btn_touch');
        KT.replayButton.anchor.set(0.5);
        KT.txtReplay = KT.game.add.text(KT.game.width / 2, KT.game.height / 2 - 70, 'REPLAY', KT.style3);
        KT.txtReplay.anchor.set(0.5);
        KT.replayButton.kill();
        KT.reMenu = false;
        KT.replayButton.events.onInputDown.add(() => {
            KT.reMenu = true;
            handleScore(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                handleDiamond(Math.floor(KT.perPoint / KT.targetPoint * 100), () => {
                    this.createNoteDefault(KT.NOTEAll, KT.NOTEAllDefault);
                    this.createNoteDefault(KT.orangeNotes, KT.orangeNotesDefault);
                    this.createNoteDefault(KT.violetNotes, KT.violetNotesDefault);
                    this.createNoteDefault(KT.greenNotes, KT.greenNotesDefault);
                    KT.game.state.start('test');
                });
            });
        });
        KT.txtReplay.kill();
        KT.endGame = false;
        KT.winText = KT.game.add.text(KT.game.world.centerX, KT.game.world.centerY, "CONGRATULATION! \n Score: " + KT.score, KT.style4);
        KT.winText.anchor.set(0.5);
        KT.winText.kill();
        KT.perPer = KT.game.add.text(KT.game.world.centerX, KT.game.world.centerY + 50, `PERFECT Ratio(%):  `, KT.style3);
        KT.perPer.tint = 0x1affff;
        KT.perPer.anchor.set(0.5);
        KT.perPer.kill();
        KT.scorebox = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 20, 'scorebox');
        KT.scorebox.anchor.set(0.5);
        KT.displayingText = KT.game.add.text(KT.game.width / 2, KT.game.height / 20, KT.score, KT.style3);
        KT.displayingText.anchor.set(0.5);
        KT.txtLet = KT.game.add.text(KT.game.world.centerX, KT.game.world.centerY, "LET'S START", KT.style4);
        KT.txtLet.anchor.set(0.5);
        KT.txtLet.kill();
        KT.effBGGroup = KT.game.add.physicsGroup();
        KT.listEffBG = ['effbg1', 'effbg2', 'effbg3', 'effbg4', 'effbg5']
        KT.targetPoint = KT.NOTEAllDefault.length;
        KT.bar = new BarController(KT.game.world.centerX, KT.game.height - KT.configs.HEIGHT_TOOL);
        var line = KT.game.add.sprite(KT.game.world.centerX, KT.game.height - KT.configs.HEIGHT_TOOL, 'line');
        line.anchor.set(0.5);
        line.alpha = 0;
        KT.btn_play = KT.game.add.button(KT.game.world.centerX, KT.game.world.centerY, 'btn_touch');
        KT.btn_play.anchor.set(0.5);
        KT.btn_play.events.onInputDown.add(() => {
            KT.song.stop();
            var spriteGuide = KT.game.add.sprite(KT.game.world.centerX, KT.game.height - KT.configs.HEIGHT_TOOL - 50, 'holdhand');
            spriteGuide.anchor.set(0.5);
            spriteGuide.alpha = 0.6;
            spriteGuide.scale.set(0.7);
            var tweenGuide = KT.game.add.tween(spriteGuide.scale).to({ x: 1, y: 1 }, 700, "Linear", true, 0, -1);
            var hand = KT.game.add.sprite(KT.game.world.centerX - 150, KT.game.height - KT.configs.HEIGHT_TOOL + 15, 'hand');
            hand.anchor.set(0.5);
            hand.scale.set(0.4);
            hand.alpha = 0.6;
            var tweenHand = KT.game.add.tween(hand).to({ x: '+300' }, 1500, "Linear", true, 0, -1);
            tweenHand.yoyo(true, 1500);
            tweenGuide.yoyo(true, 700);
            KT.testFisrtDone = true;
            this.countDownStart(spriteGuide, hand, tweenGuide, tweenHand);
        });
        //bring to top

        if (KT.reMenu) {
            var graphics = KT.game.add.graphics(0, 0);
            graphics.beginFill(0x0099ff, 1);
            graphics.drawRect(0, 0, KT.game.width, KT.game.height);
        }
        // create new Sprite sound analyse object
        // // show frequency domain chart bars
    },
    update: function () {
        if (KT.timeFirst) {
            KT.checkPlay = true;
        };
        if (KT.checkPlay) {
            KT.frameTest += 1;
        };
        KT.game.physics.arcade.collide(
            KT.barGroup,
            KT.pianoGroup,
            this.onBarHitDot
        );

    },
    render: function () {
        if (KT.checkData) {
            KT.btn_play.revive();
        }
        KT.game.debug.body(KT.barGroup);
        KT.displayingText.setText(KT.score);
        if (KT.endGame) {
            KT.displayingText.setText("GAME OVER");
            KT.winText.revive();
            KT.perPer.revive();
            KT.winText.setText(`TRY MORE! \n Score: ${KT.score}`);
            var perPer = Math.floor(KT.perPoint / KT.targetPoint * 100);
            KT.perPer.setText(`PERFECT Ratio:  ${perPer}%`);
            KT.replayButton.revive();
            KT.txtReplay.revive();
            KT.timeoutPlay.stop();
            KT.dead = true;
            KT.song.stop();
            KT.game.state.start('win');
        }
        KT.game.debug.text(KT.game.time.fps || '--', 10, 35, "#00ff00");
    },
    playTest: function () {
        KT.frameTest = 0;
        KT.timeoutPlay.start();
    },
    timeoutPlay: function () {
        KT.timeoutPlay.stop();
        KT.song.stop();
        KT.winText.revive();
        KT.perPer.revive();
        KT.winText.setText(`CONGRATULATION! \n Score: ${KT.score}`);
        var perPer = Math.floor(KT.perPoint / KT.targetPoint * 100);
        KT.perPer.setText(`PERFECT Ratio:  ${perPer}%`);
        // updateDiamond
    },
    formatTime: function (s) {
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    onBarHitDot: function (barSprite, dotSprite) {
        if (dotSprite.key == 'greenX3') {
            dotSprite.destroy();
            this.generateNoteMini();
        }
        else if (dotSprite.key == 'orangeX3') {
            dotSprite.destroy();
            this.generateNoteMini();
        }
        else if (dotSprite.key == 'violetX3') {
            dotSprite.destroy();
            // this.generateNoteMini();
        }
        else {
            if (Math.abs(dotSprite.position.x - barSprite.position.x) / barSprite.width * 100 < 15) {
                // KT.game.debug.text("Perfect", 200, 200);
                KT.txtLet.destroy();
                // KT.txtGood.destroy();
                var perText = KT.game.add.sprite(KT.game.width / 2, KT.game.height / 11, 'perfect');
                perText.anchor.set(0.5);
                perText.scale.set(0.6);
                // perText.tint = 0x2bffdf;
                var tween = KT.game.add.tween(perText.scale).to({ x: 1, y: 1 }, 200, Phaser.Easing.Linear.None);
                var tweenMove = KT.game.add.tween(perText).to({ y: "+15" }, 100, "Linear");
                tweenMove.start();
                tween.start();
                tween.onComplete.add(() => {
                    var tweenBack = KT.game.add.tween(perText.scale).to({ x: 0.4, y: 0.4 }, 400, Phaser.Easing.Linear.None);
                    var tweenMoveBack = KT.game.add.tween(perText).to({ y: "-15" }, 200, "Linear");
                    tweenMoveBack.start();
                    tweenBack.start();
                    tweenBack.onComplete.add(() => {
                        perText.kill();
                    });
                });
                if (dotSprite.key == 'noteX2') {
                    if (KT.normalModeDone == false) {
                        KT.perPoint += 1;
                    }
                    KT.score += 6;
                }
                else {
                    if (KT.normalModeDone == false) {
                        KT.perPoint += 1;
                    }
                    KT.score += 2;
                }
                dotSprite.destroy();
                var eff_per = KT.game.add.sprite(barSprite.position.x, barSprite.position.y, 'eff_per');
                eff_per.anchor.set(0.5);
                eff_per.scale.set(0.5);
                var tween_per = KT.game.add.tween(eff_per.scale).to({ x: 1, y: 1 }, 300, "Linear");
                tween_per.start();
                var tween_per_alpha = KT.game.add.tween(eff_per).to({ alpha: 0.2 }, 300, "Linear");
                tween_per_alpha.start();
                tween_per.onComplete.add(() => {
                    eff_per.destroy();
                });
            }
            else {
                if (dotSprite.key == 'noteX2') {
                    KT.score += 3;
                }
                else {
                    KT.score += 1;
                }
                KT.txtLet.destroy();
                dotSprite.destroy();
            }
        }
    },
    generateNote: function (timeSub, spriteName, timeNote, effMid, effLt, effRt, color, type) {
        // console.log(timeSub)
        var x;
        var distance;
        var randomDirect = Math.random();
        var randomX = Math.random();
        //distance
        if (timeSub > 0.5) {
            distance = KT.game.width / 20 * 7.5;
        }
        else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
            distance = KT.game.width / 20 * 6;
        }
        else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
            distance = KT.game.width / 20 * 2.5;
        }
        else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
            distance = KT.game.width / 20;
        }
        else if (timeSub <= 0.1) {
            distance = KT.game.width / 30;
        }
        if (timeSub == 1000) {
            distance = KT.game.width / 2;
            randomDirect = 100;
        }
        //direct
        if (randomDirect <= 0.5) {
            distance = -distance;
        }
        if (randomDirect > 0.5) {
            distance = distance;
        }
        if (randomX <= 0.5) {
            x = -Math.floor(Math.random() * (KT.game.width / 100)) + KT.posGenPrevious + distance;
        }
        if (randomX > 0.5) {
            x = Math.floor(Math.random() * (KT.game.width / 100)) + KT.posGenPrevious + distance;
        }
        if (x < KT.bar.sprite.width / 2) {
            if (timeSub > 0.5) {
                x += KT.game.width / 20 * 15;
            }
            else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
                x += KT.game.width / 20 * 12;
            }
            else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
                x += KT.game.width / 20 * 5;
            }
            else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
                x += KT.game.width / 20 * 2;
            }
            else if (timeSub <= 0.1) {
                x += KT.game.width / 30 * 2;
            }
        }
        if (x > KT.game.width - KT.bar.sprite.width / 2) {
            if (timeSub > 0.5) {
                x -= KT.game.width / 20 * 15;
            }
            else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
                x -= KT.game.width / 20 * 12;
            }
            else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
                x -= KT.game.width / 20 * 5;
            }
            else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
                x -= KT.game.width / 20 * 2;
            }
            else if (timeSub <= 0.1) {
                x -= KT.game.width / 30 * 2;
            }
        }
        KT.posGenPrevious = x;
        // console.log(timeSub);
        // console.log(KT.posGenPrevious);
        var y = -12;
        KT.pianoList.push(new PianoController(x, y, spriteName, {
            time: timeNote,
            color: color,
            type: type
        }));
        KT.effectList.push(new EffectController(x, KT.game.height - KT.configs.HEIGHT_TOOL - KT.game.height * 0.025, effMid, {
            time: timeNote
        }));
        KT.effectList2.push(new EffectController2(x, KT.game.height - KT.configs.HEIGHT_TOOL - KT.game.height * 0.025, effLt, {
            time: timeNote
        }));
        KT.effectList3.push(new EffectController3(x, KT.game.height - KT.configs.HEIGHT_TOOL - KT.game.height * 0.025, effRt, {
            time: timeNote
        }));
    },
    generateNoteBig: function (timeSub, spriteName, timeNote, effMid, effLt, effRt, color, type, spriteNameMini) {
        var x;
        var distance;
        var randomDirect = Math.random();
        var randomX = Math.random();
        //distance
        if (timeSub > 0.5) {
            distance = KT.game.width / 20 * 7.5;
        }
        else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
            distance = KT.game.width / 20 * 6;
        }
        else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
            distance = KT.game.width / 20 * 2.5;
        }
        else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
            distance = KT.game.width / 20;
        }
        else if (timeSub <= 0.1) {
            distance = KT.game.width / 30;
        }
        if (timeSub == 1000) {
            distance = KT.game.width / 2;
            randomDirect = 100;
        }
        //direct
        if (randomDirect <= 0.5) {
            distance = -distance;
        }
        if (randomDirect > 0.5) {
            distance = distance;
        }
        if (randomX <= 0.5) {
            x = -Math.floor(Math.random() * (KT.game.width / 100)) + KT.posGenPrevious + distance;
        }
        if (randomX > 0.5) {
            x = Math.floor(Math.random() * (KT.game.width / 100)) + KT.posGenPrevious + distance;
        }
        if (x < KT.bar.sprite.width / 2) {
            if (timeSub > 0.5) {
                x += KT.game.width / 20 * 15;
            }
            else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
                x += KT.game.width / 20 * 12;
            }
            else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
                x += KT.game.width / 20 * 5;
            }
            else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
                x += KT.game.width / 20 * 2;
            }
            else if (timeSub <= 0.1) {
                x += KT.game.width / 30 * 2;
            }
        }
        if (x > KT.game.width - KT.bar.sprite.width / 2) {
            if (timeSub > 0.5) {
                x -= KT.game.width / 20 * 15;
            }
            else if ((timeSub > 0.3) && (timeSub <= 0.5)) {
                x -= KT.game.width / 20 * 12;
            }
            else if ((timeSub <= 0.3) && (timeSub > 0.2)) {
                x -= KT.game.width / 20 * 5;
            }
            else if ((timeSub <= 0.2) && (timeSub > 0.1)) {
                x -= KT.game.width / 20 * 2;
            }
            else if (timeSub <= 0.1) {
                x -= KT.game.width / 30 * 2;
            }
        }
        KT.posGenPrevious = x;
        // console.log(KT.posGenPrevious);
        var y = -12;
        KT.pianoList.push(new NoteBigController(x, y, spriteName, {
            time: timeNote,
            color: color,
            type: type,
            spriteNameMini: spriteNameMini
        }));
    },
    generateNoteMini: function () {

    },
    countDownStart: function (spriteGuide, hand, tweenGuide, tweenHand) {
        KT.btn_play.destroy();
        var sprite3 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '3');
        sprite3.anchor.set(0.5);
        var tween3 = KT.game.add.tween(sprite3.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
        tween3.start();
        tween3.onComplete.add(() => {
            sprite3.destroy();
            var sprite2 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '2');
            sprite2.anchor.set(0.5);
            var tween2 = KT.game.add.tween(sprite2.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
            tween2.start();
            tween2.onComplete.add(() => {
                sprite2.destroy();
                var sprite1 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '1');
                sprite1.anchor.set(0.5);
                var tween1 = KT.game.add.tween(sprite1.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
                tween1.start();
                tween1.onComplete.add(() => {
                    KT.txtLet.revive();
                    sprite1.destroy();
                    spriteGuide.destroy();
                    hand.destroy();
                    tweenGuide.stop();
                    tweenHand.stop();
                    this.playTest();
                    KT.timeFirst = true;
                    KT.song.play();
                })
            })
        });
    },
    countDownUpRate: function () {
        //tween endless
        if (!KT.dead) {
            var endlessMode = KT.game.add.sprite(KT.game.world.centerX, -70, 'endless-mode');
            endlessMode.anchor.set(0.5);
            endlessMode.scale.set(KT.game.width / 1080);
            var tweenEndless = KT.game.add.tween(endlessMode).to({ y: KT.game.height / 10 }, 1300, "Linear");
            tweenEndless.start();
            //tween Count
            var sprite3 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '3');
            sprite3.anchor.set(0.5);
            var tween3 = KT.game.add.tween(sprite3.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
            tween3.start();
            tween3.onComplete.add(() => {
                var tweenEndlessAlpha = KT.game.add.tween(endlessMode).to({ alpha: 0 }, 2000, "Linear");
                tweenEndlessAlpha.start();
                sprite3.destroy();
                KT.game.time.reset();
                KT.timeoutPlay = KT.game.time.create();
                KT.timeoutPlay.start();
                var sprite2 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '2');
                sprite2.anchor.set(0.5);
                var tween2 = KT.game.add.tween(sprite2.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
                tween2.start();
                tween2.onComplete.add(() => {
                    sprite2.destroy();
                    var sprite1 = KT.game.add.sprite(KT.game.world.centerX, KT.game.world.centerY, '1');
                    sprite1.anchor.set(0.5);
                    var tween1 = KT.game.add.tween(sprite1.scale).to({ x: 0.5, y: 0.5 }, 1500, "Linear");
                    tween1.start();
                    tween1.onComplete.add(() => {
                        endlessMode.destroy();
                        sprite1.destroy();
                        KT.song.play();
                        KT.song._sound.playbackRate.value = KT.songLv;
                    });
                });
            });
        }
    },
    songStopped: function () {
        if (KT.testFisrtDone) {
            if (!KT.dead) {
                KT.normalModeDone = true;
                KT.songLv += KT.configs.RATE_SPEED;
                this.countDownUpRate();
            }
        }
    },
    changeArrayToGenNote: function () {
        var numOb = KT.NOTEAll.length;
        // console.log(KT.NOTEAll[0], KT.NOTEAllNextLevel[0]);
        for (i = 0; i < numOb; i++) {
            if (i == 0) {
                if (KT.NOTEAll[i] == KT.greenNotes[0]) {
                    this.generateNote(1000, 'piano', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_mid', 'eff_lt', 'eff_rt', 'green', 'normal');
                    KT.greenNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.greenNotes.shift();
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                }
                else if (KT.NOTEAll[i] == KT.orangeNotes[0]) {
                    this.generateNote(1000, 'orange', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midOrange', 'eff_ltOrange', 'eff_rtOrange', 'orange', 'normal');
                    KT.orangeNotes.shift();
                    KT.orangeNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                }
                else if (KT.NOTEAll[i] == KT.violetNotes[0]) {
                    this.generateNote(1000, 'violet', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midViolet', 'eff_ltViolet', 'eff_rtViolet', 'violet', 'normal');
                    KT.violetNotes.shift();
                    KT.violetNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                }
                else if (KT.NOTEAll[i] == KT.x2Notes[0]) {
                    this.generateNote(1000, 'noteX2', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midX2', 'eff_ltX2', 'eff_rtX2', 'yellow', 'normalX2');
                    KT.x2Notes.shift();
                }
            }
            if (i > 0) {
                if (i == numOb - 1) {
                    if (KT.NOTEAll[i] == KT.greenNotes[0]) {
                        this.generateNoteBig(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'greenX3', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_mid', 'eff_lt', 'eff_rt', 'green', 'big', 'greenMini');
                        KT.greenNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                        KT.greenNotes.shift();
                        KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                        // console.log(KT.NOTEAll);
                    }
                    else if (KT.NOTEAll[i] == KT.orangeNotes[0]) {
                        this.generateNoteBig(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'orangeX3', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midOrange', 'eff_ltOrange', 'eff_rtOrange', 'orange', 'big', 'orangeMini');
                        KT.orangeNotes.shift();
                        KT.orangeNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                        KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                        // console.log(KT.NOTEAll);
                    }
                    else if (KT.NOTEAll[i] == KT.violetNotes[0]) {
                        this.generateNoteBig(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'violetX3', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midViolet', 'eff_ltViolet', 'eff_rtViolet', 'violet', 'big', 'violetMini');
                        KT.violetNotes.shift();
                        KT.violetNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                        KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                        // console.log(KT.NOTEAll);
                    }
                }
                if (KT.NOTEAll[i] == KT.greenNotes[0]) {
                    this.generateNote(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'piano', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_mid', 'eff_lt', 'eff_rt', 'green', 'normal');
                    KT.greenNotes.shift();
                    KT.greenNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                    // console.log(KT.NOTEAll);
                }
                else if (KT.NOTEAll[i] == KT.orangeNotes[0]) {
                    this.generateNote(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'orange', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midOrange', 'eff_ltOrange', 'eff_rtOrange', 'orange', 'normal');
                    KT.orangeNotes.shift();
                    KT.orangeNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                    // console.log(KT.NOTEAll);KT.NOTEAll.shift();                    
                }
                else if (KT.NOTEAll[i] == KT.violetNotes[0]) {
                    this.generateNote(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'violet', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midViolet', 'eff_ltViolet', 'eff_rtViolet', 'violet', 'normal');
                    KT.violetNotes.shift();
                    KT.violetNotes.push(KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED));
                    KT.NOTEAll[KT.NOTEAll.length] = KT.NOTEAllDefault[i] / (KT.songLv + KT.configs.RATE_SPEED);
                    // console.log(KT.NOTEAll);
                }
                else if (KT.NOTEAll[i] == KT.x2Notes[0]) {
                    this.generateNote(KT.NOTEAllDefault[i] - KT.NOTEAllDefault[i - 1], 'noteX2', KT.NOTEAll[i] + KT.timeAddAfterNormalMode, 'eff_midX2', 'eff_ltX2', 'eff_rtX2', 'yellow', 'normalX2');
                    KT.x2Notes.shift();
                }
            }
        }
        KT.NOTEAll.splice(0, numOb);
    },
    createNoteDefault: function (arrDefault, arrToDefault) {
        for (i = 0; i < arrToDefault.length; i++) {
            arrDefault[i] = arrToDefault[i];
        }
    }
}