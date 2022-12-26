const backTopButton=document.querySelector('section:nth-child(7) button');
const body=document.querySelector('body');

const button=document.querySelector('.omg button');
const sideMap=document.querySelector('#section1__sitemap')
let n=1;

button.addEventListener('click',function(){
    if(n%2==1){
        sideMap.style.display='block';
        n++;
        return n;
        
    }else{
        sideMap.style.display='none';
        n++;
        return n;
    }
    
    
})

console.log(button)

function buttonDisplay(){
    if(scrollY>850&&scrollY<1650){
        backTopButton.style.display='block'
        backTopButton.style.position='fixed'
        backTopButton.style.left='unset'
        backTopButton.style.top='unset'
    }else if(scrollY>1651&&scrollY<3000){
        backTopButton.style.position='relative'
        backTopButton.style.left='84.5vw'
        backTopButton.style.top='2.5vh'
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

