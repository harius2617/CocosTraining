"use strict";
cc._RF.push(module, '584b0UBnF9MOa2WnimxTpWq', 'keboard');
// Scripts/keboard.js

'use strict';

var Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,
    onLoad: function onLoad() {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeySpace, this);
    },
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

    onKeySpace: function onKeySpace(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.shoot();
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
        Emitter.instance.emit('JUMP');
    },
    shoot: function shoot() {
        Emitter.instance.emit('SHOOT');
    }
});

cc._RF.pop();