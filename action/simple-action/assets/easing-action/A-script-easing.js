cc.Class({
    extends: cc.Component,

    properties: {
        
    },


    onLoad: function () {
        //注: 以下的东西我也说不出是什么=.= 
    },
    
    'on-1cardinalSplineTo':function(){
        //cardinalSplineTo(duration,points,tesion)
        //duration Number
        //points   Array   array of control points
        //tension  Number
        let point1 = cc.v2(0,100);
        let point2 = cc.v2(300,200);
        let point3 = cc.v2(50,400);
        
        let action = cc.cardinalSplineTo(3,[point1,point2,point3],0);
        
        this.node.runAction(action);
    },
    
    'on-2cardinalSplineBy':function(){
        //cardinalSplineBy(duration,points,tesion)
        //duration Number
        //points   Array   array of control points
        //tension  Number
        let point1 = cc.v2(0,100);
        let point2 = cc.v2(300,200);
        let point3 = cc.v2(50,400);
        
        let action = cc.cardinalSplineBy(3,[point1,point2,point3],0);
        
        this.node.runAction(action);
    },
    
    'on-3catmullRomTo':function(){
        //catmullRomTo(duration,points,tesion)
        //dt Number
        //points   Array   array of control points
        //tension  Number
        let point1 = cc.v2(0,100);
        let point2 = cc.v2(300,200);
        let point3 = cc.v2(50,400);
        
        let action = cc.catmullRomTo(3,[point1,point2,point3]);
        
        this.node.runAction(action);
    },
    
    'on-4catmullRomBy':function(){
        //catmullRomBy(duration,points,tesion)
        //dt Number
        //points   Array   array of control points
        //tension  Number
        let point1 = cc.v2(0,100);
        let point2 = cc.v2(300,200);
        let point3 = cc.v2(50,400);
        
        let action = cc.catmullRomBy(3,[point1,point2,point3]);
        
        this.node.runAction(action);
    },
    
    'on-5easeIn':function(){
        //easeIn(rate)
        //rate     Number
        let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeIn(3.0)));
    },
    
    'on-6easeOut':function(){
        //easeOut(rate)  
        //rate     Number
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeOut(3.0)));
    },
    
    'on-7easeInOut':function(){
        //easeInOut(rate)  
        //rate     Number
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeInOut(3.0)));
    },
    
    'on-8easeExponentialIn':function(){
        //easeExponentialIn()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeExponentialIn()));
    },
    
    'on-9easeExponentialOut':function(){
        //easeExponentialOut()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeExponentialOut()));
    },
    
    'on-10easeExponentialInOut':function(){
        //easeExponentialInOut()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeExponentialInOut()));
    },
    
    'on-11easeSineIn':function(){
        //easeSineIn()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeSineIn()));
    },
    
    'on-12easeSineOut':function(){
        //easeSineOut()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeSineOut()));
    },
    
    'on-13easeSineInOut':function(){
        //easeSineInOut()  
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeSineInOut()));
    },
    
    'on-14easeElasticIn':function(){
        //easeElasticIn([period =0.3])  
        //period Number 应该是周期什么的
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeElasticIn(3.0)));
    },
    
    'on-15easeElasticOut':function(){
        //easeElasticOut([period =0.3])  
        //period Number 应该是周期什么的
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeElasticOut(3.0)));
    },
    
    'on-16easeElasticInOut':function(){
        //easeElasticInOut([period =0.3])  
        //period Number 应该是周期什么的
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeElasticInOut(3.0)));
    },
    
    'on-17easeBounceIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBounceIn()));
    },
    
    'on-18easeBounceOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBounceOut()));
    },
    
    'on-19easeBounceInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBounceInOut()));
    },
    
    'on-20easeBackIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBackIn()));
    },
    
    'on-21easeBackOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBackOut()));
    },
    
    'on-22easeBackInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBackInOut()));
    },
    
    'on-23easeBezierAction':function(){
        //Creates the action easing object. 
        //Into the 4 reference point. 
        //To calculate the motion curve.
        //p0	Number	The first bezier parameter
        //p1	Number	The second bezier parameter
        //p2	Number	The third bezier parameter
        //p3	Number	The fourth bezier parameter

         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeBezierAction(0.5,0.5,1.0,1.0)));
    },
    
    'on-24easeQuadraticActionIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuadraticActionIn()));
    },
    
    'on-25easeQuadraticActionOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuadraticActionOut()));
    },
    
    'on-26easeQuadraticActionInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuadraticActionInOut()));
    },
    
    'on-27easeQuarticActionIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuarticActionIn()));
    },
    
    'on-28easeQuarticActionOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuarticActionOut()));
    },
    
    'on-29easeQuarticActionInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuarticActionInOut()));
    },
    
    'on-30easeQuinticActionIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuinticActionIn()));
    },
    
    'on-31easeQuinticActionOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuinticActionOut()));
    },
    
    'on-32easeQuinticActionInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeQuinticActionInOut()));
    },
    
    'on-33easeCircleActionIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCircleActionIn()));
    },
    
    'on-34easeCircleActionOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCircleActionOut()));
    },
    
    'on-35easeCircleActionInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCircleActionInOut()));
    },
    
    'on-36easeCubicActionIn':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCubicActionIn()));
    },
    
    'on-37easeCubicActionOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCubicActionOut()));
    },
    
     'on-38easeCubicActionInOut':function(){
         let action = cc.rotateBy(1,180);
        
        this.node.runAction(action.easing(cc.easeCubicActionInOut()));
    },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

   
});
