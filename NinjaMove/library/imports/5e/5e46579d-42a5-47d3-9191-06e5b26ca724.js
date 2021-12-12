"use strict";
cc._RF.push(module, '5e465edQqVH05GRBuWybKck', 'controlByTween');
// Script/controlByTween.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {},

    moveRight: function moveRight() {
        cc.tween(this.node).to(0, { scaleX: 1 }).by(1, { position: cc.v2(200, 0) }, { easing: "backInOut" }).start();
    },
    moveLeft: function moveLeft() {
        cc.tween(this.node).to(0, { scaleX: -1 }).by(1, { position: cc.v2(-200, 0) }, { easing: "backInOut" }).start();
    },
    jump: function jump() {
        var t = cc.tween;
        t(this.node).parallel(t().by(1, { position: cc.v2(0, 100) }, { easing: "sinceInOut" }), t().by(1, { rotation: 180 })).parallel(t().by(1, { position: cc.v2(0, -100) }, { easing: "sinceInOut" }), t().by(0.5, { rotation: 180 })).start();
    },
    reset: function reset() {
        cc.tween(this.node).to(0, { position: this.firstPos }).start();
    },
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this));
        Emitter.instance.registerEvent("RESET", this.reset.bind(this));
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();