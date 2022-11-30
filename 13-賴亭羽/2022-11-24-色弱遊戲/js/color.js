const startBtn = document.querySelector(".start-btn");
const restart = document.querySelector(".restart-btn");
const scoreNum = document.querySelector(".score");
const levelNum = document.querySelector(".level");
const board = document.querySelector(".board");
const startBoard = document.querySelector(".start");
const timeNum = document.querySelector(".time-count")
//分數 方塊數量 等級初始值
let amount = 2;
let score = 0;
let level = 1;
//不同顏色方塊位置
let correctCol;
let correctRow;
//計時變數
let countdown;
let timeout;

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
    let correctBtn = document.querySelector("#correct-btn");
    let allBtn = document.querySelectorAll(".all-btn");
    //方塊固定寬高
    boxLength = 700 / amount;
    //隨機生成顏色
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);
    //console.log(R, G, B)
    //將所有方塊放入顏色及寬高
    console.log(allBtn.length);
    // allBtn.forEach(function (c) {
    //     allBtn.style.backgroundColor = `rgb(${R},${G},${B})`;
    //     allBtn.style.width = `${boxLength}px`;
    //     allBtn.style.height = `${boxLength}px`;
    //     console.log(R,G,B)
    // });

    for (x = 0; x < allBtn.length; x++) {
        allBtn[x].style.backgroundColor = `rgb(${R},${G},${B})`;
        allBtn[x].style.width = `${boxLength}px`;
        allBtn[x].style.height = `${boxLength}px`;
    }
    console.log(allBtn)
}
//按下開始鈕
startBtn.onclick = function () {
    startBoard.classList.add("hidden");
    amount = 2;
    level = 1;
    levelNum.innerHTML = level
    Score = 0;
    scoreNum.innerHTML = Score + "分"
    // board.innerHTML = "";
    Sec = 10;//

    //倒數計時
    function countdown() {
        Sec--;
        timeNum.innerHTML = Sec + "秒";
        if (Sec <= 20) {
            timeNum.style.color = "orange"
        } else if (Sec <= 10) {
            timeNum.style.color = "#f00"
        } else if (Sec == 0) {
            //結算
            clearTimeout(timeCountdown);
        }
    }
    let timeCountdown = setInterval(countdown, 1000)

    creatBoxs(amount);

}