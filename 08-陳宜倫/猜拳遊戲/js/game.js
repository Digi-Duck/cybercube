var computer="";
var result="";
var gestures=['Rock','Paper','Scissors'];
var e =(document.getElementById("blood1").clientWidth);

function rock(){
    const player="Rock"
    computer=gestures[Math.floor(Math.random()*3)];

    if(computer=="Rock"){
        result="it's DRAW!";
    }
    else if(computer=="Paper"){
        result="you LOSE!";
    }
    else if(computer=="Scissors"){
        result="you WIN!";
    }
    console.log(player);
    console.log(computer);
    console.log(result);
    var gameResult = document.getElementById("resultText");
    gameResult.innerHTML="You got Rock, and Gollum got "+computer+"...<br> "+result;
}

function paper(){
    const player="Paper"
    computer=gestures[Math.floor(Math.random()*3)];

    if(computer=="Rock"){
        result="you WIN!";
        attack();
    }
    else if(computer=="Paper"){
        result="it's DRAW!";
    }
    else if(computer=="Scissors"){
        result="you LOSE!";
    }
    console.log(player);
    console.log(computer);
    console.log(result);
    var gameResult = document.getElementById("resultText");
    gameResult.innerHTML="You got Paper, and Gollum got "+computer+"... <br>"+result;
}

function scissors(){
    const player="Scissors"
    computer=gestures[Math.floor(Math.random()*3)];

    if(computer=="Rock"){
        result="you LOSE!";
    }
    else if(computer=="Paper"){
        result="you WIN!";
    }
    else if(computer=="Scissors"){
        result="it's DRAW!";
    }
    console.log(player);
    console.log(computer);
    console.log(result);
    var gameResult = document.getElementById("resultText");
    gameResult.innerHTML="You got Scissors, and Gollum got "+computer+"...<br> "+result;
}

var e =(document.getElementById("blood1").width);
function attack(){
    var temp1 = e - 100;
    bar=setInterval(function(){
        e-=2;
        if(e<=temp1){
            clearInterval(bar);

            document.getElementById("progress1").style.width= e + "px";
            console.log(e);
        }
        
    },1);
}

let h=(document.getElementById("blood2").clientWidth);
function attacked(){
    let temp2 = h - 100;
    bar=setInterval(function(){
        h-=2;
        if(h<=temp2){
            clearInterval(bar);

            document.getElementById("progress2").style.width=h+"px";
        }
        
    },1);
}
