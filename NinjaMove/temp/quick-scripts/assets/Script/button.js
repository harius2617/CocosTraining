(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/button.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button', __filename);
// Script/button.js

"use strict";

var Emitter = require('mEmitter');
var MODE = {
    MODE_TWEEN: {
        RIGHT: "RIGHT_BY_TWEEN",
        LEFT: "LEFT_BY_TWEEN",
        JUMP: "JUMP_BY_TWEEN",
        RESET: "RESET_BY_TWEEN"
    },
    MODE_ACTION: {
        RIGHT: "RIGHT_BY_ACTION",
        LEFT: "LEFT_BY_ACTION",
        JUMP: "JUMP_BY_ACTION",
        RESET: "RESET_BY_ACTION"
    }
};
cc.Class({
    extends: cc.Component,

    properties: {
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
        btnReset: cc.Button,
        _currMode: null,
        btnModeStr: cc.Label
    },

    onLoad: function onLoad() {
        this._currMode = MODE.MODE_TWEEN;
        this.btnModeStr.string = 'MODE: Tween';
    },
    clickBtn: function clickBtn() {
        cc.log(1);
        if (this._currMode === MODE.MODE_TWEEN) {
            this._currMode = MODE.MODE_ACTION;
            this.btnModeStr.string = 'MODE: Action';
        } else if (this._currMode === MODE.MODE_ACTION) {
            this._currMode = MODE.MODE_TWEEN;
            this.btnModeStr.string = 'MODE: Tween';
        }
    },
    moveRight: function moveRight() {
        var _this = this;

        Emitter.instance.emit(this._currMode.RIGHT);
        this.btnInteracOff();
        cc.tween(this.node).delay(1).call(function () {
            _this.btnInteracOn();
        }).start();
    },
    moveLeft: function moveLeft() {
        var _this2 = this;

        Emitter.instance.emit(this._currMode.LEFT);
        this.btnInteracOff();
        cc.tween(this.node).delay(1).call(function () {
            _this2.btnInteracOn();
        }).start();
    },
    jump: function jump() {
        var _this3 = this;

        Emitter.instance.emit(this._currMode.JUMP);
        this.btnInteracOff();
        cc.tween(this.node).delay(2).call(function () {
            _this3.btnInteracOn();
        }).start();
    },
    reset: function reset() {
        Emitter.instance.emit(this._currMode.RESET);
    },
    btnInteracOn: function btnInteracOn() {
        this.btnJump.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
        this.btnRight.interactable = true;
    },
    btnInteracOff: function btnInteracOff() {
        this.btnJump.interactable = false;
        this.btnLeft.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
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
        //# sourceMappingURL=button.js.map
        