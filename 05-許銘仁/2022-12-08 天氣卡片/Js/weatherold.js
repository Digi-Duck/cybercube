//右邊選單
const N = document.querySelector(".N");
const C = document.querySelector(".C");
const S = document.querySelector(".S");
const E = document.querySelector(".E");
const O = document.querySelector(".O");

//其他
const Header = document.querySelector("header");
const Main = document.querySelector("main");
const Container = document.querySelector(".container");
const Footer = document.querySelector("footer");
const WeatherCard = document.querySelector(".Card");
const CardImg = document.querySelector(".media>div");
const Svg = document.querySelector("svg");
const Path = document.querySelector("svg>path");
const Place = document.querySelector(".place");
const Clock = document.querySelector("footer>div:nth-child(3)>p");
const BGM = document.querySelector("audio");
const TopText = document.querySelector("header>div:nth-child(2)");
const Submitbtn = document.querySelector(".Submitbtn");
const NewColor = "orange"; //黃色 "rgb(248, 217, 76)"
const ReColor = "green";



//各縣市區塊
const NP = document.querySelectorAll(".NP")
const NewTaipei = document.querySelector("#NewTaipei");
const Taipei = document.querySelector("#Taipei");
const Keelung = document.querySelector("#Keelung");
const TaoyuanCity = document.querySelector("#TaoyuanCity");
const HsinchuCounty = document.querySelector("#HsinchuCounty");
const HsinchuCity = document.querySelector("#HsinchuCity");
const YilanCounty = document.querySelector("#YilanCounty");

const CP = document.querySelectorAll(".CP")
const Taichung = document.querySelector("#TaichungCity");
const ChanghuaCounty = document.querySelector("#ChanghuaCounty");
const MiaoliCounty = document.querySelector("#MiaoliCounty");
const Yunlin = document.querySelector("#YunlinCounty");
const NantouCounty = document.querySelector("#NantouCounty");

const SP = document.querySelectorAll(".SP");
const KaohsiungCity = document.querySelector("#KaohsiungCity");
const TainanCity = document.querySelector("#TainanCity");
const ChiayiCounty = document.querySelector("#ChiayiCounty");
const ChiayiCity = document.querySelector("#ChiayiCity");
const PingtungCounty = document.querySelector("#PingtungCounty");

const EP = document.querySelectorAll(".EP");
const Hualien = document.querySelector("#HualienCounty");
const Taitung = document.querySelector("#TaitungCounty");

const OP = document.querySelectorAll(".OP");
const PenghuCounty = document.querySelector("#PenghuCounty");
const GuishanIsland = document.querySelector("#GuishanIsland")
const KinmenCounty = document.querySelector("#KinmenCounty")
const LienchiangCounty = document.querySelector("#LienchiangCounty")

//全台縣市陣列
const Taiwan = [NP, CP, SP, EP, OP];

//縣市預覽
const Preview = document.querySelector(".preview");
const Previewtext = document.querySelector(".previewtext");
const PreviewDown = document.querySelector("footer>div:nth-child(2)>p");

//是否在預覽狀態，0=是，1=否
var Pct = 0;

//當前Focus的縣市、時間
var P = GuishanIsland;
var W = GuishanIsland;
var Time = new Date();

// 紀錄Svg初始位置資訊與位移開關
const SvgRe = Svg.style;
var Move = 0;

// 紀錄返回區域原始範圍設定
const CardRe = WeatherCard.style;
const PathRe = Path;

//右邊選單功能
const AllPlace = [N, C, S, E, O];
for (let i = 0; i < 5; i++) {

    //預覽區域變色功能
    AllPlace[i].addEventListener('mouseover', function () {

        if (AllPlace[i] == N) {
            for (let j = 0; j < Taiwan[0].length; j++) {
                if (Taiwan[0][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[0][j].style.fill = "rgb(248, 217, 76)";
                }
            }
        }

        else if (AllPlace[i] == C) {
            for (let j = 0; j < Taiwan[1].length; j++) {
                if (Taiwan[1][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[1][j].style.fill = "rgb(248, 217, 76)";
                }
            }
        }

        else if (AllPlace[i] == S) {
            for (let j = 0; j < Taiwan[2].length; j++) {
                if (Taiwan[2][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[2][j].style.fill = "rgb(248, 217, 76)";
                }
            }
        }

        else if (AllPlace[i] == E) {
            for (let j = 0; j < Taiwan[3].length; j++) {
                if (Taiwan[3][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[3][j].style.fill = "rgb(248, 217, 76)";
                }
            }
        }

        else if (AllPlace[i] == O) {

            for (let j = 0; j < Taiwan[4].length; j++) {
                Taiwan[4][j].style.fill = "rgb(248, 217, 76)";

                if (Taiwan[4][j].children.length > 0) {

                    // console.log(Taiwan[4][j].children);

                    for (let k = 0; k < Taiwan[4][j].children.length; k++) {
                        if (Taiwan[4][j] == P && Pct == 1) {
                            continue;
                        }
                        else {
                            Taiwan[4][j].children[k].style.fill = "rgb(248, 217, 76)";
                        }
                    }
                }

            }
        }
    })

    AllPlace[i].addEventListener('mouseout', function () {

        if (AllPlace[i] == N) {
            for (let j = 0; j < Taiwan[0].length; j++) {
                if (Taiwan[0][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[0][j].style.fill = ReColor;
                }
            }
        }

        else if (AllPlace[i] == C) {
            for (let j = 0; j < Taiwan[1].length; j++) {
                if (Taiwan[1][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[1][j].style.fill = ReColor;
                }
            }
        }

        else if (AllPlace[i] == S) {
            for (let j = 0; j < Taiwan[2].length; j++) {
                if (Taiwan[2][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[2][j].style.fill = ReColor;
                }

            }
        }

        else if (AllPlace[i] == E) {
            for (let j = 0; j < Taiwan[3].length; j++) {
                if (Taiwan[3][j] == P && Pct == 1) {
                    continue;
                }
                else {
                    Taiwan[3][j].style.fill = ReColor;
                }

            }
        }

        else if (AllPlace[i] == O) {

            // console.log(Taiwan[4]);

            for (let j = 0; j < Taiwan[4].length; j++) {
                Taiwan[4][j].style.fill = ReColor;

                if (Taiwan[4][j].children.length > 0) {

                    // console.log(Taiwan[4][j].children);

                    for (let k = 0; k < Taiwan[4][j].children.length; k++) {

                        //若選擇區域等於現在正在看的區域則不要將顏色變回來
                        if (Taiwan[4][j] == P && Pct == 1) {
                            continue;
                        }
                        else {
                            Taiwan[4][j].children[k].style.fill = ReColor;
                        }

                    }
                }

            }
        }
    })

};

//上方搜尋功能
Submitbtn.addEventListener("click", function () {

    let where = document.querySelector("header>div:nth-child(3)>input");
    let wct = 0;

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < Taiwan[i].length; j++) {
            if (Taiwan[i][j].dataset.name == where.value) {

                console.log(Taiwan[i][j].id);

                where.setAttribute("placeholder","請輸入縣市...");

                //區塊恢復原位
                BackColor(W);
                BackColor(P);
                where.value = "";

                W = Taiwan[i][j];
                Card(W);
                Move = 1;
                wct = 1;
            }
        }
    }
    //若全部地名核對完仍查無資料則顯示錯誤訊息
    if (wct == 0) {
        where.value = "";
        where.setAttribute("placeholder","查無此地，請重新輸入!");
    }
});

//全部縣市註冊滑鼠偵測事件、更新預覽訊息
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < Taiwan[i].length; j++) {


        Taiwan[i][j].addEventListener('mouseover', function () {
            if (Pct == 0) {
                Preview.style.display = "flex";
                Previewtext.style.display = "flex";
                Previewtext.innerHTML = Taiwan[i][j].dataset.name;
            }
            else {
                PreviewDown.style.display = "flex";
                PreviewDown.innerHTML = Taiwan[i][j].dataset.name;
            }
        })


        Taiwan[i][j].addEventListener('mouseout', function () {
            Preview.style.display = "none";
            Previewtext.style.display = "none";
        })
    }
};

//更新時鐘
setInterval(NewTime, 1000);

function NewTime() {
    Time = Date();
    Clock.innerHTML = Time;
};

//返回按鈕
Main.addEventListener("dblclick", function () {

    //隱藏下方縣市預覽訊息
    PreviewDown.style.display = "none";

    //恢復上方標題訊息
    TopText.style.fontSize = "2rem";
    TopText.style.fontWeight = "bold";
    TopText.innerHTML = "台灣即時天氣地圖";

    if (Move == 1) {

        Svg.style = SvgRe;
        Svg.style.transition = "all 0.5s ease";

        //區塊恢復原位
        BackColor(W);
        BackColor(P);

        CardImg.src = "";

        WeatherCard.style.left = "30%";
        WeatherCard.style.opacity = "0";
        WeatherCard.style.zIndex = "-1";
        WeatherCard.style.transition = "all 0.5s ease";
        Container.style.backgroundColor = "rgba(0, 0, 0, 0)";

        Move = 0;
        Pct = 0;
    }
});

//呼叫卡片出現，傳入當前Focus位置P
function Card(P) {

    //區塊恢復原位
    BackColor(W);
    BackColor(P);

    //縣市預覽消失
    Preview.style.display = "none";
    Previewtext.style.display = "none";
    Pct = 1;

    //更新上方標題訊息
    TopText.style.fontSize = "2.5rem";
    TopText.style.fontWeight = "bolder";
    TopText.innerHTML = "點擊任意位置兩下返回";

    // 若Focus的地區有複數path(離島)則將其全體變色、區塊浮起
    // console.log(P.children[0]);
    if (P.children.length > 0) {
        for (let i = 0; i < P.children.length; i++) {
            P.children[i].style.transform = "translate(-5px, -5px)";
            P.children[i].style.transition = "all 0.1s ease";
            P.children[i].style.fill = NewColor;
        }
    }

    else {
        P.style.transform = "translate(-5px, -5px)";
        P.style.transition = "all 0.1s ease";
        P.style.fill = NewColor;
    }


    if (P.className.baseVal == "EP") {
        WeatherCard.style.left = "45%";
    }

    else {
        WeatherCard.style.left = "10%";
    }

    WeatherCard.style.opacity = "1";
    WeatherCard.style.zIndex = "1";
    WeatherCard.style.transition = "all 0.5s ease";
    Container.style.backgroundColor = "rgba(0, 0, 0, 0.2)";

    //更新卡片資料
    DataCard(P);

    //回傳當前Focus的縣市出去給返回按鈕使用
    return P;

}



//使用的天氣API
// https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-122C23F2-11B8-4BED-A3B4-633A5F5531DA

//m抓取天氣API
var Myjson = fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-122C23F2-11B8-4BED-A3B4-633A5F5531DA").then(function (response) {

    return response.json();

})


// 將天氣資料更新到卡片上
function DataCard(P) {

    Myjson.then(function (w) {

        //印出自訂的縣市名屬性資料
        // console.log(P.dataset.name);

        //需要再透過then方法才可以把json解析完(才能使用w)，直接用Myjson會多一層<value>導致無法存取物件資料
        // console.log(w);

        // 核對Json內的名子與當前的縣市名，一致的話進行資料更改
        for (let i = 0; i < w.records.location.length; i++) {
            if (P.dataset.name == w.records.location[i].locationName) {

                // console.log(w.records.location[i].locationName);

                let City = document.querySelector(".media>div:nth-child(2)>h1");
                let WX = document.querySelector(".media>div:nth-child(2)>p");
                let Temp = document.querySelector(".data>div:nth-child(1)>p");
                let PoP = document.querySelector(".data>div:nth-child(2)>p");
                let CI = document.querySelector(".data>div:nth-child(3)>p");


                if (w.records.location[i].weatherElement[1].time[0].parameter.parameterName >= 51) {

                    CardImg.style.backgroundImage = "url('../Images/rain.gif')";
                }

                else if (w.records.location[i].weatherElement[1].time[0].parameter.parameterName >= 31 && w.records.location[i].weatherElement[1].time[0].parameter.parameterName <= 51) {

                    CardImg.style.backgroundImage = "url('../Images/cloud.png')"
                }

                else {

                    CardImg.style.backgroundImage = "url('../Images/Sun.gif')";
                }


                City.innerHTML = w.records.location[i].locationName;

                WX.innerHTML = w.records.location[i].weatherElement[0].time[0].parameter.parameterName;

                Temp.innerHTML = "&emsp;" + w.records.location[i].weatherElement[2].time[0].parameter.parameterName + "~" + w.records.location[11].weatherElement[4].time[0].parameter.parameterName + "°C";

                PoP.innerHTML = "&emsp;" + w.records.location[i].weatherElement[1].time[0].parameter.parameterName + "%";

                CI.innerHTML = "&emsp;" + w.records.location[i].weatherElement[3].time[0].parameter.parameterName;


            }
        }

        // 調出縣市名
        // console.log(w.records.location[11].locationName)

        // 調出最低溫(weatherElement陣列存放各種資料，最後是time陣列)
        // console.log(w.records.location[11].weatherElement[2].time[2].parameter.parameterName)

        // 調出最高溫(最後是time陣列)
        // console.log(w.records.location[11].weatherElement[4].time[2].parameter.parameterName)

        // 調出降雨機率(最後是time陣列)
        // console.log(w.records.location[11].weatherElement[1].time[0].parameter)

        // 調出舒適度(最後是time陣列)
        // console.log(w.records.location[11].weatherElement[3].time[2].parameter.parameterName)

    });
}

//地區顏色復原函式
function BackColor(P) {

    //區塊恢復原位
    P.style.transform = "translate(0px, 0px)";
    P.style.transition = "all 0.3s ease";

    if (P.children.length > 0) {
        for (let i = 0; i < P.children.length; i++) {
            P.children[i].style.fill = ReColor;

        }
    }
    else {
        P.style.fill = ReColor;
    }
}


//北部區域
NewTaipei.addEventListener("click", function () {

    BackColor(P);

    P = Card(this);

    Svg.style.top = "50%";
    Svg.style.left = "10%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

Taipei.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "80%";
    Svg.style.left = "0%";
    Svg.style.transform = "scale(2)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

Keelung.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "80%";
    Svg.style.left = "-5%";
    Svg.style.transform = "scale(2)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

TaoyuanCity.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "60%";
    Svg.style.left = "10%";
    Svg.style.transform = "scale(1.5)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});
HsinchuCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "50%";
    Svg.style.left = "10%";
    Svg.style.transform = "scale(1.5)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});
HsinchuCity.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "70%";
    Svg.style.left = "15%";
    Svg.style.transform = "scale(2)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

YilanCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "40%";
    Svg.style.left = "10%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});


// 中部區域
Taichung.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "30%";
    Svg.style.left = "20%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

ChanghuaCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "20%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

MiaoliCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "40%";
    Svg.style.left = "20%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

Yunlin.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "10%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

NantouCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "10%";
    Svg.style.left = "20%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

// 南部區域

KaohsiungCity.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "-15%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

TainanCity.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "-10%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

ChiayiCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "0%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

ChiayiCity.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "0%";
    Svg.style.left = "25%";
    Svg.style.transform = "scale(2)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

PingtungCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "-40%";
    Svg.style.left = "20%";
    Svg.style.transform = "scale(1.7)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});


// 東部區域
Hualien.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "10%";
    Svg.style.left = "-35%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;

});

Taitung.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "-20%";
    Svg.style.left = "-35%";
    Svg.style.transform = "scale(1.3)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;
});

//離島區域
PenghuCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "10%";
    Svg.style.left = "40%";
    Svg.style.transform = "scale(1.7)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;

})

KinmenCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "45%";
    Svg.style.left = "40%";
    Svg.style.transform = "scale(1.7)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;

})

LienchiangCounty.addEventListener("click", function () {

    BackColor(P);
    P = Card(this);

    Svg.style.top = "80%";
    Svg.style.left = "50%";
    Svg.style.transform = "scale(2)";
    Svg.style.transition = "all 0.5s ease";
    Move = 1;

})




