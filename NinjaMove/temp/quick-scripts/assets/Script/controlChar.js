(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/controlChar.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bd54179oNNKHpf9goHXT9lZ', 'controlChar', __filename);
// Script/controlChar.js

"use strict";

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
        isRight: false,
        isLeft: false,
        isJump: false,
        isReset: false,
        distan: 0,
        firstPos: null,
        btnReset: cc.Button,
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button
    },
    onLoad: function onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerOnce("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this));
        Emitter.instance.registerOnce("RESET", this.reset.bind(this));
    },
    moveRight: function moveRight() {
        this.isRight = true;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        this.btnLeft.interactable = false;
    },
    moveLeft: function moveLeft() {
        this.isLeft = true;
        this.btnJump.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
    },
    jump: function jump() {
        this.isJump = true;
        this.btnReset.interactable = false;
        this.btnRight.interactable = false;
        this.btnLeft.interactable = false;
    },
    reset: function reset() {
        this.isReset = true;
        this.node.position = this.firstPos;
    },
    resetBtn: function resetBtn() {
        this.btnJump.interactable = true;
        this.btnRight.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
    },
    update: function update(dt) {
        if (this.isJump || this.isLeft || this.isRight || this.isReset) {
            this.distan++;
            if (this.isRight) {
                this.node.scaleX = -1;
                this.node.x += 3;
                if (this.distan == 100) {
                    this.isRight = false;
                    this.distan = 0;
                    this.resetBtn();
                }
            }

            if (this.isLeft) {
                this.node.scaleX = 1;
                this.node.x -= 3;
                if (this.distan == 100) {
                    this.isLeft = false;
                    this.distan = 0;
                    this.resetBtn();
                }
            }

            if (this.isJump) {
                if (this.distan <= 100) {
                    this.node.y += 2;
                    if (this.node.y >= 80) {
                        this.node.angle += 4.7;
                    }
                } else if (this.distan > 100 && this.distan < 200) {
                    this.node.y -= 2;
                    this.node.angle = 0;
                } else if (this.distan == 200) {
                    this.distan = 0;
                    this.isJump = false;
                    this.resetBtn();
                }
            }
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
        //# sourceMappingURL=controlChar.js.map
        