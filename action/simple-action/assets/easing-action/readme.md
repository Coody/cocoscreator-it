> ##guide-demo 

- [x] easing-action(缓动动作)


> #####cardinalSplineTo(duration,points,tesion)
> duration Number<br >
> points   Array   array of control points<br >
> tension  Number<br >

```javascript
   let point1 = cc.v2(0,100);
        let point2 = cc.v2(300,200);
        let point3 = cc.v2(50,400);
        
        let action = cc.cardinalSplineTo(3,[point1,point2,point3],0);
        
        this.node.runAction(action);
```
