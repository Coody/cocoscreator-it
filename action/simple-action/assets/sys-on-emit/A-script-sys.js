cc.Class({
    extends: cc.Component,

    properties: {
        eventPanel :{
            default: null,
            type:cc.Label,
        }
    },
    
    onLoad: function () {
        //事件机制说明：
        //一句话,事件机制可以解决这种需求：某个条件达成才做某事
        //参数一：eventName 事件名 用于区别监听的事件类型
        //参数二: callback 回调函数 当事件名所描述的条件发生时，触发该函数
        //参数三：target 调用者， 指定调用该回调函数的调用者,通常是回调函数所处的这个对象(this),也可以动态指定别的对象来调用回调函数。
        //node.on('eventName',callback,target);
        
        //鼠标事件回调函数callback
        //参数一 event 事件触发时的现场信息
        //event.getDelta();  返回和上一次触发时鼠标位置的差值 返回值类型: cc.Vec2();  可以通过event.getDelta().x,event.getDelta().y获取
        //event.getDeltaX(); 返回和上一次触发时鼠标位置在X方向上的差值 返回值类型 Number 和上面一样
        //event.getDeltaY(); 返回和上一次触发时鼠标位置在Y方向上的差值 返回值类型 Number 和上面一样
        //event.getLocation(); 返回以当前节点的锚点为坐标原点的鼠标坐标 返回值类型: cc.Vec2(); 可以通过event.getLocation().x,event.getLocation().y获取
        //event.getLocationX(); 返回以当前节点的锚点为坐标原点在X方向上的鼠标坐标 返回值类型 Number 和上面一样
        //event.getLocationY(); 返回以当前节点的锚点为坐标原点在Y方向上的鼠标坐标 返回值类型 Number 和上面一样
        //event.getLocationInView(); 返回以手机屏幕左上(左下？)为坐标原点的鼠标坐标 返回值类型 cc.Vec2(); 可以通过event.getLocationInView().x,event.getLocationInView().y获取
        //event.getScrollX(); 用于'mousewheel'事件 获取鼠标滚轮滚动X差值？鼠标滚轮只能上下滚，也不知道这个怎么用 默认为0
        //event.getScrollY(); 用于'mousewheel'事件 获取鼠标滚轮滚动Y差值？我的鼠标上滚动值为120,下滚动值为-120
        
        var showEventInfo = function(event){
            let type = event.type;
            let delta = event.getDelta();
            let deltaX = event.getDeltaX();
            let deltaY = event.getDeltaY();
            let location = event.getLocation();
            let locationX = event.getLocationX();
            let locationY = event.getLocationY();
            let locationInView = event.getLocationInView();
            let scrollX = event.getScrollX();
            let scrollY = event.getScrollY();
                    
            let msg = 'event.type: ' + type + '\n'
                    + 'event.getDelta().x: '+ delta.x + '\n'
                    + 'event.getDelta().y: '+ delta.y + '\n'
                    + 'event.getDeltaX(): '+ deltaX + '\n'
                    + 'event.getDeltaY(): '+ deltaY + '\n'
                    + 'event.getLocation().x: '+ location.x + '\n'
                    + 'event.getLocation().y: '+ location.y + '\n'
                    + 'event.getLocationX(): '+ locationX + '\n'
                    + 'event.getLocationY(): '+ locationY + '\n'
                    + 'event.getLocationInView().x: '+ locationInView.x  + '\n'
                    + 'event.getLocationInView().y: '+ locationInView.y  + '\n'
                    + 'event.getScrollX(): '+ scrollX + '\n'
                    + 'event.getScrollY(): '+ scrollY + '\n';
                    
            this.eventPanel.string = msg;
            
        }.bind(this);
        
        
        //鼠标类型事件
        //'mousedown'  当鼠标按下时触发一次
        this.node.on('mousedown',function(event){
            this.node.runAction(cc.scaleTo(0.1, 0.8));//尺寸缩小为原来80%
            showEventInfo(event);
        },this);
        
        
        //'mouseenter' 当鼠标移入目标节点区域时触发，不论是否按下
        this.node.on('mouseenter',function(event){
             this.node.runAction(cc.rotateTo(0.1,180));//旋转180度
             showEventInfo(event);
        },this);
        
        //'mousemove'  当鼠标在目标节点在目标节点区域中移动时触发，不论是否按下
        this.node.on('mousemove',function(event){
            //this.node.runAction(cc.rotateBy(0.1,30));//旋转30度
            //showEventInfo(event);
            //move触发太快，这里就不演示了
        },this);
        
        //'mouseleave' 当鼠标移出目标节点区域时触发，不论是否按下
         this.node.on('mouseleave',function(event){
            this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
            showEventInfo(event);
        },this);
        
        //'mouseup'	   当鼠标从按下状态松开时触发一次
        this.node.on('mouseup',function(event){
            this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
            showEventInfo(event);
        },this);
        
        //'mousewheel'	当鼠标滚轮滚动时触发
        this.node.on('mousewheel',function(event){
            this.node.runAction(cc.scaleTo(0.1,event.getScrollY()/120));//获取滚动值来设置大小
            showEventInfo(event);
        },this);
        
        
    },

});
