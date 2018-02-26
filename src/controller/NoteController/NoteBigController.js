class NoteBigController{
    constructor(x, y, spriteName, configs){
        this.configs = configs;
        this.sprite = KT.noteBigGroup.create(x, y, spriteName);
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
        // for(i=0; i<10; i++){
        //     KT.miniNoteList.push(new NoteMiniController(this.sprite.position.x, {
        //         key : spriteName
        //     }));
        // }
    }
    update() {
        if (KT.checkPlay) {
            if(KT.timeoutPlay.ms >= this.configs.time*1000 - 1500){
                this.sprite.revive();
                this.sprite.position.y += this.velo;
            }
            if (this.sprite.position.y >= 41.5) {
                // console.log(KT.timeoutPlay.ms);
                this.velo += this.veloAfter; 
                this.sprite.position.y += this.velo;
            }
            if (this.sprite.position.y > KT.game.height) {
                // console.log(KT.timeoutPlay.ms);
                KT.endGame = true;
                KT.checkPlay = false;
                KT.timeoutPlay.stop();
            }
        }
        KT.game.physics.arcade.overlap(
            KT.barGroup,
            this.sprite,
            this.generateMiniNote
        )
    }
    generateMiniNote(noteBigSprite, barSprite){
        // console.log(this.configs);
        noteBigSprite.destroy();
        for(i=0; i<10; i++){
            KT.miniNoteList.push(new NoteMiniController(noteBigSprite.position.x, {
                key : noteBigSprite.key
            }));
        }
        KT.veloYMini = 700;
    }
}