(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/objectA.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6ce0ueVCJOcrGHIWoI2s7i', 'objectA', __filename);
// Scripts/objectA.js

'use strict';

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

    onLoad: function onLoad() {

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
    },


    onCollisionEnter: function onCollisionEnter(other, self) {
        this.isColli = true;
        console.log('on collision enter');
    },

    onCollisionStay: function onCollisionStay(other, self) {
        console.log('on collision stay');
    },

    onCollisionExit: function onCollisionExit(other, self) {
        console.log('on collision exit');
    },

    start: function start() {},
    jump: function jump() {
        var t = cc.tween;
        t(this.node).delay(2).parallel(t().to(1, { scaleY: 0.15 }), t().by(1, { position: cc.v2(0, 100) })).start();
    },
    update: function update(dt) {
        if (this.isColli) {
            this.node.y = this.node.y;
            this.jump();
        } else {
            this.node.y -= dt * 100;
        }
    }
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
        //# sourceMappingURL=objectA.js.map
        