const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {
    },

    moveRight() {
        cc.tween(this.node) 
            .to(0, {scaleX: 1})
            .by(1, {position: cc.v2(100,0)})
            .start()
    },

    moveLeft() {
        cc.tween(this.node)
            .to(0, {scaleX: -1})
            .by(1, {position: cc.v2(-100,0)})
            .start()
    },

    jump() {
        let t = cc.tween;
        t(this.node)
            .parallel(
                t().by(0.5, {position: cc.v2(0, 100)},{ easing: "sinceInOut"}),
                t().by(1, {rotation: 180})
            )
            .parallel(
                t().by(1, {position: cc.v2(0, -100)},{ easing: "sinceInOut"}),
                t().by(1, {rotation: 180})
            )
            .start()
    },

    reset(){
        cc.tween(this.node)
            .to(0, {position: this.firstPos})
            .start()
    },

    onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerOnce("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this));
        Emitter.instance.registerOnce("RESET", this.reset.bind(this));
    },

    start() {
    },

    // update (dt) {},
});
