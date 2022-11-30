const container = document.querySelector(".container");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const Screen01 = document.querySelectorAll(".Screen01");
const Screen02 = document.querySelectorAll(".Screen02");
const Bgcolor = document.querySelector(".Bgcolor");
const Video = document.querySelector("Video");
const BGM = document.querySelector("audio");
const Img = document.querySelector(".Img");
const Score = document.querySelector(".Score");
const Time = document.querySelector(".Time");
const StartBtn = document.querySelector(".StartBtn");
const PauseBtn = document.querySelector(".PauseBtn");
const ScreenPause = document.querySelector(".ScreenPause");
const BackGame = document.querySelector(".BackGame");
const EndText = document.querySelector(".EndText");
const ScoreName = document.querySelector(".ScoreName");

//關卡難度
var lv = 1;

//得分與稱號
var score = 1;

//迴圈用的變數
var i = 0;
var Rct = 0;

//倒數暫停開關、BGM編號辨識
var Pause = false;
var BgmNum = "01";

//刪除上一關所有色塊Span
function DelSpan() {
    while (Bgcolor.firstChild) {
        Bgcolor.removeChild(Bgcolor.firstChild);
    }
}

//設定色塊Span難度梯度
function MaxSpan(lv) {
    //寬高色塊數上限為9
    if (lv >= 25) {
        return 9;
    }
    //降低難度成長幅度(寬高Span色塊數量)
    else if (lv >= 5 && lv < 10) {
        return 5;
    }
    else if (lv >= 10 && lv < 15) {
        return 6;
    }
    else if (lv >= 15 && lv < 20) {
        return 7;
    }
    else if (lv >= 20 && lv < 25) {
        return 8;
    }
    else {
        return lv;
    }

}

//暫停鍵功能
PauseBtn.addEventListener('click', function () {

    //倒數暫停開關
    Pause = true;

    //BGM、影片暫停
    BGM.pause();
    StopBgVideo();

    //跳出暫停頁面與按鈕
    ScreenPause.style.display = "block";
    ScreenPause.style.backgroundColor = "rgb(0, 0, 0, 0.95)";

    BackGame.style.display = "block";
    BackGame.style.marginTop = "3%";
    BackGame.innerHTML = "Back";

    EndText.innerHTML = "「ザ・ワールド，時は止まる！」";
    ScoreName.style.display = "none";

});

//結束暫停功能
BackGame.addEventListener('click', function () {
    ScreenPause.style.display = "none";
    Pause = false;
    BGM.play();
});

//隨機數為0~x，用來決定哪一個span要變色
function getRandom(x) {
    return Math.floor(Math.random() * x);
};

//隨機色碼生成
function Color() {
    let R = getRandom(256);
    let G = getRandom(256);
    let B = getRandom(256);
    let RGB = [R, G, B];
    return RGB;
};

//暫停背景影片函式
function StopBgVideo() {
    Video.pause();
}

//自動生成關卡色塊Span
function CreatSpan(lv, ClockVideo) {

    //抓取生成的所有span儲存到陣列裡
    var AnsSpan = document.querySelectorAll("span");

    //取得隨機色碼，回傳的是陣列
    var RandColor = Color();

    //總回合數+1
    Rct += 1;

    //印出其他關的色塊Span
    for (i = 0; i < AnsSpan.length; i++) {

        //抓出淺色答案Span色塊
        if (AnsSpan[i].dataset.key == "AnsColor") {

            var Ans = AnsSpan[i];

            Ans.addEventListener('click', function () {

                //中斷上一個video計時器
                clearTimeout(ClockVideo);

                //每次過關播放2秒背景
                ClockVideo = setTimeout(StopBgVideo, 2000);
                Video.play();

                //每次到達新關卡時刪除上一關的所有Span
                DelSpan();

                //難度、得分+1
                lv += 1;
                score += 1;

                Score.innerHTML = "得分: " + score;


                //透過困難度函式取得單邊最大Span色塊數
                var MaxSp = MaxSpan(lv);

                //每次點擊重新創造隨機數(用來決定正確的Span色塊位置)
                ChangeNum = getRandom((MaxSp ** 2));
                var ColorNum = getRandom(6);

                for (i = 0; i < (MaxSp ** 2); i++) {
                    var span = document.createElement('span');

                    //將符合隨機數字的span色塊轉淡並賦予class
                    if (i == ChangeNum) {

                        span.style.display = "block";
                        span.style.width = ((470 - (10 * MaxSp)) / MaxSp) + "px";
                        span.style.height = ((470 - (10 * MaxSp)) / MaxSp) + "px";
                        span.style.border = "2px solid black";
                        span.style.borderRadius = "10px";

                        //色塊Span顏色設定
                        span.style.backgroundColor = "rgb(" + RandColor[0] + "," + RandColor[1] + "," + RandColor[2] + ")";

                        if (score <= 14) {
                            span.style.filter = "brightness(1.4)";
                            ScoreName.innerHTML = "超Happy的超能先生";

                            ScoreName.style.color = "blue";

                            if(BgmNum != "01"){
                                BGM.src = "./Music/01.mp3";
                                BGM.play();
                                BgmNum = "01";
                                console.log(BGM.src);
                            }
                            
                            if(score >= 7){
                                Img.style.backgroundImage = "url('./Images/02.jpg')"
                                BGM.play();

                                ScoreName.style.color = "yellow";
                            }
                        }
                        else if (score <= 21 && score > 14) {
                            span.style.filter = "brightness(1.35)";
                            Img.style.backgroundImage = "url('./Images/03.jpg')"
                            ScoreName.innerHTML = "壓力山大的超能先生";

                            ScoreName.style.color = "orange";

                            if(BgmNum != "02"){
                                BGM.src = "./Music/02.mp3";
                                BGM.play();
                                BgmNum = "02";
                            }

                        }
                        else if (score <= 28 && score > 21) {
                            span.style.filter = "brightness(1.25)";
                            container.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                            Img.style.backgroundImage = "url('./Images/04.jpg')"
                            ScoreName.innerHTML = "已經黑化的超能先生";

                            ScoreName.style.color = "black";

                            if(BgmNum != "03"){
                                BGM.src = "./Music/03.mp3";
                                BGM.play();
                                BgmNum = "03";
                            }
                        }

                        else if (score <= 33 && score > 28) {
                            span.style.filter = "brightness(1.2)";
                            container.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
                            Img.style.backgroundImage = "url('./Images/05.jpg')"

                            ScoreName.innerHTML = "扭曲變形的超能先生";
                            ScoreName.style.color = "red";

                            if(BgmNum != "04"){
                                BGM.src = "./Music/04.mp3";
                                BGM.play();
                                BgmNum = "04";
                            }
                        }

                        else if (score <= 38 && score > 33){
                            span.style.filter = "brightness(1.1)";
                            container.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                            Img.style.backgroundImage = "url('./Images/06.jpg')"
                            ScoreName.innerHTML = "Kill me.";
                            ScoreName.style.color = "red";

                            if(BgmNum != "05"){
                                BGM.src = "./Music/05.mp3";
                                BGM.play();
                                BgmNum = "05";
                            }
                        }

                        else{
                            span.style.filter = "brightness(1.1)";
                            container.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                            Img.style.backgroundImage = "url('./Images/07.jpg')"
                            ScoreName.innerHTML = "DEEP ♂ DARK ♂ FANTASY";
                            ScoreName.style.color = "red";

                            if(BgmNum != "06"){
                                BGM.src = "./Music/06.mp3";
                                BGM.play();
                                BgmNum = "06";
                            }
                        }


                        //標記答案span
                        span.dataset.key = "AnsColor";

                        span.style.margin = "5px";
                        span.style.cursor = "pointer";

                        //指定把色塊span生成在Bgcolor基底內
                        Bgcolor.appendChild(span);


                    }
                    //印出其他的span色塊
                    else {
                        span.style.display = "block";
                        span.style.width = ((470 - (10 * MaxSp)) / MaxSp) + "px";
                        span.style.height = ((470 - (10 * MaxSp)) / MaxSp) + "px";
                        span.style.border = "2px solid black";
                        span.style.borderRadius = "10px";
                        span.style.backgroundColor = "rgb(" + RandColor[0] + "," + RandColor[1] + "," + RandColor[2] + ")";
                        span.style.margin = "5px";
                        span.style.cursor = "pointer";
                        Bgcolor.appendChild(span);
                    }
                }

                //再度呼叫自身函式、並將最新難度等級lv傳入
                CreatSpan(lv, ClockVideo);
            })
        }

        else {
            continue;
        }
    }
}




//正式運行，點擊Play後開始
StartBtn.addEventListener('click', function () {

    lv += 1;

    //設定測試秒數
    var Sec = 60;
    Time.innerHTML = Sec;

    //頭像圖片重置
    Img.style.backgroundImage = "url('./Images/01.jpg')";
    container.style.backgroundColor = "rgba(0, 0, 0, 0.3)";

    //二周目時隨機替換關卡背景
    if (Rct > 0) {
        let VideoNum = (getRandom(5) + 1)
        console.log(VideoNum);
        Video.src = "./Videos/BgVideo" + VideoNum + ".mp4";
    }

    //重置分數
    Score.innerHTML = "得分: " + score;

    //BGM重置
    BGM.src = "./Music/01.mp3";
    BGM.play();
    BgmNum = "01";

    //重置稱號顏色
    ScoreName.style.color = "yellow";

    //設定秒數倒數函式
    function CountDown() {

        //暫停時Sec不扣減，並取得暫停前的最後秒數資料
        if (Pause == true) {

            Sec = Time.innerHTML;
        }

        else {
            Sec = Sec - 1;
            Time.innerHTML = Sec;

            if (Sec <= 10) {
                Time.style.color = "red";
            }
            else if (Sec <= 30) {
                Time.style.color = "orange";
            }

            //時間倒數完畢
            if (Sec == 0) {

                //清除倒數計時器與所有的關卡色塊
                clearTimeout(Clock);
                DelSpan();

                ScreenPause.style.display = "block";
                ScreenPause.style.backgroundColor = "rgb(25, 69, 94)";

                BackGame.style.display = "block";
                BackGame.style.marginTop = "3%";
                BackGame.innerHTML = "Restart";
                ScoreName.style.display = "block";

                //顯示所有Screen01的UI
                for (i = 0; i < Screen01.length; i++) {
                    Screen01[i].style.display = "flex";

                    //恢復Screen01的版型
                    container.style.flexDirection = "column";
                    header.style.width = "100%";
                    header.style.height = "20vh";
                    header.style.position = "relative";
                    main.style.width = "100%";
                    main.style.height = "60vh";
                    footer.style.display = "flex";
                }

                //消除所有Screen02的UI
                for (let i = 0; i < Screen02.length; i++) {
                    Screen02[i].style.display = "none";
                }

                //顯示評分
                EndText.innerHTML = "經鑑定，您是:";
                
                if (Rct == 1) {
                    ScoreName.innerHTML = "超Happy的超能先生" + " Lv" + score;
                }
                else {
                    ScoreName.innerHTML = ScoreName.innerHTML + " Lv" + score;
                }


                //初始化關卡難度與得分
                lv = 1;
                score = 1;

                //音樂暫停
                BGM.pause();
            }
        }

    }

    //倒數60秒計時器啟動
    var Clock = setInterval(CountDown, 1000);

    //點擊開始按鈕後隱藏Screen01的UI
    for (i = 0; i < Screen01.length; i++) {
        Screen01[i].style.display = "none";
    }

    //顯示所有Screen02的UI
    for (i = 0; i < Screen02.length; i++) {
        Screen02[i].style.display = "flex";
    }

    //顯示其餘Screen02的UI
    container.style.flexDirection = "row";
    header.style.width = "10%";
    header.style.height = "100vh";
    header.style.position = "absolute";
    main.style.width = "100%";
    main.style.height = "100vh";
    footer.style.display = "none";

    //先取得要變色的span
    var ChangeNum = getRandom((lv ** 2));

    //先印出第一關lv2
    for (i = 0; i < (lv ** 2); i++) {
        var span = document.createElement('span');

        //將符合隨機數字的span顏色轉淡並賦予class
        if (i == ChangeNum) {
            span.style.display = "block";
            span.style.width = ((480 - (15 * lv)) / lv) + "px";
            span.style.height = ((480 - (15 * lv)) / lv) + "px";
            span.style.border = "2px solid black";
            span.style.borderRadius = "15px";
            span.style.backgroundColor = "lightgreen";

            //標記答案span
            span.dataset.key = "AnsColor";

            span.style.margin = "5px";
            span.style.cursor = "pointer";
            Bgcolor.appendChild(span);
        }

        //印出其他的span
        else {
            span.style.display = "block";
            span.style.width = ((480 - (15 * lv)) / lv) + "px";
            span.style.height = ((480 - (15 * lv)) / lv) + "px";
            span.style.border = "2px solid black";
            span.style.borderRadius = "15px";
            span.style.backgroundColor = "green";
            span.style.margin = "5px";
            span.style.cursor = "pointer";
            Bgcolor.appendChild(span);
        }

    }

    //強制將Span色塊平均置中於上層容器bgcolor
    Bgcolor.style.justifyContent = "space-between";
    Bgcolor.style.alignContent = "center";

    //色弱測試遊戲開始，動態生成色塊與刪除
    CreatSpan(lv);
});



