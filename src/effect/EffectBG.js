class EffectBG{
    constructor(x, spriteName){
        this.sprite = KT.effBGGroup.create(x, KT.game.height + 20, spriteName);
        this.sprite.anchor.set(0.5);
        this.sprite.update = this.update.bind(this);
        this.sprite.alpha = 0.3;
        this.sprite.body.velocity.y = -100;
    }
    update(){
        if(this.sprite.position.y < -10){
            this.sprite.position.y = KT.game.height + 20;
            this.sprite.position.x = Math.random()*KT.game.width;
        }
    }
}