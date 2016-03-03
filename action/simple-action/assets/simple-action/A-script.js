var A = cc.Class({
    extends: cc.Component,

    properties: {
        callbacklabel:{
            default: null,
            type: cc.Label,
        }
    },
    

    onLoad: function () {
    },
    
    
    'on-show':function(){
        //显示节点
        //cc.show()
        //warn:貌似没有效果
        console.log('on-show');
        this.node.runAction(cc.show());
    },
    
    'on-hide':function(){
        //隐藏节点
        //cc.Hide()
        //warn:貌似没有效果
        console.log('on-hide');
        this.node.runAction(cc.hide());
    },
    
    'on-toggleVisibility':function(){
        //显示节点和隐藏节点和结合
        //cc.toggleVisibility()
        //warn:貌似没有效果
        console.log('on-toggleVisibility');
        this.node.runAction(cc.toggleVisibility());
    },
    
    'on-removeSelf':function(){
        //移除自身
        //参数一 [isNeedCleanUp = true ] 移除的同时是否清空内存？ 好像是这样吧 默认值为true
        //cc.removeSelf([isNeedCleanUp = true]);
        //this.node.runAction(cc.removeSelf());
    },
    
    'on-flipX':function(){
        //左右立即翻转
        //参数一 flip 如果为true就左翻，false就右翻？ 好像是， 没有默认值。
        //cc.flipX(flip);
        //warn:貌似没有效果
        console.log('on-flipX');
        this.node.runAction(cc.flipX(true));
    },
    
    'on-flipY':function(){
        //上下立即翻转
        //参数一 flip 如果为true就左翻，false就右翻？ 好像是， 没有默认值。
        //cc.flipY(flip);
        //warn:貌似没有效果
        console.log('on-flipY');
        this.node.runAction(cc.flipY(true));
    },
    
    'on-place':function(){
        //设置位置
        //参数一 pos cc.Vec2(x,y)类型 表示的位置
        //参数二 [y ] 位置的y值 
        //解释 也就是说可以用下面两种方式
        //cc.place(pos, [y ]);
        //this.node.runAction(cc.place(cc.v2(50,50)));
        //this.node.runAction(cc.place(50,50));
        console.log('on-place');
        this.node.runAction(cc.place(0,0));  //设置当前节点的位置为(0px,0px) 注：父节点锚点(Anchor)的位置为(0px,0px)
    },
    
    'on-callFunc':function(){
        //回调
        //参数一 selector function类型 表示要执行的函数
        //参数二 [selectorTarget ] 表示执行该函数的对象 
        //参数三 [data ]   传递给函数的参数
        //cc.callFunc(selector, [selectorTarget ],[data ]);
        console.log('on-callFunc');
        this.node.runAction(cc.callFunc(this.mycallback,this,{a:'cocos',b:'creator'}));
    },
    
    mycallback : function(target,data){
            //这个回调函数会收到两个参数
            //第一个是回调这个函数的组件所在的节点 即this.node
            //第二个是我们传进来的参数对象了{a:'cocos',b:'creator'},
            let AScript = target.getComponent('A-script');
            AScript.callbacklabel.string = data.a+data.b;
    },
    
    'on-sequence':function(){
        //序列动画 可以让动画一个接一个地执行
        //参数一 tempArray 需要顺序执行的一组动画
        let action1 = cc.rotateTo(1,180);
        let action2 = cc.rotateTo(1,0);
        //可以单独传
        //this.node.runAction(cc.sequence(action1,action2));
        //也可以扔一个数组
        //cc.sequence(tempArray);
        console.log('on-sequence');
        let actionsArray = [action1,action2];
        this.node.runAction(cc.sequence(actionsArray));
    },
    
    'on-repeat':function(){
        //重复动画
        //参数一 action 需要执行的动画
        //参数二 times  执行次数
        //cc.repeat(action,times);
        console.log('on-repeat');
        this.node.runAction(cc.repeat(cc.rotateBy(1,90),5));//旋转5个90度
    },
    
    'on-repeatForever':function(){
        //无限重复动画
        //参数一 action 需要执行的动画
        //cc.repeatForever(action)
        console.log('on-repeatForever');
        this.node.runAction(cc.repeatForever(cc.rotateBy(1,180)));
    },
    
    'on-spawn':function(){
        //并行动画
        //参数一 tempArray 需要同时执行的一组动画
        let action1 = cc.rotateBy(1,90);
        let action2 = cc.scaleTo(1,1.5);
         //可以单独传
        //this.node.runAction(cc.spawn(action1,action2));
        //也可以扔一个数组
        //cc.spawn(tempArray);
        console.log('on-spawn');
        let actionsArray = [action1,action2];
        this.node.runAction(cc.spawn(actionsArray));
    },
    
    'on-rotateTo':function(){
        //绝对旋转
        //参数一 duration 持续时间
        //参数二 deltaAngleX X方向旋转角度 
        //tips: 旋转角度计算规律 最终角度angle为 angle = inputAngle%360>180?inputAngle%360-180:inputAngle%360
        //参数三 [deltaAngleY ] Y方向旋转角度 没用过，大家可以试下
        //cc.rotateTo(duration,deltaAngleX,[deltaAngleY ]);
        console.log('on-rotateTo');
        this.node.runAction(cc.rotateTo(1,180)); //一秒转到180度
    },
    
    'on-rotateBy':function(){
        //相对旋转
        //参数一 duration 持续时间
        //参数二 deltaAngleX X方向旋转角度 好像是顺时针
        //参数三 [deltaAngleY ] Y方向旋转角度 没用过，大家可以试下 
        //cc.rotateTo(duration,deltaAngleX,[deltaAngleY ]);
        console.log('on-rotateBy');
        this.node.runAction(cc.rotateBy(1,90)); //一秒内加转90度
    },
    
    'on-moveTo':function(){
        //绝对移动
        //参数一 duration 持续时间
        //参数二 position cc.Vec2()类型 绝对目标位置
        //参数三 [y ] 绝对目标位置y值 
        //解释 也就是说可以用下面两种方式
        //cc.moveTo(duration,position,[y ])
        //this.node.runAction(cc.moveTo(cc.v2(150,150)));
        console.log('on-moveTo');
        this.node.runAction(cc.moveTo(1,50,50));  //一秒内移到(150px,150px)的位置
    },
    
    'on-moveBy':function(){
        //相对移动
        //参数一 duration 持续时间
        //参数二 position cc.Vec2()类型 相对目标位置
        //参数三 [y ] 相对目标位置y值 
        //解释 也就是说可以用下面两种方式
        //cc.moveBy(duration,position,[y ])
        //this.node.runAction(cc.moveBy(cc.v2(150,150)));
        console.log('on-moveBy');
        this.node.runAction(cc.moveBy(1,150,150));  //一秒内移到以当前位置Wie参考点加(150px,150px)的位置
    },
    
    //还有一部分没更完，我逐步push上来吧

    
});
