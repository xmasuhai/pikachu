// 模块化
import stringDefault from './stringDefault.js';
import string from './string.js';
import stringAnimation from './stringAnimation.js';

let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = stringDefault + string.substr(0, n);

let intervalTime = 80;
const run = () => {
    n += 1;
    if(n > string.length){
        window.clearInterval(id);
        demo2.innerHTML += stringAnimation;
        return
    }
    demo.innerText = string.substr(0, n);
    demo2.innerHTML = stringDefault + string.substr(0, n);
    demo.scrollTop = demo.scrollHeight;
}
const play = () => {
    return setInterval(run, intervalTime);
}
const pause = () => {
    window.clearInterval(id);
}
let id = play();
const slow = () => {
    pause();
    intervalTime = 80;
    id = play();
}
const normal = () => {
    pause();
    intervalTime = 16;
    id = play();
}
const fast = () => {
    pause();
    intervalTime = 0;
    id = play();
}
btnPause.onclick = pause;
btnPlay.onclick = () => {
    id = play();
}
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;