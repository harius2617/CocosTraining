(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/controlByTween.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5e465edQqVH05GRBuWybKck', 'controlByTween', __filename);
// Script/controlByTween.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,

    properties: {},

    moveRight: function moveRight() {
        cc.tween(this.node).to(0, { scaleX: 1 }).by(1, { position: cc.v2(100, 0) }).start();
    },
    moveLeft: function moveLeft() {
        cc.tween(this.node).to(0, { scaleX: -1 }).by(1, { position: cc.v2(-100, 0) }).start();
    },
    jump: function jump() {
        var t = cc.tween;
        t(this.node).parallel(t().by(0.5, { position: cc.v2(0, 100) }, { easing: "sinceInOut" }), t().by(1, { rotation: 180 })).parallel(t().by(1, { position: cc.v2(0, -100) }, { easing: "sinceInOut" }), t().by(1, { rotation: 180 })).start();
    },
    reset: function reset() {
        cc.tween(this.node).to(0, { position: this.firstPos }).start();
    },
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerOnce("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this));
        Emitter.instance.registerOnce("RESET", this.reset.bind(this));
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=controlByTween.js.map
        