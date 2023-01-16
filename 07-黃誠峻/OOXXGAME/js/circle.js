function startGame() {
    if (this.textContent == "重新開始" || this.textContent == "平手") {
        console.log("重來")
        player = "o"
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                allGame.removeChild(newDiv[i][j])
            }
        }
    }
    this.textContent = "重新開始"
    this.style = "display:none"
    document.dispatchEvent(new Event("CreateBoard"))

}
function createBoard() {
    for (let i = 0; i <= 2; i++) {
        newDiv[i] = []
        for (let j = 0; j <= 2; j++) {
            newDiv[i][j] = document.createElement("div")
            newDiv[i][j].className = `board newDiv`
            newDiv[i][j].dataset.key = `${i}-${j}`

            allGame.appendChild(newDiv[i][j])
        }
    }
    document.dispatchEvent(new Event("firstChose"))
}
function firstChose() {
    title.textContent = "圈圈先走！"
    const chose = document.querySelectorAll(".newDiv")
    for (i = 0; i <= 8; i++) {
        chose[i].addEventListener("click", choseSpace)
    }
}
function choseSpace() {
    if (!this.textContent == "") {
        title.textContent = "那一格已經被選過囉！"
        return
    }
    if (player == "o") {
        this.textContent = "O"

        title.textContent = "輪到Ｘ囉"
        checkWin("O")
        return player = "x"
    }
    if (player == "x") {
        this.textContent = "X"

        title.textContent = "輪到Ｏ囉"
        checkWin("X")
        return player = "o"
    }
}

function checkWin(x) {
    playTime = playTime + 1
    // 最少要五步，才可能有人獲勝
    if (playTime >= 5) {
        let checks = document.querySelectorAll(".newDiv")
        let checkArray = Array.from(checks).map(check => {
            return check.textContent
        });


        if (
            //橫向
            (checkArray[0] == checkArray[1] && checkArray[1] == checkArray[2] && checkArray[2] == checkArray[0] && checkArray[0] != "" && checkArray[1] != "" && checkArray[2] != "") ||

            (checkArray[3] == checkArray[4] && checkArray[4] == checkArray[5] && checkArray[5] == checkArray[3] && checkArray[3] != "" && checkArray[4] != "" && checkArray[5] != "") ||

            (checkArray[6] == checkArray[7] && checkArray[7] == checkArray[8] && checkArray[8] == checkArray[6] && checkArray[6] != "" && checkArray[7] != "" && checkArray[8] != "") ||
            //直的
            (checkArray[0] == checkArray[3] && checkArray[3] == checkArray[6] && checkArray[6] == checkArray[0] && checkArray[0] != "" && checkArray[3] != "" && checkArray[6] != "") ||

            (checkArray[1] == checkArray[4] && checkArray[4] == checkArray[7] && checkArray[7] == checkArray[1] && checkArray[1] != "" && checkArray[4] != "" && checkArray[7] != "") ||

            (checkArray[2] == checkArray[5] && checkArray[5] == checkArray[8] && checkArray[8] == checkArray[2] && checkArray[2] != "" && checkArray[5] != "" && checkArray[8] != "") ||
            //斜線
            (checkArray[0] == checkArray[4] && checkArray[4] == checkArray[8] && checkArray[8] == checkArray[0] && checkArray[0] != "" && checkArray[4] != "" && checkArray[8] != "") ||

            (checkArray[2] == checkArray[4] && checkArray[4] == checkArray[6] && checkArray[6] == checkArray[2] && checkArray[2] != "" && checkArray[4] != "" && checkArray[6] != "")
        ) {
            if (playTime <= 9) {
                title.textContent = `${x}贏了`
                playTime = 0

            }
            document.dispatchEvent(new Event("endGame"))
            return playTime,player

        }
        if (playTime == 9) {
            title.textContent = `平手`
            playTime = 0
            document.dispatchEvent(new Event("endGame"))

        }
    }
    // console.log(playTime)
    return playTime,player
}
function endGame() {
    const chose = document.querySelectorAll(".newDiv")
    for (i = 0; i <= 8; i++) {
        chose[i].removeEventListener("click", choseSpace)
    }
    startBtn.style = "display:block"
}

const title = document.querySelector(".title")
const allGame = document.querySelector("#all-game")
const startBtn = document.querySelector(".start-btn")
var player = "o"
var newDiv = []
var playTime = 0

startBtn.addEventListener("click", startGame)
document.addEventListener("CreateBoard", createBoard)
document.addEventListener("firstChose", firstChose)
document.addEventListener("endGame", endGame)