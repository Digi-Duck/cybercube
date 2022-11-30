const startBtn = document.querySelector(".start-btn");
const scoreNum = document.querySelector(".score");
const levelNum = document.querySelector(".level");
const board = document.querySelector(".board");
const result = document.querySelector(".result");
const timeNum = document.querySelector(".time-count")
//分數 方塊數量 等級初始值
let amount = 2;
let score = 0;
let level = 1;
//特定變色方塊位置
let correctCol;
let correctRow;
//計時變數
let countdown;
let timeout;
//點擊異色方塊觸發機制
function clickcorrectBtn(){
    level+=1;
    score+=amount;
    if(level<10){
        levelNum.innerHTML="0"+level;
    }else{
        levelNum.innerHTML=level;
    }
    if(score<10){
        scoreNum.innerHTML="0"+score;
    }else{
        scoreNum.innerHTML=score;
    }
    if(amount<20){
        amount++;
    }
    board.innerHTML="";
    creatBoxs(amount);
}
//製造方塊
function creatBoxs(num) {
    // board.innerHTML = "";
    correctRow = Math.floor(Math.random() * num) + 1;
    correctCol = Math.floor(Math.random() * num) + 1;

    for (let i = 1; i < num + 1; i++) {
        for (let j = 1; j < num + 1; j++) {
            if (i == correctRow && j == correctCol) {
                //特定變色方塊
                let ansDiv = document.createElement("div");
                ansDiv.setAttribute("class", "all-btn correct-btn")
                board.appendChild(ansDiv);
                // board.innerHTML += `<button class="all-btn" id=" correct-btn"></button>`
            } else {
                let allDiv = document.createElement("div");
                allDiv.setAttribute("class", "all-btn");
                board.appendChild(allDiv);
                // board.innerHTML += `<button class="all-btn"></button>`
            }
        }
    }
    let correctBtn = document.querySelector(".correct-btn");
    let allBtn = document.querySelectorAll(".all-btn");
    //方塊固定寬高
    boxLength = 700 / amount;
    //隨機生成顏色
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    //將所有方塊放入顏色及寬高
    console.log(allBtn.length);
    for (x = 0; x < allBtn.length; x++) {
        allBtn[x].style.backgroundColor = `rgb(${R},${G},${B})`;
        allBtn[x].style.width = `${boxLength}px`;
        allBtn[x].style.height = `${boxLength}px`;
    }
    //依等級去劃分難度
    if(level<=1){
        correctBtn.style.backgroundColor=`rgb(${R - 50},${G -50 },${B - 50})`;
    }else if(level<5){
        correctBtn.style.backgroundColor=`rgb(${R - 40},${G -40 },${B - 40})`
    }else if(level<10){
        correctBtn.style.backgroundColor=`rgb(${R - 30},${G -30 },${B - 30})`
    }else if(level<15){
        correctBtn.style.backgroundColor=`rgb(${R - 20},${G -20 },${B - 20})`
    }else if(level<20){
        correctBtn.style.backgroundColor=`rgb(${R - 10},${G -10 },${B - 10})`}
    //增加異色方塊觸發事件
    correctBtn.addEventListener("click",clickcorrectBtn);
}

//按下開始鈕
startBtn.onclick = function () {
    result.classList.add("hidden");
    startBtn.classList.add("hidden");
    amount = 2;
    level = 1;
    levelNum.innerHTML = level
    Score = 0;
    scoreNum.innerHTML = Score + "分"
    board.innerHTML = "";
    let Sec = 10;//
    //倒數計時
    function countdown() {
        Sec = Sec - 1;
        timeNum.innerHTML = Sec + "秒";
        if (Sec <= 20) {
            timeNum.style.color = "orange"
        } else if (Sec <= 10) {
            timeNum.style.color = "#f00"
        } 
        if (Sec == 0) {
            //結算
            clearTimeout(timeCountdown);
            if(level<=1){
                alert(`時間到！您已通過: ${level-1} 關，總共得到: ${score} 分！`);
            }else if(level<5){
                alert(`時間到！您已通過: ${level-1} 關，總共得到: ${score} 分！`);
            }else if(level<10){
                alert(`時間到！您已通過: ${level-1} 關，總共得到: ${score} 分！`);
            }else if(level<15){
                alert(`時間到！您已通過: ${level-1} 關，總共得到: ${score} 分！`);
            }else if(level<20){
                alert(`時間到！您已通過: ${level-1} 關，總共得到: ${score} 分！`);}
                startBtn.classList.remove("hidden");
        }
    }
    let timeCountdown = setInterval(countdown, 1000)

    creatBoxs(amount);
}