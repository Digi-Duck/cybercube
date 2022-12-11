var s=document.querySelector("#taipei")
var cleanArea=[];
// //console.log(s)
// // dataset 用來取得放在上面並且開頭是data的
// //console.log(s.dataset.name)
s.addEventListener("click",function(){
// //console.log("台北")
})
// 台灣出現控制
const mainleft=document.querySelector(".mainleft")
const mainright=document.querySelector(".mainright")
// 產生事件監聽器
const allArea = document.querySelector("#allArea")
const northArea = document.querySelector("#northArea")
const centerArea = document.querySelector("#centerArea")
const southArea = document.querySelector("#southArea")
const eastArea = document.querySelector("#eastArea")
const island = document.querySelector("#island")
const am_am=document.querySelector("#am_am")
const am_pm=document.querySelector("#am_pm")
const pm_am=document.querySelector("#pm_am")
const time=document.querySelector("#time")

var k=1;

am_am.addEventListener("click",function(){
time.innerHTML=`<b>預報時間為：本日00:00~本日06:00</b>`
allCards0.style="display:"
allCards1.style="display:none"
allCards2.style="display:none"

return k=0
})
am_pm.addEventListener("click",function(){
    time.innerHTML=`<b>預報時間為：本日06:00~本日18:00</b>`
allCards0.style="display:none"
allCards1.style="display:"
allCards2.style="display:none"

return k=1
})
pm_am.addEventListener("click",function(){
    time.innerHTML=`<b>預報時間為：本日18:00~隔日06:00</b>`
allCards0.style="display:none"
allCards1.style="display:none"
allCards2.style="display:"
return k=2
})

allArea.addEventListener("click",function(){
    mainleft.style="display:none";
    mainright.style="widht:100%"
    for(i=0;i<=21;i++){

     document.querySelector(`#cleanArea0${i}`).style.display=""
     document.querySelector(`#cleanArea1${i}`).style.display=""
     document.querySelector(`#cleanArea2${i}`).style.display=""
    // document.querySelector(`#cleanArea${i}`)
    }
    })
northArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="widht:50%"
    for(i=0;i<=21;i++){
        if(i<=5){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }
    // document.querySelector(`#cleanArea${i}`)
    }
    })
centerArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="widht:50%"
    for(i=0;i<=21;i++){
        if(i>=6&&i<=9){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }    }
})
southArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="widht:50%"
    for(i=0;i<=21;i++){
        if(i>=10&&i<=15){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }  }
    })
eastArea.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="widht:50%"
    for(i=0;i<=21;i++){
        if(i>=16&&i<=18){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }    }
    })
island.addEventListener("click",function(){
    mainleft.style="display:block";
    mainright.style="widht:50%"
    for(i=0;i<=21;i++){
        if(i>=19&&i<=21){
            document.querySelector(`#cleanArea0${i}`).style.display=""
            document.querySelector(`#cleanArea1${i}`).style.display=""
            document.querySelector(`#cleanArea2${i}`).style.display=""
        }
        else{
            document.querySelector(`#cleanArea0${i}`).style.display="none"
            document.querySelector(`#cleanArea1${i}`).style.display="none"
            document.querySelector(`#cleanArea2${i}`).style.display="none"
        }   }
    })


// centerArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// southArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// eastArea.addEventListener("click",function(){
//     //console.log(this);
//     })
// island.addEventListener("click",function(){
//     //console.log(this);
//     })



// 產生卡片區域
const locationArray=["嘉義縣","新北市","嘉義市","新竹縣","新竹市","臺北市","臺南市","宜蘭縣","苗栗縣","雲林縣","花蓮縣","臺中市","臺東縣","桃園市","南投縣","高雄市","金門縣","屏東縣","基隆市","澎湖縣","彰化縣","連江縣"]
const locationNum=[1,3,4,5,13,18,8,11,14,20,0,2,6,9,15,17,7,10,12,16,19,21]
//中部地區
// const northArray=[1,3,4,5,13,18]
// const centerArray=[8,11,14,20]
// const southArray=[0,2,6,9,15,17]
// const eastArray=[7,10,12]
// const islandArray=[16,19,21]


// //console.log(locationArray[21])//確定位置


let allCards0=document.querySelector("#allCards0")
let allCards1=document.querySelector("#allCards1")
let allCards2=document.querySelector("#allCards2")

// 與api連線
fetch( "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-AA300EC1-31BA-465E-B669-6CA2C320A195")
.then(function(response) {
return response.json();
})
.then(function(myJson) {

// // 以下為如何抓取資料的方法 接著我們嘗試去取得各種我們所需要的資料並且加以定義吧!
//console.log(myJson)//取得大致資料
// //console.log(myJson.records.location[11]) //取得地點
// //console.log(myJson.records.location[11].weatherElement[0])//取得天氣現象(wx)
// //console.log(myJson.records.location[11].weatherElement[0].time[j])//進入到早上六點到晚上六點時段
// //console.log(myJson.records.location[11].weatherElement[0].time[j].parameter)//進入到選擇天氣狀況或是天氣狀況代碼
// //console.log(myJson.records.location[11].weatherElement[0].time[j].parameter.parameterName)
//選擇天氣狀況名字
var startTime=myJson.records.location[11].weatherElement[0].time[1].startTime//取得開始時間
var endTime=myJson.records.location[11].weatherElement[0].time[1].endTime//取得結束時間

// var area=
// //console.log("庫"+myJson.records.location[12].weatherElement[3].time[j].parameter.parameterName)//取得舒適度
// 產生卡片
allCards2.innerHTML=""
   for(let j=0;j<=2;j++)
   { for(let i=0;i<=21;i++){
var city=myJson.records.location[locationNum[i]].locationName; //取得縣市名字
//console.log(city)
var weather=myJson.records.location[locationNum[i]].weatherElement[0].time[j].parameter.parameterName;
//console.log(weather)  //取得天氣狀況
var weatherValue=myJson.records.location[locationNum[i]].weatherElement[0].time[j].parameter.parameterValue//取得天氣狀況數值
var startTime=myJson.records.location[11].weatherElement[0].time[j].startTime//取得開始時間
var endTime=myJson.records.location[11].weatherElement[0].time[j].endTime//取得結束時間
if(weatherValue<=3){
    var img="cloud"
}
else if(weatherValue<=7){
    var img="cloud"
}
else{
    var img="rain"
}


var lowTempture=myJson.records.location[locationNum[i]].weatherElement[2].time[j].parameter.parameterName //取得最低溫度

//console.log(lowTempture)

var highTempture=myJson.records.location[locationNum[i]].weatherElement[4].time[j].parameter.parameterName//取得最高溫度
//console.log(highTempture)
 

var chance=`降雨機率:${myJson.records.location[locationNum[i]].weatherElement[1].time[j].parameter.parameterName}%`//降雨機率

var comfort=myJson.records.location[locationNum[i]].weatherElement[3].time[j].parameter.parameterName
if(j==0){
    allCards0.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
    allCards0.style="display:none"

}
else if(j==1){
allCards1.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
// allCards1.style="display:none"

}

else if(j==2){
    allCards2.innerHTML+=`<b><div id="cleanArea${j}${i}" class="card"> <div class="rain"><img src="../images/${img}.svg" alt=""></div><div class="city">${city}</div><div class="normal">溫度:${lowTempture}°~${highTempture}°:</div><div class="normal">${chance}</div><div class="normal">天氣:${weather}</div><div class="normal">${comfort}</div></div></div><b>`
    allCards2.style="display:none"

    console.log(document.getElementById(`cleanArea${j}${i}`))
   
}
     }}
     return  k=1;}
);

