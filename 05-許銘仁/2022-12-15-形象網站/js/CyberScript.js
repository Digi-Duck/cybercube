const Body = document.querySelector("Body");
const BodyWidth = document.body.clientWidth;
const NavTop = document.querySelector(".NavTop");
const Logo = document.querySelector(".Logo");
const TopVideo = document.querySelector("#TopVideo");
const SalesVideo = document.querySelectorAll(".content3 video");
const barVideo = document.querySelector(".content4 video");
const MuteBtn = document.querySelector(".MuteButton");
const ListOpen = document.getElementById("LeftList");
const ListClose = document.getElementById("LeftList");
const BlackScreen = document.querySelector(".BlackScreen");
const C2RightImages = document.querySelector(".C2RightImages");
const C2LeftText = document.querySelector(".C2LeftText");
const MainText01 = document.querySelector(".MainText01");
const MainText01H1 = document.querySelector(".MainText01>h1");
const MainText02 = document.querySelector(".MainText02");
const MainText02H1 = document.querySelector(".MainText02>h1");
const C2TextArea = document.querySelector(".C2TextArea");
const C2Media = document.querySelector(".C2Media");
const C2MediaBtn = document.querySelector(".change-media-btn");
const C2sImg = document.querySelectorAll(".C2sImg");
const C2sVideo = document.querySelectorAll(".C2sDiv>video");
const Dimg = document.querySelector(".Dimg");
const Dvid = document.querySelector(".Dvid");
const ImgLarge = document.querySelector(".ImgLarge");
const VideoLarge = document.querySelector(".VideoLarge");
const MessageList = document.querySelector(".messagelist");

const ShinySheep = document.querySelector(".MainText03 img");
var ShinySheepOpen = false;

//產品放大(套用ImgLarge層)
const ProductMedia = document.querySelectorAll(".swiper-slide>:first-child");

//上一個媒體的暫時路徑紀錄器
var Image_prev = "";

//上一個影片播放時間紀錄器
var DvidCurTime = 0;

// const SaleBgVideo = document.querySelector(".salecontainer>video");
// const ProductImg = document.querySelector(".productmedio>img");
// const ProductVideo = document.querySelector(".productmedio>video");

//Logo閃爍開關
var LogoShiny = false;

//大圖展示開關
var ImgLargeOpen = false;

//產品放大開關
var ProductMediaOpen = false;

//手機放大開關
var MessageOpen = false;

//隨機數為0~x
function getRandom(x) {
    return Math.floor(Math.random() * x);
};

//清除backgroundImage的各種脫逸字元，否則抓不到url
function CIurl(x) {
    CIstyle = x.currentStyle || window.getComputedStyle(x, false);
    // console.log(CIurl);
    return CIstyle.backgroundImage.slice(4, -1).replace(/"/g, "");
}

function OpenLeftList() {
    //Js的響應式動態變化側欄寬度，用document.body.clientWidth偵測螢幕寬度
    if (document.body.clientWidth < 768) {
        ListOpen.style.cssText = "opacity: 1;width: 100%;transition: width 0.5s;z-index: 999;";
    }
    else if (document.body.clientWidth < 1280) {
        ListOpen.style.cssText = "opacity: 1;width: 30%;  transition: width 0.5s;z-index: 999;";
    }
    else {
        ListOpen.style.cssText = "opacity: 1; width: 20%; transition: width 0.5s; z-index: 999;";
    }

    BlackScreen.style = "opacity: 1; background-color: rgb(0, 0, 0, 0.8); position: fixed;  transition: 0.5s";
}

function CloseLeftList() {

    ListClose.style.cssText = "opacity: 0; width: 0%; transition: all 0.5s; z-index: 0;";

    BlackScreen.style = "opacity: 0; background-color: none; position: none; z-index: 0; transition: 0.5s";

    //關閉放大圖片
    ImgLarge.style.opacity = "0";
    ImgLarge.style.zIndex = "0";
    ImgLarge.style.transition = "0.5s";
    ImgLarge.style.cursor = "default";
    ImgLarge.style.display = "none";

    //關閉放大影片
    VideoLarge.style.opacity = "0";
    VideoLarge.style.zIndex = "0";
    VideoLarge.style.transition = "0.5s";
    VideoLarge.style.cursor = "default";
    VideoLarge.pause();
    VideoLarge.style.display = "none";

    //展示區的影片續播(只有上一次播的路徑相同時才續播)
    if (Image_prev == Dvid.src) {
        console.log(Math.floor(VideoLarge.currentTime));
        Dvid.currentTime = Math.floor(VideoLarge.currentTime);
        Dvid.play();
    }

    //關閉手機面板
    MessageList.style.opacity = "0";
    MessageList.style.zIndex = "0";
    MessageList.style.transition = "0.5s";
    MessageList.style.cursor = "default";

    NavTop.style.opacity = "1";
    NavTop.style.zIndex = "10";
    NavTop.style.transition = "0.5s";

    //關閉大圖展示開關
    ImgLargeOpen = false;

    //關閉手機展示開關
    MessageOpen = false;

}

//點擊側選單外即可關閉
BlackScreen.addEventListener('click', CloseLeftList);

//NavTop的Logo循環閃光效果
Logo.addEventListener('click', function () {
    if (LogoShiny == false) {
        Logo.style.animation = "shiny 3s infinite";
        LogoShiny = true;
    }
    else {
        Logo.style.animation = "";
        LogoShiny = false;
    }

})

function MuteButton() {

    let MBImg = document.querySelector(".MuteImage");

    if (TopVideo.muted === true) {
        TopVideo.muted = false;
        MBImg.src = "./OtherImage/volume-xmark-muted.svg";
    }

    else {
        TopVideo.muted = true;
        MBImg.src = "./OtherImage/volume-high-unmuted.svg";
    }

}

//靜音按鈕滑鼠移入移出與點擊時的變化效果

MuteBtn.addEventListener('mouseover', function () {
    MuteBtn.style.backgroundColor = "rgba(180, 199, 228, 0.6)";
    MuteBtn.style.cursor = "pointer";
})
MuteBtn.addEventListener('mouseout', function () {
    MuteBtn.style.backgroundColor = "rgba(180, 199, 228, 0.2)";
})

MuteBtn.addEventListener('mousedown', function () {
    MuteBtn.style.backgroundColor = "rgba(180, 199, 228, 0.6)";
    MuteBtn.style.transition = "scale: 0.7";
    MuteBtn.style.cursor = "pointer";
})
MuteBtn.addEventListener('mouseup', function () {
    MuteBtn.style.backgroundColor = "rgba(180, 199, 228, 0.6)";
    MuteBtn.style.transition = "scale: 1";
    MuteBtn.style.cursor = "pointer";
})


//設定函式觸發間隔模板，delay參數帶入的是ms所以輸入1000才是1s
function debounce(func, delay) {
    // timeout 初始值
    let timeout = null;
    return function () {
        let context = this;  // 指向 myDebounce 這個 input
        let args = arguments;  // KeyboardEvent
        clearTimeout(timeout)

        timeout = setTimeout(function () {
            func.apply(context, args)
        }, delay)
    }
}

//設定一個隨時監聽window的scroll的事件(套用上間隔計時器，50 or 0即時)
window.addEventListener('scroll', debounce(FocusOnDisplay, 0));

//各種Y滾軸響應式變化
function FocusOnDisplay() {

    //顯示目前Y軸值
    console.log("高度:" + window.scrollY);
    //顯示目前視窗寬度，用於判斷該用哪一個響應式JS
    console.log("寬度:" + document.body.clientWidth);

    //響應式動畫

    //NavTop顯示&隱藏切換、Video播放、暫停(當ImgLarge未開啟的情況下)
    // 在吧檯時將Nav隱藏
    if (ImgLargeOpen == false) {
        if (window.scrollY >= 2000 && window.scrollY <= 2100) {
            NavTop.style.zIndex = "-1";
            NavTop.style.opacity = "0";
        }
        else if (window.scrollY > 90 && window.scrollY <= 6200) {
            NavTop.style.zIndex = "10";
            NavTop.style.opacity = "1";
            NavTop.style.transition = "0.3s";

        }
        else {
            NavTop.style.zIndex = "-1";
            NavTop.style.opacity = "0";
        }

        //音量鈕顯示&隱藏、TopVideo播放、暫停
        if (window.scrollY > 90 && window.scrollY <= 900) {
            MuteBtn.style.position = "fixed";
            MuteBtn.style.top = "10%";
        }
        else if (window.scrollY > 900) {
            MuteBtn.style.position = "absolute";
            MuteBtn.style.top = "2%";
            TopVideo.pause();
        }
        else {
            MuteBtn.style.position = "absolute";
            MuteBtn.style.top = "2%";
            TopVideo.play();
        }

        //Content4吧檯 Video背景播放、暫停
        if (window.scrollY > 5300 && window.scrollY <= 5399) {
            // setTimeout("barVideo.style.filter='brightness(100%)'", 1000);
            //滑入時做出像開關燈短暫閃爍的效果
            // barVideo.style.animation ="SwitchLight 1s";
            barVideo.style.opacity = "0.2";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgba(103, 241, 144, 0.3)";
            barVideo.style.transition = "0.5s";
            barVideo.play();
        }
        else if (window.scrollY > 5400 && window.scrollY <= 5549) {
            barVideo.style.opacity = "0.3";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgba(103, 241, 144, 0.4)";
            barVideo.style.transition = "0.5s";
        }
        else if (window.scrollY > 5550 && window.scrollY <= 5649) {
            barVideo.style.opacity = "0.4";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgba(103, 241, 144, 0.5)";
            barVideo.style.transition = "0.5s";
        }
        else if (window.scrollY > 5650 && window.scrollY <= 5899) {
            barVideo.style.opacity = "0.7";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgba(103, 241, 144, 0.7)";
            barVideo.style.transition = "0.5s";
        }
        else if (window.scrollY > 5900 && window.scrollY <= 6099) {
            barVideo.style.opacity = "0.8";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgba(103, 241, 144, 0.7)";
            barVideo.style.transition = "0.5s";
        }
        else if (window.scrollY > 6100) {
            barVideo.style.opacity = "1";
            barVideo.style.boxShadow = "0px 0px 100px -35px rgb(103, 241, 144)";
            barVideo.style.transition = "0.5s";
            barVideo.play();
        }
        else {
            barVideo.pause();
            // barVideo.style.filter="brightness(0%)";
            barVideo.style.opacity = "0";
            barVideo.style.transition = "1s";
        }

    }

    //Content2的看板與過場文字
    if (BodyWidth >= 1300) {
        if (window.scrollY > 1500 & window.scrollY < 2800) {

            C2RightImages.style = "right: 3vw; transition: 0.5s ease;"
            C2LeftText.style = "left: 3vw; transition: 0.5s ease;"
        }
        else {
            C2RightImages.style = "right: -50%; transition: 0.5s ease;"
            C2LeftText.style = "left: -50%; transition: 0.5s ease;"

            //停止播放展示區的影片並重置時間
            Dvid.pause();
            Dvid.currentTime = "0";

        }
    }

    else if (BodyWidth >= 768 & BodyWidth < 1300) {
        if (window.scrollY > 700 & window.scrollY < 1800) {

            C2RightImages.style = "right: 3vw; transition: 0.5s ease;"
            C2LeftText.style = "left: 3vw; transition: 0.5s ease;"
        }
        else {
            C2RightImages.style = "right: -50%; transition: 0.5s ease;"
            C2LeftText.style = "left: -50%; transition: 0.5s ease;"
        }
    }

    else if (BodyWidth > 500 & BodyWidth < 768) {
        if (window.scrollY > 200 & window.scrollY < 800) {

            C2RightImages.style = "right: 3vw; transition: 0.5s ease;"
            C2LeftText.style = "left: 3vw; transition: 0.5s ease;"
        }
        else {
            C2RightImages.style = "right: -50%; transition: 0.5s ease;"
            C2LeftText.style = "left: -50%; transition: 0.5s ease;"

        }
    }

    //過場文字浮動效果
    if (BodyWidth >= 1300) {
        if (window.scrollY <= 295) {
            MainText01H1.style.fontSize = "0px";
            MainText01H1.style.lineHeight = "40px";
            MainText01.style.opacity = "0.1";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else if (window.scrollY > 295 & window.scrollY <= 495) {
            MainText01H1.style.fontSize = "45px";
            MainText01.style.opacity = "0.4";
            MainText01H1.style.opacity = "0.4";
            MainText01H1.style.lineHeight = "70px";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else if (window.scrollY > 495 & window.scrollY <= 650) {
            MainText01H1.style.fontSize = "64px";
            MainText01.style.opacity = "0.7";
            MainText01H1.style.opacity = "0.7";
            MainText01H1.style.lineHeight = "110px";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }

        //MainText01H1完整顯示
        else if (window.scrollY > 650 & window.scrollY <= 1300) {
            MainText01H1.style.fontSize = "72px";
            MainText01.style.opacity = "1";
            MainText01H1.style.opacity = "1";
            MainText01H1.style.lineHeight = "140px";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else if (window.scrollY > 1300 & window.scrollY <= 1590) {
            MainText01H1.style.fontSize = "64px";
            MainText01.style.opacity = "0.7";
            MainText01H1.style.opacity = "0.7";
            MainText01H1.style.lineHeight = "110px";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else if (window.scrollY > 1590 & window.scrollY <= 1750) {
            MainText01H1.style.fontSize = "45px";
            MainText01.style.opacity = "0.4";
            MainText01H1.style.opacity = "0.4";
            MainText01H1.style.lineHeight = "70px";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else {
            MainText01H1.style.fontSize = "0px";
            MainText01.style.opacity = "0.1";
            MainText01H1.style.lineHeight = "40px";
            MainText01H1.style.opacity = "0";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }

        //ContentText02滾動浮出文字
        if (window.scrollY <= 500) {
            MainText02H1.style.fontSize = "0px";
            MainText02H1.style.lineHeight = "40px";
            MainText02.style.opacity = "0.1";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 2195 & window.scrollY <= 2500) {
            MainText02H1.style.fontSize = "45px";
            MainText02H1.style.opacity = "0.4";
            MainText02.style.opacity = "0.4";
            MainText02H1.style.lineHeight = "70px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 2500 & window.scrollY <= 2750) {
            MainText02H1.style.fontSize = "54px";
            MainText02H1.style.opacity = "0.5";
            MainText02.style.opacity = "0.5";
            MainText02H1.style.lineHeight = "90px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 2750 & window.scrollY <= 2900) {
            MainText02H1.style.fontSize = "64px";
            MainText02H1.style.opacity = "0.7";
            MainText02.style.opacity = "0.7";
            MainText02H1.style.lineHeight = "110px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }

        //MainText02H1完整顯示
        else if (window.scrollY > 2900 & window.scrollY <= 3200) {
            MainText02H1.style.fontSize = "72px";
            MainText02H1.style.opacity = "1";
            MainText02.style.opacity = "1";
            MainText02H1.style.lineHeight = "140px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 3200 & window.scrollY <= 3400) {
            MainText02H1.style.fontSize = "64px";
            MainText02H1.style.opacity = "0.7";
            MainText02.style.opacity = "0.7";
            MainText02H1.style.lineHeight = "110px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 3400 & window.scrollY <= 3800) {
            MainText02H1.style.fontSize = "45px";
            MainText02H1.style.opacity = "0.4";
            MainText02.style.opacity = "0.4";
            MainText02H1.style.lineHeight = "110px";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else {
            MainText02H1.style.fontSize = "0px";
            MainText02H1.style.lineHeight = "40px";
            MainText02H1.style.opacity = "0";
            MainText02.style.opacity = "0.1";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }

        //Sales商品區影片播放、暫停
        if (window.scrollY > 3200 & window.scrollY < 4900) {
            SalesVideo.forEach(element => {
                element.play();
                element.loop = "true";
                element.muted = "true";
            })
        }
        else {
            SalesVideo.forEach(element => {
                element.pause();
            })
        }

    }

    //過場文字浮動效果 4:3電腦螢幕
    else if (BodyWidth >= 768 & BodyWidth < 1300) {
        if (window.scrollY <= 100) {
            MainText01H1.style.fontSize = "0px";
            MainText01.style.opacity = "0.1";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else if (window.scrollY > 100 & window.scrollY <= 950) {
            MainText01H1.style.fontSize = "56px";
            MainText01H1.style.opacity = "1";
            MainText01.style.opacity = "1";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }
        else {
            MainText01H1.style.fontSize = "0px";
            MainText01H1.style.opacity = "0";
            MainText01.style.opacity = "0.1";
            MainText01H1.style.transition = "0.5s";
            MainText01.style.transition = "0.5s";
        }

        if (window.scrollY <= 1400) {
            MainText02H1.style.fontSize = "0px";
            MainText02.style.opacity = "0.1";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else if (window.scrollY > 1400 & window.scrollY <= 2400) {
            MainText02H1.style.fontSize = "56px";
            MainText02H1.style.opacity = "1";
            MainText02.style.opacity = "1";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
        else {
            MainText02H1.style.fontSize = "0px";
            MainText02H1.style.opacity = "0";
            MainText02.style.opacity = "0.1";
            MainText02H1.style.transition = "0.5s";
            MainText02.style.transition = "0.5s";
        }
    }
}


//C2切換媒體選單事件註冊
// C2sImg[0].addEventListener('click', function () {

//     let Imgurl = CIurl(C2sImg[0]);
//     Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: cover; background-repeat: no-repeat;";
// });

// C2sImg[1].addEventListener('click', function () {

//     let Imgurl = CIurl(C2sImg[1]);
//     Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: contain; background-repeat: no-repeat;";
// });

// C2sImg[2].addEventListener('click', function () {

//     let Imgurl = CIurl(C2sImg[2]);
//     Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: contain; background-repeat: no-repeat;";
// });

// C2sImg[3].addEventListener('click', function () {

//     let Imgurl = CIurl(C2sImg[3]);
//     Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: contain; background-repeat: no-repeat;";
// });

// C2sImg[4].addEventListener('click', function () {

//     let Imgurl = CIurl(C2sImg[4]);
//     Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: contain; background-repeat: no-repeat;";
// });

//C2下方選單列註冊點擊放大事件
C2sImg.forEach(element => {
    element.addEventListener('click', function () {
        if (this.dataset.type == 'img') {
            let Imgurl = CIurl(this);
            Dvid.style.display = "none";
            Dvid.pause();
            Dimg.style = "background-image: url(" + '"' + Imgurl + '"' + "); background-position: center; background-size: contain; background-repeat: no-repeat;";

            TextAreaDisplay(Imgurl);
        }
        else {
            let Imgurl = this.src;
            Dimg.style.display = "none";
            Dvid.style.display = "flex";

            Dvid.src = Imgurl;

            //說明文字
            TextAreaDisplay(Imgurl);
        }

    })
});

//媒體列的按鈕列切換功能
C2MediaBtn.addEventListener('click', function () {
    if (C2Media.dataset.type == "img") {
        this.style.animation = "changemedia 0.5s";
        C2Media.style.animation = "changemedia 0.5s";
        C2Media.dataset.type = "video";
        C2MediaBtn.innerHTML = "IMAGE";

        //偵測C2sImg元素是圖片還是影片，並自動轉換顯示槽位
        C2sImg.forEach(element => {
            if (element.dataset.type == "img") {
                element.style.display = "none";
            }
            else {
                element.style.display = "flex";
            }
        });
    }
    else {
        this.style.animation = "changemediaback 0.5s";
        C2Media.style.animation = "changemediaback 0.5s";
        C2Media.dataset.type = "img";
        C2MediaBtn.innerHTML = "VIDEO";
        C2sImg.forEach(element => {
            if (element.dataset.type == "vid") {
                element.style.display = "none";
            }
            else {
                element.style.display = "flex";
            }
        });

    }

    // C2Media.style.transition = "all 0.5s linear";

});


//第二層展示區點擊放大功能
function ChangeLargeImg(src) {

    //Large是各種元件的載具，可以是ImgLarge、VideoLarge或MessageList
    console.log(src);
    // console.log(src.substr(-15, 15));

    //若傳進來的src為"手機"元素(用name判斷)而不是src路徑，則顯示手機列表
    if (src.name == "messagelist") {
        MessageList.style.display = "block";

        var Large = MessageList;

        MessageOpen = true;
    }

    else {

        //若傳進來的src為圖片格式，則放大圖片
        if (src.slice(-4) == ".jpg" || src.slice(-4) == ".JPG" || src.slice(-4) == ".png" || src.slice(-4) == ".gif") {

            //若傳進來的src為特定圖片，進行影片切換
            if (src.substr(-15, 15) == "va11ha11acd.jpg") {
                VideoLarge.style.display = "block";
                src = "./Products/Snapinsta.app_192569298_1116109565542107_5826366802638381514_n.mp4";
                var Large = VideoLarge;
            }
            else if (src.substr(-8, 8) == "room.jpg") {
                VideoLarge.style.display = "block";
                src = "./Products/cyberroom.mp4";
                var Large = VideoLarge;
            }
            else {
                ImgLarge.style.display = "block";
                src = src;
                var Large = ImgLarge;
            }

        }

        //若傳進來的src為影片格式，則放大影片
        else if (src.slice(-4) == ".mp4") {
            VideoLarge.style.display = "block";
            src = src;
            var Large = VideoLarge;
        }
    }



    let r = getRandom(5);
    let AryColor = ["rgba(107, 220, 255, 0.3)", "rgba(255, 0, 0, 0.3)", "rgba(255, 0, 242, 0.3)", "rgba(251, 255, 22, 0.3)", "rgba(73, 241, 124, 0.3)"];

    BlackScreen.style = "opacity: 1; background-color: rgb(0, 0, 0, 0.9); position: fixed;  transition: 0.5s";

    // 定義播放器的各種設定(同時包含Img和Video)
    if (MessageOpen == true) {
        Large.src = src.src;
    }
    else {
        Large.src = src;
    }

    Large.style.opacity = "1";
    Large.style.zIndex = "9";
    Large.style.filter = "drop-shadow(0px 0px 30px " + AryColor[r] + ")";
    Large.style.borderColor = AryColor[r];
    Large.style.transition = "0.5s";

    //對NavTop隱藏
    NavTop.style.opacity = "0";
    NavTop.style.zIndex = "-10";
    NavTop.style.transition = "0.5s";

    //將放大的影片時間調整到預覽已播放的時間
    Large.currentTime = DvidCurTime;

    ImgLargeOpen = true;

    // ProductMediaOpen = false;
}

//註冊圖片放大事件
Dimg.addEventListener('click', function () {
    let Imgurl = CIurl(this);

    Image_prev = Imgurl;
    ChangeLargeImg(Imgurl);
})
//註冊影片放大事件
Dvid.addEventListener('click', function () {
    Dvid.pause();
    DvidCurTime = Math.floor(Dvid.currentTime);

    let Imgurl = this.src;
    Image_prev = Imgurl;
    ChangeLargeImg(Imgurl);

})

//說明文字區塊判別函式
function TextAreaDisplay(src_substr) {
    console.log(src_substr);
    if (src_substr.substr(-15, 11) == "TearsInRain") {
        C2TextArea.innerHTML = "<h1>《雨中淚水獨白》</h1><p>► 經典科幻作品《銀翼殺手》</p><p>「我曾見過你們人類難以置信的東西。戰艦在獵戶座的肩端之外燃燒。我看見了C光束在湯豪澤之門附近的黑暗中閃爍。所有這些時刻都將消逝在時間裡，就像雨中的淚水。死的時候到了。」</p><p>這段獨白被認為「也許是電影史上最動人的死前獨白」。</p><p>原書名:《仿生人會夢見電子羊嗎？》，出自美國的科幻小說作家菲利普·金德里德·狄克之手。</P>";
    }
    else if (src_substr.substr(-6, 2) == "EU") {
        C2TextArea.innerHTML = "<h1>《電馭叛客：邊緣行者》</h1><p>► CD Projekt RED《電馭叛客2077》之衍生作品</p><p>2020年6月26日，在網路直播節目《夜城快報》第一期中，公布了由Netflix與TRIGGER參與製作的動畫劇集《電馭叛客：邊緣行者》（Cyberpunk:Edgerunners）。</p><p>由今石洋之擔任監督、大塚雅彥擔任副監督、吉成曜和金子雄人擔任角色設計、若林廣海（日語：若林広海）擔任創意總監、山岡晃擔任配樂。該劇集共有10集，於2022年9月13日上線。</P>";
    }
    else if (src_substr.substr(-7, 3) == "VHA") {
        C2TextArea.innerHTML = "<h1><font size='6rem'>《VA-11 Hall-A：賽博龐克酒保行動》</font></h1><p>► 具備視覺小說與賽博朋克元素的調酒師模擬遊戲</p><p>遊戲流程是調配出客人想要的飲品，同時聆聽這些角色們訴說的故事與經歷。</P><p>遊戲中充滿各種別具特色的客人，這些角色被形容為「平凡的非英雄」。隨著遊戲時間的增加，玩家會開始熟悉並調製出每個客人喜好的飲品種類，與這些角色的關係也變得更加親密，後續劇情發展隨之產生變化。</p><p>本作設定為反烏托邦與賽博龐克背景的世界觀，畫面上受到古早PC-98平台遊戲啟發，畫風上也明顯受到日本動畫的影響，如押井守的動畫電影《攻殼機動隊》。</p>";
    }
    else if (src_substr.substr(-6, 2) == "TM") {
        C2TextArea.innerHTML = "<h1>《駭客任務系列》</h1><p>► 經典好萊塢科幻動作電影</p><p>主要包括四部作品。第一部電影《駭客任務》於1999年3月發行；票房大賣後，在2003年先後推出了兩部續集，《駭客任務2：重裝上陣》和《駭客任務3：最後戰役》。2021年推出第四部電影《駭客任務：復活》。</p><p>湯瑪斯·安德森表面上是個朝九晚五的電腦工程師，私下卻是個代碼為尼歐（Neo）的高超駭客。尼歐總覺得自己身處的世界存在難以言喻的不協調感，在他私下追查的結果，知道了這一切都跟被稱作「母體」（The Matrix）的神秘事物有關。</p>";
    }
    else if (src_substr.substr(-9, 5) == "SHELL") {
        C2TextArea.innerHTML = "<h1>《攻殼機動隊》</h1><p>► 日本漫畫家士郎正宗連載的漫畫作品</p><p>每一版本的《攻殼機動隊》都因出色的劇情、高質素的動畫和對哲學與社會學等深刻問題的探討而受到了普遍的好評，常被認為是日本動畫和賽博龐克的經典代表作。</p><p>2040年代的虛構日本城市新濱市，經過第三次和第四次世界大戰洗禮的近未來科技已可將人類除大腦外的所有身體器官用生化電子的義體代替，並將人類大腦改裝成與具有互聯網功能的電子腦。上層社會和有經濟條件的中產階級人類紛紛進行義體手術，加裝先進的電子腦，並用性能更高的人造義肢替換原有的身體器官——<a href='https://zh.m.wikipedia.org/zh-tw/%E8%B3%BD%E5%8D%9A%E6%A0%BC' target='_blank'>賽博格（生化人）</a>已然漸漸成為社會常態。 </p>";
    }
    
    else{
        C2TextArea.innerHTML = "";
    }

}

// 所有商品註冊點擊放大功能
for (let i = 0; i < ProductMedia.length; i++) {
    ProductMedia[i].addEventListener('click', function () {

        // 點擊商品卡片後捕捉新增進class的swiper-slide-active(當前聚焦商品)
        let ProductFocus = document.querySelector(".swiper-slide-active>:first-child");

        // 滑鼠點擊的目標需與當前聚焦商品卡片為同一張才會放大
        if (ProductMedia[i] == ProductFocus) {
            let Imgurl = ProductFocus.src;
            ChangeLargeImg(Imgurl);
        }
    });
}


//註冊放大版圖片、影片連續切換事件
ImgLarge.addEventListener('click', function () {
    LargeMediaChange(this);
})
ImgLarge.addEventListener('mouseover', function () {
    if (this.src.substr(-10, 10) == "070958.jpg" || this.src.substr(-15, 15) == "va11ha11acd.jpg") {
        this.style.cursor = "pointer";
    }
})
VideoLarge.addEventListener('click', function () {
    LargeMediaChange(this);
})
VideoLarge.addEventListener('mouseover', function () {
    if (this.src.substr(-10, 10) == "1514_n.mp4") {
        this.style.cursor = "pointer";
    }
})


//連續切換的媒體檔案路徑紀錄函式
function LargeMediaChange(media) {
    // console.log("原本"+media.src);
    // console.log("切片"+media.src.substr(-10, 10));
    if (media.src.substr(-10, 10) == "070958.jpg" || media.src.substr(-15, 15) == "va11ha11acd.jpg") {

        //關閉放大圖片
        ImgLarge.style.opacity = "0";
        ImgLarge.style.zIndex = "0";
        ImgLarge.style.transition = "0.1s linear";

        VideoLarge.style.display = "block";
        src = "./Products/Snapinsta.app_192569298_1116109565542107_5826366802638381514_n.mp4";
        var Large = VideoLarge;

        let r = getRandom(5);
        let AryColor = ["rgba(107, 220, 255, 0.3)", "rgba(255, 0, 0, 0.3)", "rgba(255, 0, 242, 0.3)", "rgba(251, 255, 22, 0.3)", "rgba(73, 241, 124, 0.3)"];

        // 定義播放器的各種設定(同時包含Img和Video)
        Large.style.opacity = "1";
        Large.style.zIndex = "9";
        Large.style.filter = "drop-shadow(0px 0px 30px " + AryColor[r] + ")";
        Large.src = src;
        Large.style.borderColor = AryColor[r];
        Large.style.transition = "0.1s linear";

        //上一個媒體的暫時路徑紀錄器
        Image_prev = media.src;
    }
    else if (media.src.substr(-10, 10) == "1514_n.mp4") {

        //關閉放大影片
        VideoLarge.style.opacity = "0";
        VideoLarge.style.zIndex = "0";
        VideoLarge.style.transition = "0.1s linear";
        VideoLarge.pause();

        ImgLarge.style.display = "block";
        src = Image_prev;
        var Large = ImgLarge;

        let r = getRandom(5);
        let AryColor = ["rgba(107, 220, 255, 0.3)", "rgba(255, 0, 0, 0.3)", "rgba(255, 0, 242, 0.3)", "rgba(251, 255, 22, 0.3)", "rgba(73, 241, 124, 0.3)"];

        // 定義播放器的各種設定(同時包含Img和Video)
        Large.style.opacity = "1";
        Large.style.zIndex = "9";
        Large.style.filter = "drop-shadow(0px 0px 30px " + AryColor[r] + ")";
        Large.src = src;
        Large.style.borderColor = AryColor[r];
        Large.style.transition = "0.1s linear";

        //上一個媒體的暫時路徑紀錄器
        Image_prev = media.src;
    }
}


// 點擊手機icon放大事件
MessageList.addEventListener('click', function () {

    if (MessageOpen == false) {
        ChangeLargeImg(this);
    }
})

ShinySheep.addEventListener('click', function () {
    if (ShinySheepOpen == false) {
        ShinySheep.style.animation = "shiny 1s infinite";
        ShinySheepOpen = true;
    }
    else {
        ShinySheep.style.animation = "none";
        ShinySheepOpen = false;
    }

})