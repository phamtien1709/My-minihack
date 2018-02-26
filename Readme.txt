GamePlay Prototype
screen size scale (9:16)
Get Data:
    - Get JSON file lay tung object co dang : {
                                                "timeAppear": 0.310416669,
                                                "nodeID": 97,
                                                "duration": 0.3229167,  --> BO
                                                "stringIndex": 1,       --> BO
                                                "noteOrder": 0,         --> BO
                                                "type": "Multi",        --> BO
                                                "isSlash": false,       --> BO
                                                "isShake": false,       --> BO
                                                "numberNoteID": 0       --> BO
                                            }
                                            em chi lay timeAppear với nodeID
    - timeAppear là thời gian rơi của nốt, nodeID là loại node( có 3 loại node là 96 97 98).
Khoảng cách sinh node liền nhau, node sinh trong khoảng cách 2 bên màn hình nửa thanh block: 
    - 2 nốt cách nhau  > 0.5s : 8/20 màn hình
    - 2 nốt cách nhau  > 0.3s : 6/20 màn hình
    - 2 nốt cách nhau  > 0.2s : 2.5/20 màn hình
    - 2 nốt cách nhau  > 0.1s : 1/20 màn hình
    - 2 nốt cách nhau  < 0.1s : 1/30 màn hình
Node rơi trước timeAppear để đến khi chạm vào thanh block đúng với timeAppear.
Node rơi đều đến 1/3 màn hình rồi bắt đầu rơi có gia tốc nhanh dần khi chạm thanh block.
Effect: có 3 sprite vỡ ra khi node chạm block.
NodeBig: va chạm với block vỡ ra 10 NodeMini vỡ ra theo random hướng và bắn lên trên.
NodeMini: có trọng lực kéo xuống dưới em cho 5px/frame.
User Data:
    - json dạng: {  "userID": "1624812604293499",
                    "userName": "Quang Nguyễn",
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
                }
userID là PrimaryKey: là ID FB cung cấp khi đăng nhập.(có thể thay bằng UDID của mobile);
userName graph từ facebookID và accesstoken sau khi đăng nhập FB cung cấp/