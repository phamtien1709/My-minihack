class NoteMiniController {
    constructor(x, configs){
        this.configs = configs;
        if(this.configs.key == 'greenX3'){
            this.sprite = KT.miniNoteGroup.create(x,KT.game.height - KT.configs.HEIGHT_TOOL - 70, 'greenMini');
        }
        else if(this.configs.key == 'orangeX3'){
            this.sprite = KT.miniNoteGroup.create(x,KT.game.height - KT.configs.HEIGHT_TOOL - 70, 'orangeMini');
        } 
        else if(this.configs.key == 'violetX3'){
            this.sprite = KT.miniNoteGroup.create(x,KT.game.height - KT.configs.HEIGHT_TOOL - 70, 'violetMini');
        }         
        KT.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.anchor.set(0.5);
        var rndDir = Math.random();
        var rndX;
        if(rndDir >=0.5){
            rndX = Math.floor(Math.random()*75);
        }else {
            rndX = -Math.floor(Math.random()*75);
        }
        var rndY = -KT.veloYMini;
        KT.veloYMini -= 60;
        this.sprite.body.velocity.setTo(rndX, rndY);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.bounce.setTo(1, 1);
        this.sprite.update = this.update.bind(this);
    }
    update(){
        this.sprite.body.velocity.y +=5;
        if (this.sprite.position.y > KT.game.height - KT.configs.HEIGHT_TOOL+25) {
            // console.log(KT.timeoutPlay.ms);
            this.sprite.destroy();
        };
        KT.game.physics.arcade.overlap(
            KT.barGroup,
            this.sprite,
            this.onBarHitMini
        );
    }
    onBarHitMini(miniSprite,barSprite){
        var effMid;
        var effLt;
        var effRt;
        if(miniSprite.key == 'orangeMini'){
            effMid = 'eff_midOrange';
            effLt = 'eff_ltOrange';
            effRt = 'eff_rtOrange';
        }else if(miniSprite.key == 'violetMini'){
            effMid = 'eff_midViolet';
            effLt = 'eff_ltViolet';
            effRt = 'eff_rtViolet';
        }else if(miniSprite.key == 'greenMini'){
            effMid = 'eff_mid';
            effLt = 'eff_lt';
            effRt = 'eff_rt';
        }
        barSprite.body.setSize(422, 105, 0, 100);
        miniSprite.destroy();
        KT.score += 2;
        KT.audioCollideMiniNote.play();
        // console.log(miniSprite.key);
        KT.effectList.push(new EffectController(miniSprite.position.x, KT.game.height - KT.configs.HEIGHT_TOOL - 35, effMid, {
            time: (KT.timeoutPlay.ms + 150)/1000
        }));
        KT.effectList2.push(new EffectController2(miniSprite.position.x, KT.game.height - KT.configs.HEIGHT_TOOL - 35, effLt, {
            time: (KT.timeoutPlay.ms + 150)/1000
        }));
        KT.effectList3.push(new EffectController3(miniSprite.position.x, KT.game.height - KT.configs.HEIGHT_TOOL - 35, effRt, {
            time: (KT.timeoutPlay.ms + 150)/1000
        }));
        // console.log('collide');
    }
}