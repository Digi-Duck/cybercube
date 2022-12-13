const N = document.querySelector(".N");
const C = document.querySelector(".C");
const S = document.querySelector(".S");
const Main = document.querySelector("main");
const Container = document.querySelector(".container");
const WheaterRowDiv1 = document.querySelector(".WheaterRow:nth-child(1)");
const Container2 = document.querySelector(".container2");
const Container3 = document.querySelector(".container3");

N.addEventListener('mouseover', function () {
    Container.style.display = "flex";
    Container2.style.display = "none";
    Container3.style.display = "none";
})

C.addEventListener('mouseover', function () {
    Container2.style.display = "flex";
    Container.style.display = "none";
    Container3.style.display = "none";
})

S.addEventListener('mouseover', function () {
    Container3.style.display = "flex";
    Container.style.display = "none";
    Container2.style.display = "none";
})

// Header.addEventListener('mouseover', function(){
//     Container.style.display = "none";
//     Container2.style.display = "none";
//     Container3.style.display = "none";
// })

Main.addEventListener('mouseover', function () {
    Container.style.display = "none";
    Container2.style.display = "none";
    Container3.style.display = "none";
})

// 複寫天氣資料的方法
// const content = document.querySelector(".container");

// for(let i=0; i<縣市數量;i++){
//     content.innerHTML = ;
// }

// 串API方法

// https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195

//1.取得天氣API資料(傳輸完後.then意思為接著做...函式內容)

// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });

// 上面是由下面來的

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195").then(function (response) {
    // console.log(response);向下面再加上json來過濾出我們要的資料
    return response.json();
    //這裡已經將response這個字串轉換成物件格式，所以可以用物件的方式去存取出台中市等資料

    // console.log(response.json());

})

    .then(function (myJson) {
        // 調出物件的key
        console.log(myJson.records.location[11].locationName)
        console.log(myJson)

        WheaterRowDiv1.innerHTML +=
            `<p>` + myJson.records.location[11].locationName + `</p>` +`<p>`+myJson.records.location[11].weatherElement[2].time[0] + `</p>` +
            `<p>`+myJson.records.location[11].weatherElement.parameterName +
            `</p>` + myJson.records.location[11].weatherElement.PoP + `


        
        
        `



    })


//2.將資料套在卡片模板上，並輸出在網頁上