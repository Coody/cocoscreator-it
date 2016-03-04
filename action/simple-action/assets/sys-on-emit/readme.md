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

> #####'mouseenter'  
> `当鼠标移入目标节点区域时触发，不论是否按下` <br >

```javascript
   this.node.on('mouseenter',function(event){
             this.node.runAction(cc.rotateTo(0.1,180));//旋转180度
   },this);
```

> #####'mousemove'  
> `当鼠标在目标节点在目标节点区域中移动时触发，不论是否按下` <br >

```javascript
  this.node.on('mousemove',function(event){
            //this.node.runAction(cc.rotateBy(0.1,30));//旋转30度
  },this);
```

> #####'mouseleave'  
> `当鼠标移出目标节点区域时触发，不论是否按下` <br >

```javascript
   this.node.on('mouseleave',function(event){
            this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
   },this);
```

> #####'mouseup'  
> `当鼠标从按下状态松开时触发一次` <br >

```javascript
  this.node.on('mouseup',function(event){
            this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
  },this);
```

> #####'mousewheel'  
> `当鼠标滚轮滚动时触发` <br >

```javascript
  this.node.on('mousewheel',function(event){
            this.node.runAction(cc.scaleTo(0.1,event.getScrollY()/120));//获取滚动值来设置大小
  },this);
```

> ###鼠标事件的回调参数`event`
> #####'event.type'  
> `事件类型` eg: 'mouseup', 'mousemove'

```javascript
  this.node.on('mouseup',function(event){
            let type = event.type;// 'mouseup'
  },this);
```

> #####'event.getDelta()'  
> `返回和上一次触发时鼠标位置的差值`<br>
> 返回值类型: cc.Vec2()<br>
> eg: event.getDelta().x;event.getDelta().y;<br>

```javascript
  this.node.on('mouseup',function(event){
            let delta = event.getDelta();// cc.Vec2();
            let deltaX = delta.x;
            let deltaY = delta.y;
  },this);
```

> #####'event.getDeltaX()'  
> `返回和上一次触发时鼠标位置X方向上的差值`

```javascript
  this.node.on('mouseup',function(event){
            let deltaX = event.getDeltaX();
  },this);
```

> #####'event.getDeltaY()'  
> `返回和上一次触发时鼠标位置Y方向上的差值`

```javascript
  this.node.on('mouseup',function(event){
            let deltaY = event.getDeltaY();
  },this);
```

> #####'event.getLocation()'  
> `返回以当前节点的锚点为坐标原点的鼠标坐标`<br>
> 返回值类型: cc.Vec2()<br>
> eg: event.getLocation().x;event.getLocation().y;<br>

```javascript
  this.node.on('mouseup',function(event){
            let location = event.getLocation();
            let locationX = location.x;
            let locationY = location.y;
  },this);
```

> #####'event.getLocationX()'  
> `返回以当前节点的锚点为坐标原点X方向上的鼠标坐标`

```javascript
  this.node.on('mouseup',function(event){
            let locationX = event.getLocationX();
  },this);
```

> #####'event.getLocationY()'  
> `返回以当前节点的锚点为坐标原点Y方向上的鼠标坐标`

```javascript
  this.node.on('mouseup',function(event){
            let locationY = event.getLocationY();
  },this);
```

> #####'event.getLocationInView()'  
> `返回以手机屏幕左上(左下？)为坐标原点的鼠标坐标`<br>
> 返回值类型: cc.Vec2() <br>
> eg: event.getLocationInView().x;event.getLocationInView().y; <br>

```javascript
  this.node.on('mouseup',function(event){
            let locationInView = event.getLocationInView();
            let locationInViewX = locationInView.x;
            let locationInViewY = locationInView.y;
  },this);
```

> #####'event.getScrollX()'  
> `用于'mousewheel'事件 获取鼠标滚轮滚动X差值？鼠标滚轮只能上下滚，也不知道这个怎么用 默认为0`

```javascript
  this.node.on('mouseup',function(event){
            let scrollX = event.getScrollX();
  },this);
```

> #####'event.scrollY()'  
> `用于'mousewheel'事件 获取鼠标滚轮滚动Y差值？我的鼠标上滚动值为120,下滚动值为-120`

```javascript
  this.node.on('mouseup',function(event){
            let scrollY = event.getScrollY(); //0(不动滚轮) 或 -120(下滚滚轮) 或 120(上滚滚轮)
  },this);
```

> ###触摸事件

> #####'touchstart'  
> `当手指触摸到屏幕时(节点范围内)` <br >

```javascript
   this.node.on('touchstart',function(event){
             this.node.runAction(cc.rotateTo(0.1,180));//旋转180度
            this.node.runAction(cc.scaleTo(0.1, 0.8));//尺寸缩小为原来80%
   },this);
```

> #####'touchmove'  
> `当手指在屏幕上目标节点区域内移动时` <br >

```javascript
   this.node.on('touchmove',function(event){
            //nothing to do 
   },this);
```

> #####'touchend'  
> `当手指在目标节点区域内离开屏幕时` <br >

```javascript
   this.node.on('touchend',function(event){
             this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
             this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
   },this);
```

> #####'touchcancel'  
> `当手指在目标节点区域外离开屏幕时` <br >

```javascript
   this.node.on('touchcancel',function(event){
      this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
      this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
   },this);
```

> ###触摸事件的回调参数`event`
> #####'event.type'  
> `事件类型` eg: 'touchmove', 'touchend'

```javascript
  this.node.on('touchmove',function(event){
            let type = event.type;// 'touchmove'
  },this);
```

> #####'event.touch.getDelta()'  
> `两次触发该事件触摸点的差值`

```javascript
  this.node.on('touchmove',function(event){
            let delta = event.touch.getDelta();// cc.Vec2()
            let deltaX = delta.x;
            let deltaY = delta.y;
  },this);
```

> #####'event.touch.getLocation()'  
> `触摸点位置`

```javascript
  this.node.on('touchmove',function(event){
            let location = event.touch.getLocation();// cc.Vec2()
            let locationX = location.x;
            let locationY = location.y;
  },this);
```

> #####'event.touch.getLocationX()'  
> `触摸点在X方向的位置`

```javascript
  this.node.on('touchmove',function(event){
            let locationX = event.touch.getLocationX();
  },this);
```

> #####'event.touch.getLocationY()'  
> `触摸点在Y方向的位置`

```javascript
  this.node.on('touchmove',function(event){
            let locationY = event.touch.getLocationY();
  },this);
```

> #####'event.touch.getLocationInView()'  
> `触摸点在屏幕坐标的位置`

```javascript
  this.node.on('touchmove',function(event){
            let locationInView = event.touch.getLocationInView();
            let locationInViewX = locationInView.x;
            let locationInViewY = locationInView.y;
  },this);
```

> #####'event.touch.getPreviousLocation()'  
> `和上面一样？`

```javascript
  this.node.on('touchmove',function(event){
            let previousLocation = event.touch.getPreviousLocation();
            let previousLocationX = previousLocation.x;
            let previousLocationY = previousLocation.y;
  },this);
```

> #####'event.touch.getPreviousLocationInView()'  
> `和上面一样？用的屏幕坐标？`

```javascript
  this.node.on('touchmove',function(event){
            let previousLocationInView = event.touch.getPreviousLocationInView();
            let previousLocationInViewX = previousLocationInView.x;
            let previousLocationInViewY = previousLocationInView.y;
  },this);
```

> #####'event.touch.getStartLocation()'  
> `触摸点最开始触摸的位置(移动触摸点该值不变)`

```javascript
  this.node.on('touchmove',function(event){
            let startLocation = event.touch.getStartLocation();
            let startLocationX = startLocation.x;
            let startLocationY = startLocation.y;
  },this);
```

> #####'event.touch.getStartLocationInView()'  
> `触摸点最开始触摸的位置(移动触摸点该值不变) 用的屏幕坐标？`

```javascript
  this.node.on('touchmove',function(event){
            let startLocationInView = event.touch.getStartLocationInView();
            let startLocationInViewX = startLocationInView.x;
            let startLocationInViewY = startLocationInView.y;
  },this);
```
