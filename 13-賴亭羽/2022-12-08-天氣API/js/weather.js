//送出請求回傳資料，得到promise，所以等他回應之後執行...
const content = document.querySelector('.container');
fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
  .then(function (response) {
    //但回應之後回傳的資料太多，需要過濾，運用json()，同時轉換成物件
    return response.json();
  }).then(function (myJson) {
    // for(let i=0;i<22;i++){
    console.log(myJson);
    // console.log(myJson.records.location[i].weatherElement[0]);}
    for (let i = 0; i < 22; i++) {
      content.innerHTML +=
      console.log()
        `<div class="card">
            <div class="picture"></div>
            <div class="city">${myJson.records.location[i].locationName}</div>
            <div class="weather">天氣狀況:${myJson.records.location[i].weatherElement[0]}</div>
            <div class="temperture">氣溫:${myJson.records.location[i].weatherElement[2]}~${myJson.records.location[i].weatherElement[4]}</div>
            <div class="rain">降雨機率:${myJson.records.location[i].weatherElement[1]}</div>
            <div class="comfort">舒適度:${myJson.records.location[i].weatherElement[3]}</div>
        </div>`
    }
  });
//取得天氣API資料
//將資料套在卡片模板上，並輸出在網頁上
// const content=document.querySelector('.container');
// function content(){
//     innerHTML=
// }