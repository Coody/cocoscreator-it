> ##guide-demo 

- [x] sys-on-emit(系统事件)

> ###事件机制说明：<br >
> 一句话,事件机制可以解决这种需求：`某个条件达成才做某事` <br >
> node.on('eventName',callback,target);<br >
> 参数一：eventName 事件名 用于区别监听的事件类型<br >
> 参数二: callback 回调函数 当事件名所描述的条件发生时，触发该函数<br >
> 参数三：target 调用者， 指定调用该回调函数的调用者,通常是回调函数所处的这个对象(this),也可以动态指定别的对象来调用回调函数。<br >

> ###鼠标事件

> #####'mousedown'  
> `当鼠标按下时触发一次` <br >

```javascript
   this.node.on('mousedown',function(event){
            this.node.runAction(cc.scaleTo(0.1, 0.8));//尺寸缩小为原来80%
   },this); 
```
