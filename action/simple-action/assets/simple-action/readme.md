> ##guide-demo 

- [x] simple-action(简单动作)


> #####cc.place(pos, [y ])
> `设置位置` <br >
> 参数一 pos cc.Vec2(x,y)类型 目标位置  `注:参考的坐标原点为父节点的锚点 父节点锚点默认为(0.5,0.5)`<br >
> 参数二 [y ] 位置的y值  <br >
> 解释 也就是说可以用下面两种方式 <br >

```javascript
  this.node.runAction(cc.place(cc.v2(50,50))); 
  this.node.runAction(cc.place(50,50));  
```


