cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        this.node.runAction(cc.rotateTo(1, 0).easing(cc.easeElasticInOut(1.0)));
        this.node.runAction(cc.scaleTo(1, 1, 1).easing(cc.easeElasticInOut(1.0)));
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
