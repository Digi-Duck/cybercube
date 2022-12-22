const appear =document.querySelector(".nav-left")
const body =document.querySelector("body")
console.log(body.offsetHeight)
document.addEventListener('scroll',function(){
    let currentPos =  window.scrollY;
    let lastPos =  window.scrollY;
    //   往下滑
    console.log(appear.style.top)
    
    if(currentPos <(body.offsetHeight/4) ){
        appear.style.display = "none"; //讓nav bar消失
        
    }else{
        appear.style.display = ""; //讓nav bar出現
    }
    lastPos = currentPos;//再記住現在位置，跟未來的位置做比較
  });