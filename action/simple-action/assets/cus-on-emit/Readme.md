> ##guide-demo 

- [x] cus-on-emit(自定义事件)

> ###事件机制说明：<br >
> 一句话,事件机制可以解决这种需求：`某个条件达成才做某事` <br >
> node.on('eventName',callback,target);<br >
> 参数一：eventName 事件名 用于区别监听的事件类型<br >
> 参数二: callback 回调函数 当事件名所描述的条件发生时，触发该函数<br >
> 参数三：target 调用者， 指定调用该回调函数的调用者,通常是回调函数所处的这个对象(this),也可以动态指定别的对象来调用回调函数。<br >

> node.emit('eventName',detail);<br >
> 参数一：eventName 事件名 用于区别监听的事件类型<br >
> 参数二: detail 传递给回调函数的参数<br >

> callback(event);<br >
> 参数一：event 事件 emit发送的信息在`event.detail`<br >



