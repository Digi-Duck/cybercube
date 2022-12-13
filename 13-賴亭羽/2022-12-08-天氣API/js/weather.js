const content = document.querySelector('.container');
const img = document.querySelector('img');

fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
  .then(function (response) {
    //送出請求回傳資料，得到promise，所以等他回應之後執行...
    //但回應之後回傳的資料太多，需要過濾，運用json()，同時轉換成物件
    return response.json();
  }).then(function (myJson) {
    console.log(myJson);

    for (let i = 0; i < 22; i++) {
      content.innerHTML +=
        `<div class="card">
            <div class="picture"><img src="" alt=""></div>
            <div class="city">${myJson.records.location[i].locationName}</div>
            <div class="weather">天氣狀況:${myJson.records.location[i].weatherElement[0].time[0].parameter.parameterName}</div>
            <div class="temperture">氣溫:${myJson.records.location[i].weatherElement[2].time[0].parameter.parameterName}~${myJson.records.location[i].weatherElement[4].time[0].parameter.parameterName}</div>
            <div class="rain">降雨機率:${myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName}</div>
            <div class="comfort">舒適度:${myJson.records.location[i].weatherElement[3].time[0].parameter.parameterName}</div>
        </div>`

      if (myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName > 50) {
        img.src = "./images/rain.png";
      } else if (myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName <= 50 && myJson.records.location[i].weatherElement[1].time[0].parameter.parameterName > 31) {
        img.src = "./images/cloudy.png";
      } else {
        img.src = "./images/sun.png";
      }
    }
  });
//取得天氣API資料
//將資料套在卡片模板上，並輸出在網頁上
// const content=document.querySelector('.container');
// function content(){
//     innerHTML +=
// }
/*
 50%以上  下雨
 31-50%  陰天
 30%以下  晴天
 */