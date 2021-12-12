"use strict";
cc._RF.push(module, '2a871EH6vJPTpz+VTEqR4r6', 'ControlByRunAct');
// Script/ControlByRunAct.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        Emitter.instance.registerEvent("RIGHT_BY_ACTION", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT_BY_ACTION", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP_BY_ACTION", this.jump.bind(this));
        Emitter.instance.registerEvent("RESET_BY_ACTION", this.reset.bind(this));
    },
    moveRight: function moveRight() {
        cc.warn("RIGHT_BY_ACTION");
        var move = cc.sequence(cc.scaleBy(0.5, 0.8, 0.8), cc.spawn(cc.moveBy(1, 200, 0), cc.scaleTo(1, 1, 1)));
        move.easing();
        this.node.runAction(move);
    },
    moveLeft: function moveLeft() {
        cc.warn("LEFT_BY_ACTION");
    },
    jump: function jump() {

        cc.warn("JUMP_BY_ACTION");
    },
    reset: function reset() {

        cc.warn("RESET_BY_ACTION");
    },
    start: function start() {}
});

cc._RF.pop();