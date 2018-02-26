class PianoController {
    constructor(x, y,spriteName, configs) {
        this.configs = configs;
        this.sprite = KT.pianoGroup.create(x, y, spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.update = this.update.bind(this);
        // this.sprite.alpha = 1;
        // this.sprite.scale.set(0.5);
        // console.log(this.sprite.position);
        this.sprite.kill();
        this.stretch = KT.game.height - KT.configs.HEIGHT_TOOL- y - 41.5;
        this.time = 700;
        this.velo = 1;
        this.veloAfter = this.stretch/this.time; 
    }
    update() {
        if (KT.checkPlay) {
            if(KT.timeoutPlay.ms >= this.configs.time*1000 - 1400){
                this.sprite.revive();
                this.sprite.position.y += this.velo;

            }
            if (this.sprite.position.y >= 41.5) {
                this.velo += this.veloAfter; 
                this.sprite.position.y += this.velo;
            }
            if (this.sprite.position.y > KT.game.height) {
                KT.endGame = true;
                KT.checkPlay = false;
                KT.timeoutPlay.stop();
            }
        }
    }
}
// 10758
// 622.5
// 385.5