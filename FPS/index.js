//60FPS
//1000 / 60 = 16.666666666666668
//一帧就是16.6ms
//1.处理用户的事件，就是event 例如 click，input change 等。
//2.执行定时器任务
//3.执行 requestAnimationFrame
//4.执行dom 的回流与重绘
//5.计算更新图层的绘制指令
//6.绘制指令合并主线程 如果有空余时间会执行 requestidlecallback

//第二种情况
//第二种情况是没有任务执行浏览器会有50ms空闲时间，这个时间段也会执行 requestidlecallback

//预加载相关的东西
requestIdleCallback(function (deadline) {
    console.log(deadline.timeRemaining());
})

//react相关人员调研 requestIdleCallback 有机会是20ms执行的 polyfill
//react16 postMessage  + requestAnimationFrame
//setTimeout 0 是4ms
//react18 MessageChannel 实现了requestIdleCallback 的polyfill
let {port1,port2} = new MessageChannel()
//onmessage 隐试开启start
port1.onmessage = function(e){
    console.log('收到了port2的消息',e)
}

port2.onmessage = function(e){
    console.log('收到了port1的消息',e)
}

port1.postMessage('hello')
port2.postMessage('world')