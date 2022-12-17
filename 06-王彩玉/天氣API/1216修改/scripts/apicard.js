// 1. 圖片(下雨/晴天/陰天)2. 地區3. 最低/最高溫度4. 降雨機率5. 舒適度。圖片依照降雨機率51%以上 => 下雨50~31% => 陰天30%以下 => 晴天
//預設是全部按鈕被點擊
//用旗標做出預設按鈕被點擊的css狀態
// https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195 氣象資料
const btn_all = document.querySelector('.btn-all');//全部
const btn_n = document.querySelector('.btn-n');//北部
const btn_m = document.querySelector('.btn-m');//中部
const btn_w = document.querySelector('.btn-w');//南部
const btn_e = document.querySelector('.btn-e');//東部
const btn_i = document.querySelector('.btn-i');//外島
const time_first = document.querySelector('.time-first');
const time_second = document.querySelector('.time-second');
const time_third = document.querySelector('.time-third');
const showcard = document.querySelector('.showcard');
const timebox = document.querySelector('.time_box');
//以json縣市排名宣告陣列
// var county = ['CHY','TPH','CYI','HSH','HSC','TPE','TNN','ILN','MAL','YLH','HWA','TXG','TTT','TYC','NTO','KHH','KMN','IUH','KLU','PEH','CWH','LNN'];
var county = ['TPE', 'TPH', 'KLU', 'TYC', 'HSH', 'HSC', 'MAL', 'TXG', 'CWH', 'NTO', 'YLH', 'CHY', 'CYI', 'TNN', 'KHH', 'IUH', 'ILN', 'HWA', 'TTT', 'PEH', 'KMN', 'LNN'];
var countyselector = [];//縣市選擇器陣列
var countydata = [];//縣市資料陣列
var localend = [5, 1, 18, 13, 3, 4, 8, 11, 20, 14, 9, 0, 2, 6, 15, 17, 7, 10, 12, 19, 16, 21];//json排序地名，從北到南東部外島
//用陣列設定縣市選擇器
var place_name = [];
var first_time = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var second_time = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var third_time = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
var cho = 0;
var p = 0;
let view_img = 'sundy';
//依照0-1-2將整個物件存進去
for (let x = 0; x < county.length; x++) {
    countyselector.push(document.querySelector('.' + county[x]));
    countyselector[x].classList.add("move");
}
fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195').then(function (response) {
    //.then意思是 做完這件事情後，要做...的事情(接function)
    //如果直接console.log(response)會傳全部的網頁回來，但是我們應該只要拿到需要的資料就好
    return response.json();//轉成物件
    // 如果用response.text;那就會是文字
})//將回傳的資料下一步做處理，所以又.then去處理response.json
    .then(function (myJson) {

        for (let x = 0; x < county.length; x++) {

            let y = localend[x]; //排序過地名

            // v選擇時間
            for (let z = 0; z < 5; z++) {
                first_time[x].push(myJson.records.location[y].weatherElement[z].time[0]);
                second_time[x].push(myJson.records.location[y].weatherElement[z].time[1]);
                third_time[x].push(myJson.records.location[y].weatherElement[z].time[2]);
            }

            // 如果我的time為每個縣市的五個資料為前五個陣列資料(共110個)那可以設定變數CT++每五個歸零一次，同時R在每五個CT歸零時加一，這樣去做旗標，這樣的話就能分辨現在到哪
            countydata.push(myJson.records.location[y]);//將資料以陣列順序輸入(這裡需要再檢查一次)
            let locat = countydata[x].locationName;

            place_name.push(locat);

            let high_temp = countydata[x].weatherElement[4].time[2].parameter.parameterName;//第一時段最高溫
            let low_temp = countydata[x].weatherElement[2].time[2].parameter.parameterName;
            let weather_type = countydata[x].weatherElement[0].time[2].parameter.parameterName;
            let rain_chance = countydata[x].weatherElement[1].time[2].parameter.parameterName;
            let CI = countydata[x].weatherElement[3].time[2].parameter.parameterName;
            // time[0]是當日晚上六點到隔日早上六點
            // time[1]是隔日早上六點到隔日晚上六點
            // time[2]是隔日晚上六點到後日早上六點
            // console.log(high_temp);
            //選擇圖片
            if (rain_chance >= 51) {
                view_img = 'rainy';
            } else if (rain_chance >= 31) {
                view_img = 'cloudy';
            } else {
                view_img = 'sundy';
            }
            //製作卡片
            showcard.innerHTML +=
                `<div class="card card-${county[x]}">
    <div class="img ${view_img}"></div>
    <div class="local">${locat}</div>
    <div class="temp">${high_temp}°C/${low_temp}°C</div>
    <div class="winther">${weather_type}</div>
    <div class="rain">降雨機率${rain_chance}%</div>
    <div class="comfortable">${CI}</div>
    </div>`
            //因為一開始是預先設定time，是否要先將time時間抓出來，選擇時間的時候去做更動？ 例如陣列time 0 1 2
        }
        console.log(myJson);
    });


btn_all.classList.add('hover');//預設全部按鈕為打開
time_first.classList.add('hover');//預設第一個時間按鈕打開
function showtime(){
    timebox.innerHTML ='現在時間：&nbsp;' + new Date();
    setTimeout('showtime()',1000);
}

function touch() {
    for (let x = 0; x < county.length; x++) {
        document.querySelector(".card-" + county[x]).style.display = 'none';
    }
}
//新增按鈕CSS方法，原來是只給hover就好，不用給前面一堆為了權重等地屬性
//記得在其他地方都要清除add的class
function north() {
    btn_all.classList.remove('hover');
    btn_m.classList.remove('hover');
    btn_w.classList.remove('hover');
    btn_e.classList.remove('hover');
    btn_i.classList.remove('hover');
    btn_n.classList.add('hover');
    document.querySelector(".card-" + county[0]).style.display = 'block';
    document.querySelector(".card-" + county[1]).style.display = 'block';
    document.querySelector(".card-" + county[2]).style.display = 'block';
    document.querySelector(".card-" + county[3]).style.display = 'block';
    document.querySelector(".card-" + county[4]).style.display = 'block';
    document.querySelector(".card-" + county[5]).style.display = 'block';
    big();
    clear();
    p = 1;
}

function middle() {
    btn_all.classList.remove('hover');
    btn_n.classList.remove('hover');
    btn_w.classList.remove('hover');
    btn_e.classList.remove('hover');
    btn_i.classList.remove('hover');
    btn_m.classList.add('hover');
    document.querySelector(".card-" + county[6]).style.display = 'block';
    document.querySelector(".card-" + county[7]).style.display = 'block';
    document.querySelector(".card-" + county[8]).style.display = 'block';
    document.querySelector(".card-" + county[9]).style.display = 'block';
    document.querySelector(".card-" + county[10]).style.display = 'block';
    big();
    clear();
    p = 2;
}
function west() {
    btn_all.classList.remove('hover');
    btn_n.classList.remove('hover');
    btn_m.classList.remove('hover');
    btn_e.classList.remove('hover');
    btn_i.classList.remove('hover');
    btn_w.classList.add('hover');
    document.querySelector(".card-" + county[11]).style.display = 'block';
    document.querySelector(".card-" + county[12]).style.display = 'block';
    document.querySelector(".card-" + county[13]).style.display = 'block';
    document.querySelector(".card-" + county[14]).style.display = 'block';
    document.querySelector(".card-" + county[15]).style.display = 'block';
    big();
    clear();
    p = 3;
}
function east() {
    btn_all.classList.remove('hover');
    btn_n.classList.remove('hover');
    btn_m.classList.remove('hover');
    btn_w.classList.remove('hover');
    btn_i.classList.remove('hover');
    btn_e.classList.add('hover');
    document.querySelector(".card-" + county[16]).style.display = 'block';
    document.querySelector(".card-" + county[17]).style.display = 'block';
    document.querySelector(".card-" + county[18]).style.display = 'block';
    big();
    clear();
    p = 4;
}
function islands() {
    btn_all.classList.remove('hover');
    btn_n.classList.remove('hover');
    btn_m.classList.remove('hover');
    btn_w.classList.remove('hover');
    btn_e.classList.remove('hover');
    btn_i.classList.add('hover');
    document.querySelector(".card-" + county[19]).style.display = 'block';
    document.querySelector(".card-" + county[20]).style.display = 'block';
    document.querySelector(".card-" + county[21]).style.display = 'block';
    big();
    clear();
    p = 5;
}

function all() {
    btn_m.classList.remove('hover');
    btn_n.classList.remove('hover');
    btn_w.classList.remove('hover');
    btn_e.classList.remove('hover');
    btn_i.classList.remove('hover');
    btn_all.classList.add('hover');
    for (let x = 0; x < county.length; x++) {
        let card = document.querySelectorAll('.card')
        card[x].style.display = 'block';
        card[x].classList.remove('card-big');
    }
    clear();
    p = 0;
    console.log(p);
}
function firsttime() {
    time_second.classList.remove('hover');
    time_third.classList.remove('hover');
    time_first.classList.add('hover');
    cho = 0;
    change_time(cho);
}
function secondtime() {
    time_first.classList.remove('hover');
    time_third.classList.remove('hover');
    time_second.classList.add('hover');
    cho = 1;
    change_time(cho);
}
function thirdtime() {
    time_first.classList.remove('hover');
    time_second.classList.remove('hover');
    time_third.classList.add('hover');
    cho = 2;
    change_time(cho);
}

function change_time() {
    showcard.innerHTML = "";
    var type;
    if (cho == 0) {
        type = first_time;
    } else if (cho == 1) {
        type = second_time;
    } else {
        type = third_time;
    }
    for (let x = 0; x < county.length; x++) {
        // console.log(choose_time[cho][x]);
        //// img是用class去跑，所以是否要新增/刪除classList
        let high_temp = type[x][4].parameter.parameterName;//第一時段最高溫
        let low_temp = type[x][2].parameter.parameterName;
        let weather_type = type[x][0].parameter.parameterName;
        let rain_chance = type[x][1].parameter.parameterName;
        let CI = type[x][3].parameter.parameterName;

        if (rain_chance >= 51) {
            view_img = 'rainy';
        } else if (rain_chance >= 31) {
            view_img = 'cloudy';
        } else {
            view_img = 'sundy';
        }
        showcard.innerHTML +=
            `<div class="card card-${county[x]}">
    <div class="img ${view_img}"></div>
    <div class="local">${place_name[x]}</div>
    <div class="temp">${high_temp}°C/${low_temp}°C</div>
    <div class="winther">${weather_type}</div>
    <div class="rain">降雨機率${rain_chance}%</div>
    <div class="comfortable">${CI}</div>
    </div>`
    }
    all();
}
function big() {
    for (let x = 0; x < county.length; x++) {
        let card = document.querySelectorAll('.card')
        card[x].classList.add('card-big');
    }
}
//清空點擊地圖特效，還要做點地圖會換頁
function clear(){
    for (let y = 0; y < county.length; y++) {
        document.querySelector('.' + county[y]).style.fill = 'rgba(1, 24, 19)';
        document.querySelector('.card-' + county[y]).style.transform = 'scale(1)';
        document.querySelector('.card-' + county[y]).style.zIndex = '0';
        document.querySelector('.card-' + county[y]).style.position = 'relative';
    }
}
btn_all.addEventListener('click', all);
btn_n.addEventListener('click', touch);
btn_n.addEventListener('click', north);
btn_m.addEventListener('click', touch);
btn_m.addEventListener('click', middle);
btn_w.addEventListener('click', touch);
btn_w.addEventListener('click', west);
btn_e.addEventListener('click', touch);
btn_e.addEventListener('click', east);
btn_i.addEventListener('click', touch);
btn_i.addEventListener('click', islands);
time_first.addEventListener('click', firsttime);
time_second.addEventListener('click', secondtime);
time_third.addEventListener('click', thirdtime);

// 設定地圖按鈕事件
for (let x = 0; x < county.length; x++) {
    let map = document.querySelector('.' + county[x]);
    function map_click() {
        //for將所有顏色先清空，再改固定一格的顏色，達到切換的效果
        let card = document.querySelector('.card-' + county[x]);
        for (let y = 0; y < county.length; y++) {
            document.querySelector('.' + county[y]).style.fill = 'rgba(1, 24, 19)';
            document.querySelector('.card-' + county[y]).style.transform = 'scale(1)';
            document.querySelector('.card-' + county[y]).style.zIndex = '0';
            document.querySelector('.card-' + county[y]).style.position = 'relative';
        }
        if(x<6){
            touch();
            north();
        }else if(x<11){
            touch();
            middle();
        }else if(x<16){
            touch();
            west();
        }else if(x<19){
            touch();
            east();
        }else{
            touch();
            islands();
        }
        
        map.style.fill = 'yellow';
        if(p == 0){
            card.style.transform = 'scale(3, 3.5)';
        }else{
            card.style.transform = 'scale(1.5)';
        }
        card.style.zIndex = '1';
        card.style.position ='absolute';
        card.style.position ='absolute';
        
    }
    map.addEventListener('click', map_click);
}



// 定義在哪裡的問題，以及在那裡使用的問題，須查明是不是因為陣列是呼叫涵式之後才有作用，所以應該把function塞進去fetch裡面
// document.querySelector(`'.card-${county[x]}'`);

//將卡片改成用 querySelectorAll來選會不會比較好選？


// 用旗標：選擇到第一個按鈕的時候，設定X=0;選到2 X=2 選到3 X=3


///尚須修改時間條件式，有時間的話就用條件式去判斷


//先做點到地圖的時候，那一塊地卡片能夠放大，有時間才來做卡片點擊，沒時間就只當成卡片了

//卡片點擊只要直接放大就好，有時間才來把地圖也變色
