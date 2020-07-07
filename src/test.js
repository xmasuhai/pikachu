// 模块化
import stringDefault from './stringDefault.js'
import string from './string.js'
import stringAnimation from './stringAnimation.js'

const player = {
    id: undefined,
    n: 1,
    intervalTime: 80,
    ui: {
        demo: document.querySelector('#demo'),
        demo2: document.querySelector('#demo2')
    },
    events : {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = stringDefault + string.substr(0, player.n)
    player.eventBind()
    player.play()
    },
    eventBind: () => {
        /*
        for(let key in player.events) {
            // console.log(player.events);
            // console.log(player.events[key]);
            // console.log(typeof player.events[key]);
            // 防御型编程

            /!* 避免取到原型链上的属性 *!/
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key] // pause /play / slow /...
                document.querySelector(key).onclick = player[value]
            }
        }
*/
        Object.getOwnPropertyNames(player.events).forEach(
            (key) => {

                // 防御型编程

                /* 避免取到原型链上的属性 */
                const value = player.events[key] // pause /play / slow /...
                // console.log(player.events);
                // console.log(player.events[key]);
                // console.log(typeof player.events[key]);
                document.querySelector(key).onclick = player[value]
            });
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    run:() => {
        player.n += 1
        if(player.n > string.length){
            player.pause()
            player.ui.demo2.innerHTML += stringAnimation
            return
        }
        player.ui.demo.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = stringDefault + string.substr(0, player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight
    },
    play:() => {
        player.pause()
        player.id = setInterval(player.run, player.intervalTime)
    },
    slow: () => {
        player.pause()
        player.intervalTime = 80
        player.play()
    },
    normal: () => {
        player.pause()
        player.intervalTime = 16
        player.play()
    },
    fast: () => {
        player.pause()
        player.intervalTime = 0
        player.play()
    }
}
player.init()
