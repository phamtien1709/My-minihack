KT.timeHeart = 180;
setInterval(() => {
    if (KT.timeHeart == 0) {
        if(KT.heart < 15){
			KT.heart += 1;
            updateHeart();
        }
        KT.timeHeart = 180;
    }
    KT.timeHeart -= 1;
    // console.log(KT.timeHeart);
}, 1000);
function handleDiamond(perfectPercent, callback){
    KT.diamond += 45;
    updateDiamond();
    callback();
}
function handleScore(perfectPercent, callback){
    var filterSong = KT.highscore.find(function(filterSong){
        return filterSong.song == KT.nameOfSong;
    });
    if(filterSong == undefined){
        var song = KT.nameOfSong;
        var highscore = KT.score;
        createNewScore(song, highscore, perfectPercent, callback);
    } else{
        if(filterSong.highscore < KT.score){
            // console.log('newHighScore');
            var ind = KT.highscore.findIndex((ele)=>{
                return ele.song == KT.nameOfSong;
            });
            KT.highscore[ind].highscore = KT.score;
            KT.highscore[ind].perfectPercent = perfectPercent;
            updateHighscore(callback);
        } else{
            console.log('no have highscore')
            callback();
        }
    }
}
function handleUnlockSong(price, diamond, name, value){
    if(price<diamond){
        KT.diamond = diamond - price;
        var ind = KT.listSongSyns.findIndex((ele)=>{
            return ele.value == value;
        });
        KT.listSongSyns[ind] = {
            "name": name,
            "value": value,
            "status": "unlocked"
        };
        updateDiamondAfterUnlock();
    }else{
        console.log('not enough');
    }
}