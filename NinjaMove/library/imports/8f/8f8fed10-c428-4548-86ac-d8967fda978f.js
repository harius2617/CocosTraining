"use strict";
cc._RF.push(module, '8f8fe0QxChFSIas2JZ/2peP', 'keyboard');
// Script/keyboard.js

'use strict';

var Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,
    onLoad: function onLoad() {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    },
    // destroy () {
    // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    // cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    // },
    onKeyLeft: function onKeyLeft(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.moveLeft();
                break;
        }
    },
    onKeyRight: function onKeyRight(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.moveRight();
                break;
        }
    },

    onKeyUp: function onKeyUp(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.jump();
                break;
        }
    },

    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.down:
                this.reset();
                break;

        }
    },
    moveRight: function moveRight() {
        Emitter.instance.emit('RIGHT');
    },
    moveLeft: function moveLeft() {
        Emitter.instance.emit('LEFT');
    },
    jump: function jump() {
        Emitter.instance.emit("JUMP");
    },
    reset: function reset() {
        Emitter.instance.emit("RESET");
    }
});

cc._RF.pop();