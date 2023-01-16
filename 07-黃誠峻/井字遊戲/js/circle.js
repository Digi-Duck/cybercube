function startGame(){
    this.textContent="重新開始"
    this.style="display:none"
    document.dispatchEvent(new Event("CreateBoard"))
}
function createBoard(){
    for(let i=0;i<=2;i++){
        newDiv[i]=[]
    for(let j=0;j<=2;j++){
        newDiv[i][j]=document.createElement("div")
        newDiv[i][j].className=`board newDiv`
        newDiv[i][j].dataset.key=`${i}-${j}`

        allGame.appendChild(newDiv[i][j])
    }}
    document.dispatchEvent(new Event("firstChose"))
}
function firstChose(){
    const chose=document.querySelectorAll(".newDiv")
    for(i=0;i<=8;i++){
        chose[i].addEventListener("click",choseSpace)
    }
}
function choseSpace(){
    if(player=="o"){
    this.textContent="O"
return player="x"}
        if(player=="x"){
            this.textContent="X"
            return player="o"
        }
}

const allGame =document.querySelector("#all-game")
const startBtn =document.querySelector(".start-btn")
var player="o"
var newDiv=[]

startBtn.addEventListener("click",startGame)
document.addEventListener("CreateBoard",createBoard)
document.addEventListener("firstChose",firstChose)
