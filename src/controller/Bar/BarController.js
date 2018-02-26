class BarController {
    constructor(x, y, configs) {
        this.sprite = KT.barGroup.create(x, y, 'bar1');
        this.sprite.anchor = new Phaser.Point(0.5, 0.26);
        this.sprite.scale.setTo(0.3);
        this.sprite.update = this.update.bind(this);
        this.sprite.inputEnabled = true;
        this.sprite.body.collideWorldBounds = true;
        // this.sprite.body.setBoundsToWorld = true;
        this.bounds = new Phaser.Rectangle(0, KT.game.height/3*2, KT.game.width, KT.game.height);
        this.sprite.input.enableDrag();
        this.sprite.input.boundsRect = this.bounds;
        this.sprite.input.allowVerticalDrag = false;
        // console.log(this.sprite);
    }
    update() {
        // console.log(this.sprite);
        if (KT.checkData) {
            if (this.sprite.x < this.sprite.width) {
                this.sprite.x = this.sprite.width;
            }
            else if (this.sprite.x > KT.game.width - this.sprite.width) {
                this.sprite.x = KT.game.width - this.sprite.width;
            }
        }
        if(KT.endGame){
            this.sprite.inputEnabled = false;
        }
    }
}