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
        
        //触摸事件回调函数callback
        //参数一 event 事件触发时的现场信息
        //=。=说不清楚，看demo-online吧
        
        var showEventInfo = function(event){
            let type = event.type;
            let delta = event.touch.getDelta();
            let location = event.touch.getLocation();
            let locationX = event.touch.getLocationX();
            let locationY = event.touch.getLocationY();
            let locationInView = event.touch.getLocationInView();
            let previousLocation = event.touch.getPreviousLocation();
            let previousLocationInView = event.touch.getPreviousLocationInView();
            let startLocation = event.touch.getStartLocation();
            let startLocationInView = event.touch.getStartLocationInView();
                    
            let msg = 'event.type: ' + type + '\n'
                    + 'event.touch.getDelta().x: '+ delta.x + '\n'
                    + 'event.touch.getDelta().y: '+ delta.y + '\n'
                    + 'event.touch.getLocation().x: '+ location.x + '\n'
                    + 'event.touch.getLocation().y: '+ location.y + '\n'
                    + 'event.touch.getLocationX(): '+ locationX + '\n'
                    + 'event.touch.getLocationY(): '+ locationY + '\n'
                    + 'event.touch.getLocationInView().x: '+ locationInView.x  + '\n'
                    + 'event.touch.getLocationInView().y: '+ locationInView.y  + '\n'
                    + 'event.touch.getPreviousLocation().x: '+ previousLocation.x  + '\n'
                    + 'event.touch.getPreviousLocation().y: '+ previousLocation.y  + '\n'
                    + 'event.touch.getPreviousLocationInView().x: '+ previousLocationInView.x  + '\n'
                    + 'event.touch.getPreviousLocationInView().y: '+ previousLocationInView.y  + '\n'
                    + 'event.touch.getStartLocation().x: '+ startLocation.x  + '\n'
                    + 'event.touch.getStartLocation().y: '+ startLocation.y  + '\n'
                    + 'event.touch.getStartLocationInView().x: '+ startLocationInView.x  + '\n'
                    + 'event.touch.getStartLocationInView().y: '+ startLocationInView.y  + '\n'
            
                    
             this.eventPanel.string = msg;
            
        }.bind(this);
        
        
        //触摸类型事件
        //'touchstart'	当手指触摸到屏幕时
        this.node.on('touchstart',function(event){
             this.node.runAction(cc.rotateTo(0.1,180));//旋转180度
            this.node.runAction(cc.scaleTo(0.1, 0.8));//尺寸缩小为原来80%
            showEventInfo(event);
        },this);
        
        
        //'touchmove'	当手指在屏幕上目标节点区域内移动时
        this.node.on('touchmove',function(event){
             showEventInfo(event);
        },this);
        
        //'touchend'	当手指在目标节点区域内离开屏幕时
        this.node.on('touchend',function(event){
             this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
             this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
			 showEventInfo(event);
        },this);
        
        //'touchcancel'	当手指在目标节点区域外离开屏幕时
         this.node.on('touchcancel',function(event){
            this.node.runAction(cc.rotateTo(0.1,0));//旋转180度复原
            this.node.runAction(cc.scaleTo(0.1, 1));//尺寸放大为100%
            showEventInfo(event);
        },this);

        
        
    },

});
