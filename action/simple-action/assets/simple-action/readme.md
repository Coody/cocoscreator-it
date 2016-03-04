> ##guide-demo 

- [x] simple-action(简单动作)


> #####cc.place(pos, [y ])
> `设置位置` <br >
> 参数一 `pos` cc.Vec2(x,y)类型 目标位置  `注:参考的坐标原点为父节点的锚点 父节点锚点默认为(0.5,0.5)`<br >
> 参数二 `[y ]` 位置的y值  <br >
> 解释 也就是说可以用下面两种方式 <br >

```javascript
   this.node.runAction(cc.place(cc.v2(50,50))); 
   this.node.runAction(cc.place(50,50));  
```

> #####cc.callFunc(selector, [selectorTarget ],[data ])
> `回调` <br >
> 参数一 `selector` function类型 表示要执行的函数<br >
> 参数二 `[selectorTarget ]` 表示执行该函数的对象<br >
> 参数三 `[data ]`   传递给函数的参数<br >

```javascript
   this.node.runAction(cc.callFunc(this.mycallback,this,{a:'cocos',b:'creator'}));
   ...
   mycallback : function(target,data){
            //这个回调函数会收到两个参数
            //第一个是回调这个函数的组件所在的节点 即this.node
            //第二个是我们传进来的参数对象了{a:'cocos',b:'creator'},
            let AScript = target.getComponent('A-script-simple');
            AScript.callbacklabel.string = data.a+data.b;
    },
```

> #####cc.sequence(tempArray)
> `序列动画 可以让动画一个接一个地执行` <br >
> 参数一 `tempArray` 需要顺序执行的一组动画<br >

```javascript
    let action1 = cc.rotateTo(1,180);
    let action2 = cc.rotateTo(1,0);
    //动画可以单独传
    //this.node.runAction(cc.sequence(action1,action2));
    //也可以扔一个数组
    //cc.sequence(tempArray);
    let actionsArray = [action1,action2];
    this.node.runAction(cc.sequence(actionsArray));
```

> #####cc.repeat(action,times)
> `重复动画` <br >
> 参数一 `action` 需要执行的动画<br >
> 参数二 `times`  执行次数<br >

```javascript
   this.node.runAction(cc.repeat(cc.rotateBy(1,90),5));//旋转5个90度
```

> #####cc.repeatForever(action)
> `无限重复动画` <br >
> 参数一 `action` 需要执行的动画<br >

```javascript
   this.node.runAction(cc.repeatForever(cc.rotateBy(1,180)));
```

> #####cc.spawn(tempArray)
> `并行动画` <br >
> 参数一 `tempArray` 需要同时执行的一组动画<br >

```javascript
   let action1 = cc.rotateBy(1,90);
        let action2 = cc.scaleTo(1,1.5);
         //可以单独传
        //this.node.runAction(cc.spawn(action1,action2));
        //也可以扔一个数组
        //cc.spawn(tempArray);
        let actionsArray = [action1,action2];
        this.node.runAction(cc.spawn(actionsArray));
```

> #####cc.rotateTo(duration,deltaAngleX,[deltaAngleY ])
> `绝对旋转` <br >
> 参数一 `duration` 持续时间<br >
> 参数二 `deltaAngleX` X方向旋转角度<br >
> `注: 旋转角度计算规律 最终角度angle为 angle = inputAngle%360>180?inputAngle%360-180:inputAngle%360 换句话说，一次旋转不超过180°`<br>
> 参数三 `[deltaAngleY ]` Y方向旋转角度 没用过，大家可以试下<br >

```javascript
   this.node.runAction(cc.rotateTo(1,180)); //一秒转到180度
```

> #####cc.rotateBy(duration,deltaAngleX,[deltaAngleY ])
> `相对旋转` <br >
> 参数一 `duration` 持续时间<br >
> 参数二 `deltaAngleX` X方向旋转角度<br >
> `注: 旋转角度计算规律 最终角度angle为 angle = inputAngle%360>180?inputAngle%360-180:inputAngle%360 换句话说，一次旋转不超过180°`<br>
> 参数三 `[deltaAngleY ]` Y方向旋转角度 没用过，大家可以试下<br >

```javascript
   this.node.runAction(cc.rotateBy(1,90)); //一秒内加转90度
```

> #####cc.moveTo(duration,position,[y ])
> `绝对移动` <br >
> 参数一 `duration` 持续时间<br >
> 参数二 `position` cc.Vec2()类型 绝对目标位置<br >
> 参数三 `[y ]` 绝对目标位置y值 <br >
> 解释 也就是说可以用下面两种方式

```javascript
   this.node.runAction(cc.moveTo(cc.v2(150,150)));
   this.node.runAction(cc.moveTo(1,50,50));  //一秒内移到(50px,50px)的位置
```

> #####cc.moveBy(duration,position,[y ])
> `相对移动` <br >
> 参数一 `duration` 持续时间<br >
> 参数二 `position` cc.Vec2()类型 绝对目标位置<br >
> 参数三 `[y ]` 绝对目标位置y值 <br >
> 解释 也就是说可以用下面两种方式

```javascript
   this.node.runAction(cc.moveBy(cc.v2(150,150)));
   this.node.runAction(cc.moveBy(1,150,150));  //一秒内移到以当前位置参考点加(150px,150px)的位置
```

