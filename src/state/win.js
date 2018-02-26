var winState = {
    preload: function(){

    },
    create: function(){
        KT.game.stage.backgroundColor = "#112574";
        console.log( Math.floor(KT.perPoint / KT.targetPoint * 100));
        console.log(KT.score);
        console.log(KT.highscore);
        console.log(KT.diamond);
        console.log(KT.nameOfSong);
    },
    update: function(){

    }
}