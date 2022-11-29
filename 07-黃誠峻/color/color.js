// <!-- (1)點擊到解答能刷新方塊 -->
// <!-- (2)要計分 -->
// <!-- (3)要有倒數計時 -->
// <!-- (4)根據分數題目會越來越難(增加方塊/減少色差) -->
// <!-- (5)時間結束秀出分數及評語 -->
// <!-- (6)要能重玩 -->
const game= document.querySelector("#game")

var change=[2,4,5,5,5,6,10,10,12,20]
var mainColor=[50,40,40,40,30,30,20]
let y=-1
function color(){
    console.log("第"+y);
    y=y+1;
    //選定一個隨機顏色
   red=Math.floor(Math.random()*255);
   blue=Math.floor(Math.random()*255);
   green=Math.floor(Math.random()*255);
    //產生多少格子
    position=Math.floor(Math.random() * (change[y]*change[y]));
    // console.log(position)
    //清空原始格子
    game.innerHTML="";
    //創造格子
    for(let i=0;i<change[y]*change[y];i++){

    var div=document.createElement('div');
    div.setAttribute("class","gameColor")

    game.appendChild(div);
   }
   //一次改變所有格子的大小與顏色
   var boxloop=document.querySelectorAll(".gameColor")
//    console.log(boxloop.length);
   for(let j=0;j<=boxloop.length-1;j++){
  //改變特定格子顏色
    boxloop[position].style.background="rgb("+(red+mainColor[y])+","+(green+mainColor[y])+","+(blue+mainColor[y])+")";
   
    // console.log( j)
   boxloop[j].style.height="calc(100%/"+change[y] +" - 6px)";
   boxloop[j].style.width="calc(100%/"+change[y] +" - 6px)";
   boxloop[j].style.background="rgb("+red+","+green+","+blue+")";
   } boxloop[position].addEventListener('click', function () {
    color();
  });
   
    
  }
