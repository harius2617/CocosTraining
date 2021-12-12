const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
    },

    onLoad(){
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT_BY_ACTION", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT_BY_ACTION", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP_BY_ACTION", this.jump.bind(this));
        Emitter.instance.registerEvent("RESET_BY_ACTION", this.reset.bind(this));

    },

    moveRight(){
        cc.warn("RIGHT_BY_ACTION")
        let move = cc.sequence(
            cc.scaleBy(0.5, 0.8, 0.8),
            cc.spawn(
                cc.moveBy(1, 200, 0),
                cc.scaleTo(1, 1, 1)
            )
        )
        move.easing()
        this.node.runAction(move)
    },

    moveLeft(){
        cc.warn("LEFT_BY_ACTION")
        let move = cc.sequence(
            cc.scaleBy(0.5, 0.8, 0.8),
            cc.spawn(
                cc.moveBy(1, -200, 0),
                cc.scaleTo(1, 1, 1)
            )
        )
        
        this.node.runAction(move)
    },

    jump(){
        let move = cc.sequence(
            cc.moveBy(1, 0, 200),
            cc.moveBy(1, 0, -200)
        )
        move.easing(cc.easeCubicActionInOut(3.0))
        this.node.runAction(move)
        cc.warn("JUMP_BY_ACTION")
    },

    reset() {
        this.node.position = this.firstPos
        cc.warn("RESET_BY_ACTION")
    },

    start () {

    },
});
