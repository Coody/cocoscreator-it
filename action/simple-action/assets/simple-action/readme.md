> ##guide-demo 

- [x] simple-action(简单动作)


> #####cc.place(pos, [y ])
设置位置
参数一 pos cc.Vec2(x,y)类型 表示的位置
参数二 [y ] 位置的y值 
解释 也就是说可以用下面两种方式
cc.place(pos, [y ]);
this.node.runAction(cc.place(cc.v2(50,50)));
this.node.runAction(cc.place(50,50));


