let video = document.querySelector('video');
let player = document.querySelector('.player__button');
let control_voice = document.querySelector('input[name="volume"]');
let control_speed = document.querySelector('input[name="playbackRate"]');
let progress = document.querySelector('.progress');
let progress__filled = document.querySelector('.progress__filled');
let btn_10s = document.querySelector('button[data-skip="-10"]');
let btn_25s = document.querySelector('button[data-skip="25"]');
let all_long = 0; //進度條寬度(當前播放時間)
// 如果一開始載入的時候，video.duration在console是有長度的但是我們變數顯示出來是nan，但是當放在監聽事件裡的時候就會是正常的數值
let all_time = 0; //影片總時長
// 因此放在loadedmetadata事件裡，「當指定的音頻/視頻的元數據已加載時，會發生loadedmetadata 事件」，用canplay事件也可以，但是不確定兩個的差異。
video.addEventListener('canplay',function(){
    all_time = video.duration;
    console.log(all_time);
})
progress__filled.style.flexBasis = `${all_long}%`;//預設長度為0
console.log(all_time);
let auto = false; //播放鍵開關，預設不能是true不然開關會壞掉
let mouse_open = false; //進度條開關
let x = 0;

// timeupdate用在影片時間軸跑動的時候
video.addEventListener('timeupdate',function(){
    // 當前播放時間(video.currentTime)除以總時間去得到目前的進度條%數，並且video.currentTime不動
    all_long = video.currentTime / all_time * 100;
    progress__filled.style.flexBasis = `${all_long}%`;
});
// 播放/暫停
player.addEventListener('click',function(){
    if(auto == true){
        player.innerHTML = '►';
        video.pause();
        auto = false;
    }else{
        player.innerHTML = '❚❚';
        video.play();
        auto = true;
    }
});
// 問題：有個盲點是，剛開始all_long時間軸一秒一秒跑是以目前影片時間除以總時長來控制進度條，但是我的更動時間是用滑鼠位置除以總長度來更新all_long，然後兩者居然不會衝突？
// 點擊進度條事件
progress.addEventListener('mousedown',function(e){
    console.dir(progress.offsetWidth);
    // 以滑鼠的位置除以總位置去得到進度條%數
    all_long = (e.offsetX / progress.offsetWidth) * 100;
    console.log(all_long);
    // 原本進度條寬度單純用e.offsetX但是這樣在算影片秒數的時候很麻煩，所以算出點擊位置/總長度的百分比
    progress__filled.style.flexBasis = `${all_long}%`;
    // currentTime是影片播放到幾秒，用總長乘以進度條「百分比」得到影片時長
    video.currentTime = `${all_time * all_long / 100}`;
    mouse_open = true;
});
progress.addEventListener('mouseup',function(e){
    mouse_open = false;
});
// 拖動進度條更改播放的時間
progress.addEventListener('mousemove',function(e){
    if(mouse_open == false) return; //如果不滿足條件就不做事了
    if(mouse_open == true){
        all_long = (e.offsetX / progress.offsetWidth) * 100;
        progress__filled.style.flexBasis = `${all_long}%`;
        video.currentTime = `${all_time * all_long / 100}`;
    }
    console.log(video.currentTime);
});

// console.dir(control_voice);
// 調整音量大小
control_voice.addEventListener('input',function(){
    // console.log(control_voice.value);
    video.volume = control_voice.value;
});
// 調整速度
control_speed.addEventListener('input',function(){
    // console.log(control_speed.value);
    video.playbackRate = control_speed.value;
});
// 倒退10秒
btn_10s.addEventListener('click',function(){
    video.currentTime -= 10; 
});
// 快進25秒
btn_25s.addEventListener('click',function(){
    video.currentTime += 25; 
});

// console.dir(video);
console.log(video.currentTime);
// video.autoplay = true;
// video.volume = false;
// video.playbackRate = 16;
console.log(video.volume);
console.dir(progress__filled.style);
// progress__filled.style.flexBasis = `30%`;
// setInterval(function(){
//     console.log(video.currentTime);
// },1000);