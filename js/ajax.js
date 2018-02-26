function getUserID(callback) {
    $.ajax({
        url: "https://api.mlab.com/api/1/databases/musicblock/collections/users?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p",
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            // console.log(data);
            var arr = data;
            var obj = arr.find(function (obj) {
                // obj.userID = KT.checkId;
                return obj.userID == KT.checkId;
            });
            // console.log(obj);
            if (obj == undefined) {
                $.ajax({
                    url: "https://api.mlab.com/api/1/databases/musicblock/collections/users?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p",
                    data: JSON.stringify({
                        "userID": KT.checkId,
                        "userName": KT.nameFB,
                        "heart": 15,
                        "diamond": 0,
                        "highscore": [
                            {
                                "song": "faded",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "ANewDawn",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "BelieveInYourself",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "EmotionalOrchestra_BestAudio",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "ASimple",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "BeethovenFurElise",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "Beautiful_light",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "MotivationalCorporatePiano_GorkemMusic",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "EnergyActionOpliftingPop",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "NewYearMood_IvanLuzan",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "TouchingAndIntimate_DPmusicStudio",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "UpliftingInspiringMoment_ElektorProject",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "aman",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "TheDaysGoBy_DanPhillipson",
                                "highscore": 0,
                                "perfectPercent": 0
                            },
                            {
                                "song": "Rush_Columnals",
                                "highscore": 0,
                                "perfectPercent": 0
                            }
                        ],
                        "total_highscore": 0,
                        "unlock_song": [
                            {
                                "name": "Faded Guitar",
                                "value": "faded",
                                "status": "unlocked"
                            },
                            {
                                "name": "A NEW DAWN",
                                "value": "ANewDawn",
                                "status": "unlocked"
                            },
                            {
                                "name": "BelieveInYourself",
                                "value": "BelieveInYourself",
                                "status": "unlocked"
                            },
                            {
                                "name": "EmotionalOrchestra7",
                                "value": "EmotionalOrchestra_BestAudio",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "A SIMPLE",
                                "value": "ASimple",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "BeethovenFurElise",
                                "value": "BeethovenFurElise",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "BEAUTIFULIGHT",
                                "value": "Beautiful_light",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "Motivational",
                                "value": "MotivationalCorporatePiano_GorkemMusic",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "EnergyAction",
                                "value": "EnergyActionOpliftingPop",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "NewYearMood",
                                "value": "NewYearMood_IvanLuzan",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "TouchingAndIntimate",
                                "value": "TouchingAndIntimate_DPmusicStudio",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "Uplifting",
                                "value": "UpliftingInspiringMoment_ElektorProject",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "GUITAR",
                                "value": "aman",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "TheDaysGoBy",
                                "value": "TheDaysGoBy_DanPhillipson",
                                "status": "locked",
                                "price": 50
                            },
                            {
                                "name": "Rush_Columnals",
                                "value": "Rush_Columnals",
                                "status": "locked",
                                "price": 50
                            }
                        ]
                    }),
                    type: "POST",
                    contentType: "application/json",
                    success: function (data) {
                        console.log(data);
                        callback();
                    }
                });
            } else {
                KT.oidUserData = obj._id.$oid;
                KT.heart = obj.heart;
                KT.diamond = obj.diamond;
                KT.highscore = obj.highscore;
                KT.total_highscore = obj.total_highscore;
                KT.listSongSyns = obj.unlock_song;
                callback();
            }
        }
    });
}
function updateHeart() {
    $.ajax(
        {
            url: `https://api.mlab.com/api/1/databases/musicblock/collections/users/${KT.oidUserData}?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p`,
            data: JSON.stringify({
                "$set": { "heart": KT.heart }
            }),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
            }
        });
}
function updateDiamond() {
    $.ajax(
        {
            url: `https://api.mlab.com/api/1/databases/musicblock/collections/users/${KT.oidUserData}?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p`,
            data: JSON.stringify({
                "$set": { "diamond": KT.diamond }
            }),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
            }
        });
}
function createNewScore(song, highscore, perfectPercent, callback) {
    KT.highscore.push({
        "song": song,
        "highscore": highscore,
        "perfectPercent": perfectPercent
    });
    // console.log(KT.highscore);
    $.ajax(
        {
            url: `https://api.mlab.com/api/1/databases/musicblock/collections/users/${KT.oidUserData}?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p`,
            data: JSON.stringify({
                "$set": { "highscore": KT.highscore }
            }),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                callback();
            }
        });
}
function updateHighscore(callback) {
    $.ajax(
        {
            url: `https://api.mlab.com/api/1/databases/musicblock/collections/users/${KT.oidUserData}?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p`,
            data: JSON.stringify({
                "$set": { "highscore": KT.highscore }
            }),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                callback();
            }
        });
}
function updateDiamondAfterUnlock(){
    $.ajax(
        {
            url: `https://api.mlab.com/api/1/databases/musicblock/collections/users/${KT.oidUserData}?apiKey=2q6U8mj4cR8XJyuoS4TZkUy_lR5Lu14p`,
            data: JSON.stringify({
                "$set": {   
                    "diamond": KT.diamond,
                    "unlock_song" : KT.listSongSyns
                }
            }),
            type: "PUT",
            contentType: "application/json",
            success: function (data) {
                console.log(data);
                KT.game.state.start('boot');
            }
        });
}
