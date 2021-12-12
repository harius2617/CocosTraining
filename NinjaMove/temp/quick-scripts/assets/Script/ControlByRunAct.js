(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/ControlByRunAct.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2a871EH6vJPTpz+VTEqR4r6', 'ControlByRunAct', __filename);
// Script/ControlByRunAct.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {},

    onLoad: function onLoad() {
        this.firstPos = this.node.position;
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
        var move = cc.sequence(cc.scaleBy(0.5, 0.8, 0.8), cc.spawn(cc.moveBy(1, -200, 0), cc.scaleTo(1, 1, 1)));

        this.node.runAction(move);
    },
    jump: function jump() {
        var move = cc.sequence(cc.moveBy(1, 0, 200), cc.moveBy(1, 0, -200));
        move.easing(cc.easeCubicActionInOut(3.0));
        this.node.runAction(move);
        cc.warn("JUMP_BY_ACTION");
    },
    reset: function reset() {
        this.node.position = this.firstPos;
        cc.warn("RESET_BY_ACTION");
    },
    start: function start() {}
});

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
        //# sourceMappingURL=ControlByRunAct.js.map
        