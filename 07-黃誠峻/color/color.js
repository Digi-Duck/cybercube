// <!-- (1)點擊到解答能刷新方塊 -->
// <!-- (2)要計分 -->
// <!-- (3)要有倒數計時 -->
// <!-- (4)根據分數題目會越來越難(增加方塊/減少色差) -->
// <!-- (5)時間結束秀出分數及評語 -->
// <!-- (6)要能重玩 -->
const game= document.querySelector("#game")





var change=[2,4,5,5,5,6,10,10,12,2,1]
var mainColor=[50,45,40,40,35,30,25,20,20,50,0]
let y=-1
let level=0

function create(){
  
  for( i=0;i<change[y]*change[y];i++){
    console.log ("檢查"+change[y])
  var div=document.createElement('div');
  div.setAttribute("class","gameColor")

  game.appendChild(div);
 }
}
//再玩一次
function restart(){
    y=-1;
    level=0;
    color();
  

}

function color(){
  game.setAttribute("id","game")
  document.getElementById("start").style.visibility = "visible"
document.getElementById("chater").style.visibility = "visible"
  

var count = 8;
//倒數計時器
var timerId = setInterval(timer, 1000); // 每隔1000毫秒，呼叫一次timer。
          function timer() {
            count--; // 每次執行timer就把count減1。

            // console.log(count)

            // 若已計數完畢，則停止計時。
            if (count == 0) 
              clearInterval(timerId);
          }
  //一般情況
    if(y<9){
   
         if(level%3==0){
        y=y+1;}
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
          create()
   //一次改變所有格子的大小與顏色
   var boxloop=document.querySelectorAll(".gameColor")
//    console.log(boxloop.length);
   for( j=0;j<=boxloop.length-1;j++){
  //改變特定格子顏色
    boxloop[position].style.background="rgb("+(red+mainColor[y])+","+(green+mainColor[y])+","+(blue+mainColor[y])+")";
   
    
   boxloop[j].style.height="calc(100%/"+change[y] +" - 6px)";
   boxloop[j].style.width="calc(100%/"+change[y] +" - 6px)";
   boxloop[j].style.background="rgb("+red+","+green+","+blue+")";
   } boxloop[position].addEventListener('click', function () {
    //重新開始coloro函式並讓計時器歸零
    color();clearInterval(timerId);
  });
   
    
 level++
 console.log("level:"+level)
 console.log("y:"+y)
 }





//全破情況
else if(y==9){

  game.innerHTML="";
  game.innerHTML="<div class=title>恭喜您，你成功過關了<br>以下是我們給您的建議</div><div class='content'>請善待身旁有色弱的朋友，對於完全沒有色弱的您，我想讓您知道!<br><br>在台灣每100個人就有約5個人有色弱，所以這並不是很罕見的疾病，<br>請善待身旁有色弱的朋友<br>謝謝您</div></div><br></div><br><br><div style='width:100px;background:#4fdf8f;;border:dashed;text-align:center; margin:auto;cursor: pointer;border-radius:30px;'onclick=restart()>再玩一次</div>";
 game.setAttribute("id","endGame")
document.getElementById("start").style.visibility = "hidden"
document.getElementById("chater").style.visibility = "hidden"

}
//時間到輸掉
function lose(){


}




}




//測試用
function chater(){

  color();

}
