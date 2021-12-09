const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start () {
    },
    moveRight(){
    Emitter.instance.emit('RIGHT');
    },
    moveLeft(){
    Emitter.instance.emit('LEFT');
    },
    jump() {
        Emitter.instance.emit("JUMP");
    },
    reset(){
        Emitter.instance.emit("RESET")
    }
    });