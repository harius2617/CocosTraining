const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT_BY_TWEEN", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT_BY_TWEEN", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP_BY_TWEEN", this.jump.bind(this));
        Emitter.instance.registerEvent("RESET_BY_TWEEN", this.reset.bind(this));
    },
    
    start() {
    },

    moveRight() {
        cc.warn("RIGHT_BY_TWEEN")
        cc.tween(this.node) 
            .to(0, {scaleX: 1})
            .by(1, {position: cc.v2(200,0)}, {easing: "backInOut"})
            .start()
    },

    moveLeft() {
        cc.warn("LEFT_BY_TWEEN")
        cc.tween(this.node)
            .to(0, {scaleX: -1})
            .by(1, {position: cc.v2(-200,0)}, {easing: "backInOut"})
            .start()
    },

    jump() {
        cc.warn("JUMP_BY_TWEEN")
        let t = cc.tween;
        t(this.node)
            .parallel(
                t().by(1, {position: cc.v2(0, 100)},{ easing: "sinceInOut"}),
                t().by(1, {angle: 180})
            )
            .parallel(
                t().by(1, {position: cc.v2(0, -100)},{ easing: "sinceInOut"}),
                t().by(0.5, {angle: 180})
            )
            .start()
    },

    reset(){
        cc.warn("RESET_BY_TWEEN")
        cc.tween(this.node)
            .to(0, {position: this.firstPos})
            .start()
    },


    // update (dt) {},
});
