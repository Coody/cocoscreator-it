cc.Class({
    extends: cc.Component,

    properties: {
        fore:{//每个人都监听来自前一个人的消息
            default:null,
            type: cc.Node,
        },
    },

    // use this for initialization
    onLoad: function () {
        //自定义事件
        //自定义事件和系统事件不同的是
        //需要在代码中手动触发
        //其他的和系统事件没有区别
        //node.emit('eventName',message);
        //node.on('eventName',callBack,target);
        //callBack(event){
        //      (event.detail === message) //true!    
        //}
        
        
        
        if(this.fore)//如果有前一个人
        this.fore.on('hello!',this.doAction,this);//我们就监听来自前一个人的消息 
        
        this.node.on('mouseup',function(){        //如果我们被点击
            this.node.emit('hello!',this.node.name);//就向身后一个人发消息,消息为自己的名字
            this.node.getChildByName('msg').getComponent(cc.Label).string = 'hello!~~';//和身后的伙伴们打声招呼吧~
        },this);
    },
    
    doAction:function(event){   //收到消息了哦
        let action1 = cc.scaleTo(0.1,-1,0).easing(cc.easeBackOut());
        let action2 = cc.rotateBy(0.1,360).easing(cc.easeBackOut());
        let action12 = cc.spawn(action1,action2);                   //一起摇摆~
        
        let callNext = cc.callFunc(this.callNext,this,event);       //向身后一个人继续发消息哦
        
        let action3 = cc.scaleTo(0.1,1,1).easing(cc.easeBackOut());
        let action4 = cc.rotateBy(0.1,-360).easing(cc.easeBackOut());
        let action34 = cc.spawn(action3,action4);                   //一起摇摆~
        
        this.node.runAction(cc.sequence(action12,callNext,action34));
    },
    
    callNext:function(myCaller,event){
        this.node.emit('hello!',event.detail);          //我们要保持消息的一致 一开始的名字被存在event.detail中了
        this.node.getChildByName('msg').getComponent(cc.Label).string = 'hello! '+ event.detail; //和一开始的伙伴打声招呼吧~
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
