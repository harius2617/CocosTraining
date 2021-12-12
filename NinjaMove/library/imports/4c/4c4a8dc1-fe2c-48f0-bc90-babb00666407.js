"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button');
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
    start: function start() {},
    clickBtn: function clickBtn() {
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
        this.btnLeft.interactable = false;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node).delay(1).call(function () {
            _this.btnLeft.interactable = true;
            _this.btnReset.interactable = true;
            _this.btnJump.interactable = true;
        }).start();
    },
    moveLeft: function moveLeft() {
        var _this2 = this;

        Emitter.instance.emit(this._currMode.LEFT);
        this.btnRight.interactable = false;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node).delay(1).call(function () {
            _this2.btnRight.interactable = true;
            _this2.btnReset.interactable = true;
            _this2.btnJump.interactable = true;
        }).start();
    },
    jump: function jump() {
        var _this3 = this;

        Emitter.instance.emit(this._currMode.JUMP);
        this.btnJump.interactable = false;
        this.btnLeft.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node).delay(2).call(function () {
            _this3.btnJump.interactable = true;
            _this3.btnLeft.interactable = true;
            _this3.btnReset.interactable = true;
            _this3.btnRight.interactable = true;
        }).start();
    },
    reset: function reset() {
        Emitter.instance.emit(this._currMode.RESET);
    },
    changeMode: function changeMode() {}
});

cc._RF.pop();