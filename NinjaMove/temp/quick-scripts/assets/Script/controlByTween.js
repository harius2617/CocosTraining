(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/controlByTween.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5e465edQqVH05GRBuWybKck', 'controlByTween', __filename);
// Script/controlByTween.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {},
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT_BY_TWEEN", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT_BY_TWEEN", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP_BY_TWEEN", this.jump.bind(this));
        Emitter.instance.registerEvent("RESET_BY_TWEEN", this.reset.bind(this));
    },
    start: function start() {},
    moveRight: function moveRight() {
        cc.warn("RIGHT_BY_TWEEN");
        cc.tween(this.node).to(0, { scaleX: 1 }).by(1, { position: cc.v2(200, 0) }, { easing: "backInOut" }).start();
    },
    moveLeft: function moveLeft() {
        cc.warn("LEFT_BY_TWEEN");
        cc.tween(this.node).to(0, { scaleX: -1 }).by(1, { position: cc.v2(-200, 0) }, { easing: "backInOut" }).start();
    },
    jump: function jump() {
        cc.warn("JUMP_BY_TWEEN");
        var t = cc.tween;
        t(this.node).parallel(t().by(1, { position: cc.v2(0, 100) }, { easing: "sinceInOut" }), t().by(1, { angle: 180 })).parallel(t().by(1, { position: cc.v2(0, -100) }, { easing: "sinceInOut" }), t().by(0.5, { angle: 180 })).start();
    },
    reset: function reset() {
        cc.warn("RESET_BY_TWEEN");
        cc.tween(this.node).to(0, { position: this.firstPos }).start();
    }
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
        