class NoteGiftController {
    constructor(x, y,spriteName, configs) {
        this.configs = configs;
        // console.log(this.configs);
        this.sprite = KT.giftNoteGroup.create(x, y, spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.update = this.update.bind(this);
        // this.sprite.alpha = 1;
        // this.sprite.scale.set(0.5);
        // console.log(this.sprite.position);
        this.sprite.kill();
        this.stretch = KT.game.height - KT.configs.HEIGHT_TOOL- y - 41.5;
        this.time = 700;
        this.velo = 1;
        this.veloAfter = this.stretch/this.time/8;
        // this.emitter = KT.game.add.emitter(x, y,3);
        // this.emitter.gravity = 0;
        // this.emitter.maxParticleSpeed = 0;
        // this.emitter.minRotation = 0;
        // this.emitter.maxRotation = 0;
        // this.emitter.setAlpha(1, 0, 300);
        // if(spriteName == 'piano'){
        //     this.emitter.makeParticles('piano');
        // }else if(spriteName == 'orange'){
        //     this.emitter.makeParticles('orange');
        // }else if(spriteName == 'violet'){
        //     this.emitter.makeParticles('violet');
        // }
        // this.emitter.start(false, 200,50);
        // this.emitter.on = false;
        // console.log(this.stretch,this.veloAfter);
        // this.acceleration = 10; 
    }
    update() {
        if (KT.checkPlay) {
            if(KT.timeoutPlay.ms >= this.configs.time - 1500){
                this.sprite.revive();
                // this.emitter.on = true;
                this.sprite.position.y += this.velo;
                // this.emitter.x = this.sprite.position.x;
                // this.emitter.y = this.sprite.position.y;

            }
            if (this.sprite.position.y >= 41.5) {
                // console.log(KT.timeoutPlay.ms);
                this.velo += this.veloAfter; 
                this.sprite.position.y += this.velo;
            }
            if (this.sprite.position.y > KT.game.height- KT.configs.HEIGHT_TOOL - 100) {
                // console.log(KT.timeoutPlay.ms);
                // this.emitter.on = false;
            }
            if (this.sprite.position.y > KT.game.height) {
                // console.log(KT.timeoutPlay.ms);
                this.sprite.destroy();
            }
            KT.game.physics.arcade.overlap(
                KT.giftNoteGroup,
                KT.barGroup,
                this.eatGift
            )
        }
    }
    eatGift(giftSprite, barSprite){
        // console.log('gift');
        giftSprite.destroy();
    }
}
// 10758
// 622.5
// 385.5