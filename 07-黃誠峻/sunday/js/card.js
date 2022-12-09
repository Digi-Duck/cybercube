var s=document.querySelector("#taipei")
// console.log(s)
// // dataset 用來取得放在上面並且開頭是data的
// console.log(s.dataset.name)
s.addEventListener("click",function(){
// console.log("台北")
})

// 產生卡片區域
const locationArray=["嘉義縣","新北市","嘉義市","新竹縣","新竹市","臺北市","臺南市","宜蘭縣","苗栗縣","雲林縣","花蓮縣","臺中市","臺東縣","桃園市","南投縣","高雄市","金門縣","屏東縣","基隆市","澎湖縣","彰化縣","連江縣"]
//中部地區
const northArray=[1,3,4,5,13,18]
const centerArray=[8,11,14,20]
const southArray=[0,2,6,9,15,17]
const eastArray=[7,10,12]
const islandArray=[16,19,21]

// console.log(locationArray[21])//確定位置


let allCards=document.querySelector("#allCards")

// 與api連線
fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
.then(function(response) {
return response.json();
})
.then(function(myJson) {

// // 以下為如何抓取資料的方法 接著我們嘗試去取得各種我們所需要的資料並且加以定義吧!
console.log(myJson)//取得大致資料
// console.log(myJson.records.location[11]) //取得地點
// console.log(myJson.records.location[11].weatherElement[0])//取得天氣現象(wx)
// console.log(myJson.records.location[11].weatherElement[0].time[0])//進入到早上六點到晚上六點時段
// console.log(myJson.records.location[11].weatherElement[0].time[0].parameter)//進入到選擇天氣狀況或是天氣狀況代碼
// console.log(myJson.records.location[11].weatherElement[0].time[0].parameter.parameterName)
//選擇天氣狀況名字
var startTime=myJson.records.location[11].weatherElement[0].time[0].startTime//取得開始時間
var endTime=myJson.records.location[11].weatherElement[0].time[0].endTime//取得結束時間

// var area=
// console.log("庫"+myJson.records.location[12].weatherElement[3].time[0].parameter.parameterName)//取得舒適度
// 產生卡片
var x=northArray
allCards.innerHTML=""
    for(let i=0;i<northArray.length;i++){


var city=myJson.records.location[x[i]].locationName; //取得縣市名字
console.log(city)
var weather=myJson.records.location[x[i]].weatherElement[0].time[0].parameter.parameterName;
console.log(weather)  //取得天氣狀況
var weatherValue=myJson.records.location[x[i]].weatherElement[0].time[0].parameter.parameterValue//取得天氣狀況數值

if(weatherValue<=3){
    var img="cloud"
}
else if(weatherValue<=7){
    var img="cloud"
}
else{
    var img="rain"
}


var lowTempture=myJson.records.location[x[i]].weatherElement[2].time[0].parameter.parameterName //取得最低溫度

console.log(lowTempture)

var highTempture=myJson.records.location[x[i]].weatherElement[4].time[0].parameter.parameterName//取得最高溫度
console.log(highTempture)
 

var chance=`降雨機率:${myJson.records.location[x[i]].weatherElement[1].time[0].parameter.parameterName}%`//降雨機率

var comfort=myJson.records.location[x[i]].weatherElement[3].time[0].parameter.parameterName

allCards.innerHTML+=`<b><div class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}:</div></div></div><b>`

     }
    }
);
