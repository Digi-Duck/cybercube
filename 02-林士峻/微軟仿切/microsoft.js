const backTopButton=document.querySelector('section:nth-child(7) button');
const body=document.querySelector('body')

console.log(backTopButton)

function buttonDisplay(){
    if(scrollY>850&&scrollY<1650){
        backTopButton.style.display='block'
        backTopButton.style.position='fixed'
        backTopButton.style.left='unset'
        backTopButton.style.top='unset'
    }else if(scrollY>1651&&scrollY<3000){
        backTopButton.style.position='relative'
        backTopButton.style.left='85vw'
        backTopButton.style.top='5vh'
    }else{
        backTopButton.style.display='none'
    }
}

function backTop(){
    document.documentElement.scrollTop = 0;
    backTopButton.style.display='none';
    // console.log(scrollY)
}

backTopButton.addEventListener('click',backTop)
body.addEventListener('wheel',buttonDisplay)

