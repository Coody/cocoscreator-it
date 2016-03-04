> ##guide-demo 

- [x] easing-action(缓动动作)


> #####cc.cardinalSplineTo(duration,points,tesion)
> `duration` Number<br >
> `points`   Array   array of control points<br >
> `tension`  Number<br >

```javascript
   let point1 = cc.v2(0,100);
   let point2 = cc.v2(300,200);
   let point3 = cc.v2(50,400);
  
   let action = cc.cardinalSplineTo(3,[point1,point2,point3],0);
  
   this.node.runAction(action);
```

> #####cc.cardinalSplineBy(duration,points,tesion)
> `duration` Number<br >
> `points`  Array   array of control points<br >
> `tension`  Number<br >

```javascript
   let point1 = cc.v2(0,100);
   let point2 = cc.v2(300,200);
   let point3 = cc.v2(50,400);
  
   let action = cc.cardinalSplineBy(3,[point1,point2,point3],0);
  
   this.node.runAction(action);
```

> #####cc.catmullRomTo(duration,points,tesion)
> `dt` Number<br >
> `points`   Array   array of control points<br >
> `tension`  Number<br >

```javascript
   let point1 = cc.v2(0,100);
   let point2 = cc.v2(300,200);
   let point3 = cc.v2(50,400);
  
   let action = cc.catmullRomTo(3,[point1,point2,point3]);
  
   this.node.runAction(action);
```

> #####cc.catmullRomBy(duration,points,tesion)
> `dt` Number<br >
> `points`   Array   array of control points<br >
> `tension`  Number<br >

```javascript
   let point1 = cc.v2(0,100);
   let point2 = cc.v2(300,200);
   let point3 = cc.v2(50,400);
  
   let action = cc.catmullRomBy(3,[point1,point2,point3]);
  
   this.node.runAction(action);
```

> #####cc.easeIn(rate)
> `rate`     Number<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeIn(3.0)));
```

> #####cc.easeOut(rate)
> `rate`     Number<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeOut(3.0)));
```

> #####cc.easeInOut(rate)
> `rate`     Number<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeInOut(3.0)));
```

> #####cc.easeExponentialIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeExponentialIn()));
```

> #####cc.easeExponentialOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeExponentialOut()));
```

> #####cc.easeExponentialInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeExponentialInOut()));
```

> #####cc.easeSineIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeSineIn()));
```

> #####cc.easeSineOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeSineOut()));
```

> #####cc.easeSineInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeSineInOut()));
```

> #####cc.easeElasticIn([period =0.3])
> `period` Number 应该是周期什么的<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeElasticIn(3.0)));
```

> #####cc.easeElasticOut([period =0.3])
> `period` Number 应该是周期什么的<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeElasticOut(3.0)));
```

> #####cc.easeElasticInOut([period =0.3])
> `period` Number 应该是周期什么的<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeElasticInOut(3.0)));
```

> #####cc.easeBounceIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBounceIn()));
```

> #####cc.easeBounceOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBounceOut()));
```

> #####cc.easeBounceInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBounceInOut()));
```

> #####cc.easeBackIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBackIn()));
```

> #####cc.easeBackOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBackOut()));
```

> #####cc.easeBackInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBackInOut()));
```

> #####cc.easeBezierAction(p1,p2,p3,p4)
> Creates the action easing object. <br >
> Into the 4 reference point.  <br >
> To calculate the motion curve.<br >
> `p0`	Number	The first bezier parameter<br >
> `p1`	Number	The second bezier parameter<br >
> `p2`	Number	The third bezier parameter<br >
> `p3`	Number	The fourth bezier parameter<br >

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeBezierAction(0.5,0.5,1.0,1.0)));
```

> #####cc.easeQuadraticActionIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuadraticActionIn()));
```

> #####cc.easeQuadraticActionOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuadraticActionOut()));
```

> #####cc.easeQuadraticActionInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuadraticActionInOut()));
```

> #####cc.easeQuarticActionIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuarticActionIn()));
```

> #####cc.easeQuarticActionOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuarticActionOut()));
```

> #####cc.easeQuarticActionInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuarticActionInOut()));
```

> #####cc.easeQuinticActionIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuinticActionIn()));
```

> #####cc.easeQuinticActionOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuinticActionOut()));
```

> #####cc.easeQuinticActionInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeQuinticActionInOut()));
```

> #####cc.easeCircleActionIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCircleActionIn()));
```

> #####cc.easeCircleActionOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCircleActionOut()));
```

> #####cc.easeCircleActionInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCircleActionInOut()));
```

> #####cc.easeCubicActionIn()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCubicActionIn()));
```

> #####cc.easeCubicActionOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCubicActionOut()));
```

> #####cc.easeCubicActionInOut()

```javascript
    let action = cc.rotateBy(1,180);
        
    this.node.runAction(action.easing(cc.easeCubicActionInOut()));
```


