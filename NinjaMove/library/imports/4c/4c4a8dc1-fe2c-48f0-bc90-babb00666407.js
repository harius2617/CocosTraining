"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button');
// Script/button.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start: function start() {},
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