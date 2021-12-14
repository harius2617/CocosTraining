// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        isColli: false
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {

        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },

    onCollisionEnter: function (other, self) {
        this.isColli = true
        console.log('on collision enter');
    },

    onCollisionStay: function (other, self) {
        console.log('on collision stay');
    },

    onCollisionExit: function (other, self) {
        console.log('on collision exit');
    },

    start () {

    },

    jump() {
        let t = cc.tween;
        t(this.node)
            .delay(2)
            .parallel(
                t().to(1, {scaleY: 0.15}),
                t().by(1, {position: cc.v2(0, 100)}),
            )
            .start()
    },

    update (dt) {
        if(this.isColli){
            this.node.y = this.node.y;
            this.jump()
        }else{
            this.node.y -= dt*100;
        }

    },
});