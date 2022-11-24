//設置全域變數
var body = document.querySelector("body");
var TextArea = document.querySelector(".TextArea");
var IndexPiture = document.querySelector(".IndexPiture");
var MyPiture = document.querySelector(".MyPiture");
var BigScreen = document.querySelector(".BigScreen");
var ScreenBlack = document.querySelector(".ChangeScreen");
var end = document.querySelector(".end");
var endText = document.querySelector(".endText");
var m = document.querySelector("main");
var h = document.querySelector("header");
var f = document.querySelector("footer");
var CV = document.querySelector(".ChangeScreenV1");
var SB = getRandomBG(8);


var Cards = ['剪刀', '石頭', '布'];
var MyCards = "";
var EmCards = "";
var EmInfo = document.querySelector(".EmInfo");
var MyInfo = document.querySelector(".MyInfo");
var Bt = document.querySelector(".BattleText");
var bt = document.querySelector(".fighttext");
var CurHp = Number(document.querySelector(".CurHp").innerText);
var EmCurHp = Number(document.querySelector(".EmCurHp").innerText);
var CurHpImg = document.querySelector(".CurHpImg");
CurHpImg.style = "width: 100%";
var CH = 100;
var EmCurHpImg = document.querySelector(".EmCurHpImg");
EmCurHpImg.style = "width: 100%";
var ECH = 100;
var Lh = document.querySelector(".Lh");
var Lh2 = document.querySelector(".Lh2");
var Rh = document.querySelector(".Rh");
var h01 = document.querySelector("#hit01");
var h02 = document.querySelector("#hit02");


var ScreenIndexNow = true;
var ScreenIndex = 1;
var ScreenFightNow = false;
var RCt = 0;
var Ct = 0;
var Cb = 0;
var wct = 0;
var vct = 0;
var Fct = 0;

Lh.style = "display: none;";
Rh.style = "display: none;";

//隨機數為0~x
function getRandom() {
    return Math.floor(Math.random() * 3);
};

function getRandomBG(x) {
    return Math.floor(Math.random() * x) + 1;
};

//清除backgroundImage的各種脫逸字元，否則抓不到url
function CIurl(x) {
    CIstyle = x.currentStyle || window.getComputedStyle(x, false);
    // console.log(CIurl);
    return CIstyle.backgroundImage.slice(4, -1).replace(/"/g, "");
}

//開啟後的導覽訊息
window.addEventListener("load", function () {
    TextArea.style = "width: 100%; height: 50%; opacity: 1; transition:all 1s 0.5s; background-color: rgb(0, 0, 0, 0.5);"
})

window.addEventListener("keyup", function (k) {

    if (ScreenIndexNow == true) {

        Lh.style = "display: none;";
        Lh2.style = "display: none;";
        Rh.style = "display: none;";

        //跳過序章
        if (Fct == 0 && k.key === 'Escape') {
            ScreenIndexNow = false;
            ScreenFightNow = true;
            StartScreen02()
        }

        //ScreenIndex判斷第幾幕，按下Space開始執行
        if (k.key === ' ' & ScreenIndex < 9) {

            TextArea.style = "width: 0%; height: 0%; opacity: 0; transition:all 0.5s; background-color: rgb(0, 0, 0, 0.5);";

            console.log(ScreenIndex);
            ScreenIndex += 1;

            if (ScreenIndex <= 8) {
                setTimeout("TextArea.style = 'width: 100%; height: 50%; opacity: 1; transition:all 0.5s linear; background-color: rgb(0, 0, 0, 0.5);'", 700);
            }

        }

        //幾次之後消除TextArea(結束ScreenIndex)並進入ScreenFight
        else if (k.key === 'z' | k.key === 'x' | k.key === 'c' | k.key === ' ' & ScreenIndex == 9) {
            TextArea.style = "display:none";
            ScreenIndexNow = false;
            ScreenFightNow = true;
        }

        console.log("您輸入的是:" + k.key);
        console.log("目前在第: " + ScreenIndex + " 幕");
        // console.log(ScreenIndexNow);
        // console.log(ScreenFightNow);



        //ScreenIndex第01幕，顯示IndexPiture
        if (k.key === ' ' & ScreenIndex == 1) {

            setTimeout("TextArea.innerHTML='大葛格~~~來猜拳吧!!'", 700);

        }

        //ScreenIndex第02幕，顯示MyPiture，收起IndexPiture
        else if (k.key === ' ' & ScreenIndex == 2) {
            body.style = "background-color: white; transition: 1s";

            setTimeout("MyPiture.style = 'opacity: 1; transition:all 0.5s linear;'", 700);

            setTimeout("TextArea.innerHTML='嗯?好像有什麼聲音...?'", 700);
        }

        else if (k.key === ' ' & ScreenIndex == 3) {

            MyPiture.style = "opacity: 0; transition:all 0.5s;";
            setTimeout("IndexPiture.style = 'opacity: 1; transition:all 0.5s linear;'", 700);
            setTimeout("TextArea.innerHTML='來啦猜啦來猜啦猜啦猜啦'", 700);
        }

        else if (k.key === ' ' & ScreenIndex == 4) {

            body.style = "background-color: black; transition: 1s";

            setTimeout("MyPiture.style = 'background-image: url(Images/02.jpg); width: 300px; height: 70%; top: -20%; opacity: 1; transition:all 0.5s linear;'", 700);

            setTimeout("TextArea.innerHTML='(...怎麼又是這個吵死人的臭小鬼啊)'", 700);
        }

        else if (k.key === ' ' & ScreenIndex == 5) {


            setTimeout("IndexPiture.style = 'scale: 1.3; opacity: 1; transition: all 0.5s linear;'", 700);
            setTimeout("TextArea.innerHTML='來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦'", 700);
        }
        else if (k.key === ' ' & ScreenIndex == 6) {

            MyPiture.style = "background-image: url(Images/02.jpg); opacity: 0; transition:all 0.5s 0.5s;";
            setTimeout("IndexPiture.style = 'scale: 1.9; opacity: 1; transition: all 0.5s linear;'", 700);
            setTimeout("TextArea.innerHTML='你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你'", 700);
        }

        else if (k.key === ' ' & ScreenIndex == 7) {


            function BigText() {
                function rt() {
                    TextArea.innerHTML = "你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦來猜啦來啦猜啦來猜啦猜啦來猜啦來啦猜啦來啦你來猜來你來猜猜拳啦來嘛來啦你你來啦猜啦來猜啦猜啦";
                }
                setTimeout(rt, 700);
            }

            BigText();

            TextArea.style = "position:fixed; height:100vh; color: red; border: none; transition:all 0.2s 0.5s";

            setTimeout("IndexPiture.style = 'scale: 5; left: 45%; top: 25%; opacity: 1; transition: all 0.2s linear;'", 700);




        }

        else if (k.key === ' ' & ScreenIndex == 8) {

            IndexPiture.style = "opacity: 0; transition:all 0.5s;";
            body.style = "background-color: black; transition: 1s";

            setTimeout("MyPiture.style = 'background-image: url(Images/02.jpg);backgroundSize: 150%; width: 300px; height: 70%; border: 3px solid red; top: -30%; scale: 1.5; opacity: 1; transition:all 0.5s linear;'", 700);

            TextArea.style = "border: 3px solid red";
            setTimeout("TextArea.innerText='乾吵死了!看我今天還不給你一點教訓!'", 700);
        }


        else if (k.key === ' ' & ScreenIndex == 9) {

            //ScreenBlack結束後將所有用不到的div隱藏
            Lh.style = "display: none;";
            Lh2.style = "display: none;";
            Rh.style = "display: none;";
            setTimeout("TextArea.style = 'display: none;'", 100);
            setTimeout("IndexPiture.style = 'display:none;'", 100);
            setTimeout("MyPiture.style = 'display:none;'", 100);
            setTimeout("ScreenBlack.style= 'display:none;'", 10000);
            setTimeout("BigScreen.style= 'display:none;'", 10000);
            setTimeout("document.querySelector('.ChangeScreenV1').style= 'display:none;'", 10000);


            body.style = "background-color: white; transition: 1s";
            MyPiture.style = "background-image: url(Images/02.jpg);opacity: 0; transition:all 0.5s;";


            // ScreenBlack.style = "width:100%; height: 100%; opacity: 1; transform: rotate(7200deg); transition: all 0.5s ease 8.5s";

            if (vct == 0) {
                setTimeout(StartScreen02, 9600);
                setTimeout("CV.style= 'display:none;'", 9600);
                setTimeout("CV.muted", 9600);
                CV.style = "width: 100%; height: 110vh; object-fit: cover;";
                CV.src = "./Videos/Start000.mp4";
                CV.play();
                vct = 1;
            }
            else {
                StartScreen02();
            }



        }

    }
    else {
        StartScreen02();
    }

    function StopScreen01() {
        ScreenBlack.style = "display:none";
        BigScreen.style = "display:none";
        CV.muted = true;
        CV.style = "display:none";
        TextArea.style = "display: none;";
        IndexPiture.style = "display:none;";
        MyPiture.style = "display:none;";
    }



    //進入ScreenFightNow戰鬥場景
    function StartScreen02() {

        if (Fct == 0) {
            StopScreen01();
        }


        h.style = "opacity: 1;transition:all 1s";
        f.style = "opacity: 1;transition:all 1s";


        Lh.style = "z-index: 2; display: block; animation: Lhandmove 0.8s infinite alternate linear 0.3s; transition:all 1s";

        Rh.style = "z-index: 1; display: block;  animation: Rhandmove 0.8s infinite alternate linear 0.3s;transition:all 1s";


        if (Fct == 0) {
            body.style = "height: 100%; background-image: url('./Images/B" + SB + ".gif');background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 1; ";
        }



        var S = document.querySelector(".Scissors");
        var R = document.querySelector(".Rock");
        var P = document.querySelector(".Paper");


        //復活按鈕
        // document.querySelector("#Re").addEventListener('click', function () {
        //     document.querySelector(".CurHp").innerText = 100;
        //     document.querySelector(".EmCurHp").innerText = 100;
        //     bt.style = "opacity: 1; color: rgb(247, 82, 41);transition: 1s;transition:all 0.1s 0.5s; animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
        // })

        if (k.key === 'r') {
            StopScreen01();
            Lh2.style = "display: none;";
            SB = getRandomBG(8);
            console.log("r: " + SB);
            document.querySelector(".CurHp").innerText = 100;
            document.querySelector(".EmCurHp").innerText = 100;
            MyInfo.style = "animation: none";
            EmInfo.style = "animation: none";
            end.style = "position = none;";
            endText.style = "position = none;";
            CurHpImg.style = "width: 100%";
            EmCurHpImg.style = "width: 100%";
            wct = 0;
            RCt = 0
            CH = 100;
            ECH = 100;
            Cb = 0;
            body.style = "background-image: url('./Images/B" + SB + ".gif');background-size: cover; background-position: center; background-repeat: no-repeat;";
        }


        FightStrat();

        function FightStrat() {


            Lh.style = "z-index: 2; display: block; animation: Lhandmove 0.8s infinite alternate linear 0.3s; transition:all 1s";

            Rh.style = "z-index: 1; display: block;  animation: Rhandmove 0.8s infinite alternate linear 0.3s;transition:all 1s";

            //戰鬥循環自動略過戰鬥是否開啟(開啟=把break註解掉)
            while (document.querySelector(".CurHp").innerText > 0 & document.querySelector(".EmCurHp").innerText > 0) {

                //每次循環清空按鈕(不清空會讓任何按鈕重複上一個攻擊指令)
                MyCards = "";

                if (StopFight() == 1) {
                    break;
                }

                else {

                    if (Fct == 0) {
                        setTimeout(function () { RCT2() }, 2300);
                        Fct = 1;
                    }

                    setTimeout(function () { RCT(RCt) }, 1500);



                    if (Ct == 0 | k.key === 'r') {
                        bt.style = "opacity: 1; color: rgb(247, 82, 41); transition:all 0.1s 0.5s; animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
                        bt.innerHTML = "決鬥開始!";
                    }


                    if (k.key === 'a') {
                        bt.style = "color: white; opacity: 1;"

                        MyCards = "剪刀";
                        EmCards = Cards[getRandom()];

                        S.style = "scale: 0.8";
                        
                        if (Fct == 0) {
                            window.addEventListener("keyup", function () {
                                S.style = "scale: 1";
                            })
                        }
                        Ct += 1;
                    }

                    else if (k.key === 's') {
                        bt.style = "color: white; opacity: 1;"

                        MyCards = "石頭";
                        EmCards = Cards[getRandom()];

                        R.style = "scale: 0.8";

                        if (Fct == 0) {
                            window.addEventListener("keyup", function () {
                                R.style = "scale: 1";
                            })
                        }
                        Ct += 1;
                    }

                    else if (k.key === 'd') {
                        bt.style = "color: white; opacity: 1;"

                        MyCards = "布";
                        EmCards = Cards[getRandom()];

                        P.style = "scale: 0.8";

                        if (Fct == 0) {
                            window.addEventListener("keyup", function () {
                                P.style = "scale: 1";
                            })
                        }
                        Ct += 1;
                    }


                    console.log("第" + (RCt + 1) + "回合!");

                    console.log("現在的Cb為" + Cb);

                    //結束連打模式
                    if (Cb == 2 & k.key === 'q') {
                        StopScreen01();
                        Lh2.style = "display: none;";
                        Lh.style = "left: 0px; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 3; transform:rotateX(-2turn); transition:all 0.3s; animation: Lhandmove 0.8s infinite alternate linear 0.3s;";

                        Cb = 0;
                        wct = 0;
                        MyInfo.style = "animation: none";
                        EmInfo.style = "animation: none";
                    }

                    //按Q開啟連打模式
                    else if (Cb == 0 & k.key === 'q') {
                        Lh2.style = "left: -4%; top: 40%; display: block; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 1; transform:rotateX(-2turn); transition:all 0.1s; animation: Lhandmove 0.4s infinite alternate linear 0.1s;";

                        MyInfo.style = "filter: drop-shadow(0px 0px 30px yellow); trnsition: all 30s;";

                        //震動版
                        // MyInfo.style = "filter: drop-shadow(0px 0px 30px yellow); trnsition: all 30s; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

                        setTimeout("BigScreen.style = 'opacity: 0.6;transition: all 5s;'", 5000);
                        setTimeout("CV.style= 'display:none;'", 9500);
                        setTimeout("CV.muted", 9500);
                        BigScreen.style = "display: block;position: fixed; ; opacity: 1;";
                        CV.style = "display: block;position: fixed; z-index: 99 ; opacity: 1; width: 100%; height: 110vh; object-fit: cover;";
                        CV.muted = false;
                        CV.src = "./Videos/Combo02.mp4";
                        CV.play();

                        setTimeout(ClearWaring, 900);
                        end.style = "position: fixed;";
                        endText.innerHTML = "就是現在!快連打ASD!";
                        endText.style = "opacity: 1; color: yellow; display: flex; position:fixed; z-index: 99; justify-content: center;";

                        Cb = 2;
                        wct = 1;

                    }


                    //連打模式啟動
                    if (Cb == 2 & MyCards != "") {
                        Lh.style = "scale:2.5; right: 70%; transform:rotateX(2turn); z-index: 3; transition:all 0.1s";
                        Lh2.style = "scale:2.5; right: 70%; display: block; transform:rotateX(2turn); z-index: 3; transition:all 0.1s";
                        Lh.src = "./Left/LR1.PNG";
                        Lh2.src = "./Left/LR1.PNG";
                        ComboLogic(MyCards);
                        RCt += 1;
                    }

                    //進入對戰邏輯判斷
                    else if (Cb == 0 & MyCards != "") {
                        Lh2.style = "display: none;";
                        FightLogic(MyCards, EmCards);
                        RCt += 1;
                    }

                }
                break;
            }

        }

    }

    function ClearWaring() {
        end.style = "position = none;";
        endText.style = "position = none;";
    }

    function RCT(r) {
        bt.innerText = "第" + (RCt + 1) + "回合!";
    }
    function RCT2(r) {
        bt.innerText = "按下Space開始!";
    }

    //陣亡函式
    function StopFight() {



        if (document.querySelector(".CurHp").innerText <= 50) {
            document.querySelector(".Lh").style = "filter: drop - shadow(0px 0px 30px rgb(255, 13, 13));";
            if (document.querySelector(".CurHp").innerText <= 30) {
                CurHpImg.style = "background-color: red; width:" + CH + "%";
            }
            else {
                CurHpImg.style = "background-color: orange; width:" + CH + "%";
            }
        }

        if (document.querySelector(".EmCurHp").innerText <= 50) {
            document.querySelector(".Rh").style = "filter: drop - shadow(0px 0px 30px rgb(255, 13, 13));";
            if (document.querySelector(".EmCurHp").innerText <= 40) {
                EmCurHpImg.style = "background-color: red; width:" + ECH + "%";

                if (wct == 0) {
                    setTimeout(ClearWaring, 1500);
                    end.style = "position: fixed;";
                    endText.innerHTML = "按下( Q )展開連擊!";
                    endText.style = "opacity: 1; color: yellow; display: flex; position:fixed; z-index: 99; justify-content: center;";
                    wct = 1;
                }


                //自動開啟連打模式
                // Cb = 2;
            }
            else {
                EmCurHpImg.style = "background-color: orange; width:" + ECH + "%";
            }
        }

        //陣亡與否回傳值
        if (document.querySelector(".CurHp").innerText <= 0) {
            document.querySelector(".CurHp").innerText = 0;
            CurHpImg.style.width = "0%";
            end.style = "position: fixed;";
            endText.innerHTML = "YOU LOSE";
            endText.style = "opacity: 1; color: red; display: flex; position:fixed; z-index: 99; justify-content: center;";

            return 1;
        }

        if (document.querySelector(".EmCurHp").innerText <= 0) {
            document.querySelector(".EmCurHp").innerText = 0;
            EmCurHpImg.style.width = "0%";
            end.style = "position: fixed;";
            endText.innerHTML = "YOU WIN";
            endText.style = "color: yellow; display: flex; position:fixed; z-index: 99; justify-content: center;";

            return 1;
        }
        return 0;
    }

    //平手對決時手臂傾斜+震動
    function shakeShadowTie() {
        console.log("shakeShadowTie: " + SB);
        body.style = "width: 100%; height: 100%; position: relative; background-image: url('./Images/B" + SB + ".gif');background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 1; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

        Lh.style = "scale:2.5; left: 35% ; filter: drop-shadow(0px 0px 30px rgb(255, 252, 92)); z-index: 2;transition:all 0.3s; animation: shakeTieLh 900ms ease-in-out; animation-iteration-count: infinite;";

        Rh.style = "scale:2.5; right: 35%; filter: drop-shadow(0px 0px 30px rgb(255, 252, 92)); transition:all 0.3s; animation: shakeTieRh 900ms ease-in-out; animation-iteration-count: infinite;";
    }

    //震動特效
    function shakeShadow() {

        body.style = "width: 100%; height: 100%; position: relative; background-image: url('./Images/B7.gif');background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 1; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

        Lh.style = "left: 30%; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(255, 252, 92)); z-index: 2;transition:all 0.3s; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

        Rh.style = "right: 30%; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(255, 252, 92)); transition:all 0.3s; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";
    }

    //特效Css更動恢復，需要0.3秒
    function CssBack() {
        console.log("CssBack: " + SB);
        Lh.src = "./Left/1.PNG";
        Lh2.style = "display: none;";
        Rh.src = "./Right/2.PNG";

        Bt.style = "background-color: rgb(0, 0, 0, 0); border-radius: 50%; transition:all 0.5s ease";

        Lh.style = "left: 0px; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 3; transform:rotateX(-2turn); transition:all 0.3s; animation: Lhandmove 0.8s infinite alternate linear 0.3s;";

        Rh.style = "right: 0px; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 2; transform:rotateX(-2turn); transition:all 0.3s; animation: Lhandmove 0.8s infinite alternate linear 0.3s;";

        //初始化body的Css
        body.style = "width: 100%; height: 100%; position: relative; background-image: url('./Images/B" + SB + ".gif');background-size: cover; background-position: center; background-repeat: no-repeat; z-index: 1;";

        MyInfo.style = "animation: none";
        EmInfo.style = "animation: none";


    }

    function CobCssBack() {

        Lh.src = "./Left/LR1.PNG";
        Lh2.src = "./Left/LR1.PNG";

        Bt.style = "background-color: rgb(0, 0, 0, 0); border-radius: 50%; transition:all 0.5s ease";

        Lh.style = "left: 0px; top: 55%; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 3; transform:rotateX(-2turn); transition:all 0.1s; animation: Lhandmove 0.2s infinite alternate linear 0.1s;";

        Lh2.style = "left: -4%; top: 40%; display: block; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 1; transform:rotateX(-2turn); transition:all 0.1s; animation: Lhandmove 0.4s infinite alternate linear 0.1s;";

        // Rh.style = "right: 0px; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25, 0)); z-index: 2; transform:rotateX(-2turn); transition:all 0.1s; animation: Lhandmove 0.2s infinite alternate linear 0.1s;";

    }

    //平手時播放，總共耗費2.3秒
    function Tie() {

        setTimeout(CssBack, 1500);
        setTimeout(shakeShadowTie, 300);

        Lh.style = "transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); z-index: 3; transition:all 0.3s;";

        Rh.style = "transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); z-index: 2; transition:all 0.3s;";

    }

    function HeavyAttack(w) {

        if (w == 'l') {
            console.log(w);
            function c() {
                Lh.style = "scale: 2; left: 70%; z-index: 3; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25));transform:rotate(7200deg); transition: all 1s;";
            }
            setTimeout(c, 200);


        }
        else {
            console.log(w);
            function c() {
                Rh.style = "scale: 2; right: 70%; z-index: 4; filter: drop-shadow(0px 0px 30px rgb(236, 39, 25));transform: rotate(7200deg); transition: all 1s;";
            }
            setTimeout(c, 200);


        }

    }

    function LR2Atk() {
        setTimeout(CobCssBack, 60);
        Lh2.style = "scale: 1.5; left: 65%;  display: block; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px yellow);  z-index: 3;";
    }

    //攻擊時播放，總共耗費0.6秒
    function attack(w) {

        var m = getRandom();
        console.log(m);

        if (Cb == 2) {
            setTimeout(CobCssBack, 50);
            setTimeout(LR2Atk, 50);

            Lh.style = "scale: 1.5; left: 65%; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px yellow);  z-index: 3;";

            Rh.style = "scale: 1.3; right: -5%; z-index: 2; transform: rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); transition:all 0.3s; animation: Cobshake 300ms ease-in-out; animation-iteration-count: infinite;";

            EmInfo.style = "filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";


            //每次按的時候先重置音效時間為0
            document.querySelector("#hit01").currentTime = 0;
            document.querySelector("#hit01").play();


        }

        else {
            Lh2.style = "display: none;";
            //共0.6秒
            if (w == 'l') {

                if (m == 0) {

                    setTimeout(CssBack, 500);

                    Lh.style = "scale: 1.1; left: 65%; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25));  z-index: 2; transition:all 0.1s 0.3s; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

                    EmInfo.style = "filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
                }

                else if (m == 1) {

                    setTimeout(CssBack, 1300);

                    Lh.style = "left: 70%; z-index: 2; transition:all 0.2s;";

                    EmInfo.style = "filter: drop-shadow(0px 0px 20px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";

                    HeavyAttack('l');
                }

                else if (m == 2) {
                    setTimeout(CssBack, 700);

                    Lh.style = "scale: 1.5; left: 60%; z-index: 3; transform: rotate(360deg) translateX(-400px); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); transition: all 0.5s;";

                    EmInfo.style = "filter: drop-shadow(0px 0px 20px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
                }

            }

            else if (w == 'r') {

                if (m == 0) {

                    setTimeout(CssBack, 500);

                    Rh.style = "scale: 1.1; right: 70%; z-index: 3; transform:rotateX(2turn); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); transition:all 0.1s 0.3s; animation: shake 300ms ease-in-out; animation-iteration-count: infinite;";

                    MyInfo.style = "filter: drop-shadow(0px 0px 20px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
                }

                else if (m == 1) {

                    setTimeout(CssBack, 1300);

                    Rh.style = "right: 70%; z-index: 2; transition: all 0.2s;";

                    MyInfo.style = "filter: drop-shadow(0px 0px 20px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";

                    HeavyAttack('r');
                }

                else if (m == 2) {
                    setTimeout(CssBack, 700);

                    Rh.style = "scale: 1.5; right: 60%; z-index: 3; transform: rotate(360deg) translateX(-400px); filter: drop-shadow(0px 0px 30px rgb(236, 39, 25)); transition: all 0.5s;";

                    MyInfo.style = "filter: drop-shadow(0px 0px 20px rgb(236, 39, 25)); animation: shake 300ms ease-in-out; animation-iteration-count: 3;";
                }

            }
        }



    }

    //猜拳動畫
    function SRP(L, Y) {

        setTimeout(CssBack, 1000);

        if (L == '剪刀') {
            Lh.style = "scale:2.5; right: 70%; transform:rotateX(2turn); z-index: 3; transition:all 0.1s";
            Lh.src = "./Left/LS1.PNG";
        }
        else if (L == '石頭') {
            Lh.style = "scale:2.5; right: 70%; transform:rotateX(2turn); z-index: 3; transition:all 0.1s";
            Lh.src = "./Left/LR1.PNG";
        }
        else if (L == '布') {
            Lh.style = "scale:2.5; right: 70%; transform:rotateX(2turn); z-index: 3; transition:all 0.1s";
            Lh.src = "./Left/LP1.PNG";
        }

        if (Y == '剪刀') {
            Rh.style = "scale:2.5; left: 70%; transform:rotateX(2turn); z-index: 2; transition:all 0.1s";
            Rh.src = "./Right/RS1.PNG";
        }
        else if (Y == '石頭') {
            Rh.style = "scale:2.5; left: 70%; transform:rotateX(2turn); z-index: 2; transition:all 0.1s";
            Rh.src = "./Right/RR1.PNG";
        }
        else if (Y == '布') {
            Rh.style = "scale:2.5; left: 70%; transform:rotateX(2turn); z-index: 2; transition:all 0.1s";
            Rh.src = "./Right/RP1.PNG";
        }

        if (Y == 0) {
            Rh.style = "scale:2.5; left: 70%; transform:perspective-origin: -20% 100%;; z-index: 2; transition: all 0.1s; animation: shake 100ms ease-in-out; animation-iteration-count: infinite;";
        }
        // filter: drop-shadow(0px 0px 100px rgba(235, 217, 57, 0.9));
    }

    //連打邏輯
    function ComboLogic(L) {

        var atk = 0;

        if (Number(document.querySelector(".EmCurHp").innerText) > 40) {
            atk = 1;
        }
        else {
            atk = 0.5;
        }


        document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) + atk;
        document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - atk;

        CH = CH + atk;
        ECH = ECH - atk;
        CurHpImg.style.width = CH + "%";
        EmCurHpImg.style.width = ECH + "%";

        StopFight();

        attack('l');

    }


    //勝負邏輯
    function FightLogic(L, Y) {

        var atk = 5;
        var tatk = 10;
        Lh2.style = "display: none;";

        if (L == '剪刀') {
            if (Y == '剪刀') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='#29d34e'>~平手~</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - tatk;
                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - tatk;


                // CurHpImg.style = "background-color: red";

                CH = CH - tatk;
                ECH = ECH - tatk;
                CurHpImg.style.width = CH + "%";
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(Tie, 1500);
                SRP(L, Y);

            }
            else if (Y == '石頭') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='red'>你輸了QQ</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - atk;


                CH = CH - atk;
                CurHpImg.style.width = CH + "%";

                StopFight();

                setTimeout(function () { attack('r') }, 1500);
                SRP(L, Y);

            }

            else {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='yellow'>你贏了!</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - atk;


                ECH = ECH - atk;
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(function () { attack('l') }, 1500);
                SRP(L, Y);

            }
        }

        else if (L == '石頭') {

            if (Y == '剪刀') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='yellow'>你贏了!</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - atk;


                ECH = ECH - atk;
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(function () { attack('l') }, 1500);
                SRP(L, Y);

            }
            else if (Y == '石頭') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='#29d34e'>~平手~</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - tatk;
                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - tatk;

                CH = CH - tatk;
                ECH = ECH - tatk;
                CurHpImg.style.width = CH + "%";
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(Tie(), 1500);
                SRP(L, Y);

            }

            else {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='red'>你輸了QQ</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - atk;


                CH = CH - atk;
                CurHpImg.style.width = CH + "%";

                StopFight();

                setTimeout(function () { attack('r') }, 1500);
                SRP(L, Y);

            }
        }

        else {
            if (Y == '剪刀') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='red'>你輸了QQ</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - atk;

                CH = CH - atk;
                CurHpImg.style.width = CH + "%";

                StopFight();

                setTimeout(function () { attack('r') }, 1500);
                SRP(L, Y);


            }
            else if (Y == '石頭') {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='yellow'>你贏了!</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - atk;

                ECH = ECH - atk;
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(function () { attack('l') }, 1500);
                SRP(L, Y);


            }

            else {

                bt.innerHTML = MyCards + " vs " + EmCards + "<br>" + "<font color='#29d34e'>~平手~</font>";
                Bt.style = "background-color: rgb(0, 0, 0, 0.2); border-radius: 50%; transition:all 0.2s ease";

                document.querySelector(".CurHp").innerText = Number(document.querySelector(".CurHp").innerText) - tatk;
                document.querySelector(".EmCurHp").innerText = Number(document.querySelector(".EmCurHp").innerText) - tatk;

                CH = CH - tatk;
                ECH = ECH - tatk;
                CurHpImg.style.width = CH + "%";
                EmCurHpImg.style.width = ECH + "%";

                StopFight();

                setTimeout(Tie(), 1500);
                SRP(L, Y);


            }
        }


    }


})

