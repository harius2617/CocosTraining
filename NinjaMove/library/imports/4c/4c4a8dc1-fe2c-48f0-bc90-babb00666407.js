"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button');
// Script/button.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
        btnReset: cc.Button
    },
    start: function start() {},
    moveRight: function moveRight() {
        var _this = this;

        Emitter.instance.emit('RIGHT');
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

        Emitter.instance.emit('LEFT');
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

        Emitter.instance.emit("JUMP");
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
        Emitter.instance.emit("RESET");
    }
});

cc._RF.pop();