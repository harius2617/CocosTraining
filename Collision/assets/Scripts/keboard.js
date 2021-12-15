const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,
    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeySpace, this);
    },
    onKeyLeft: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.left:
                this.moveLeft();
                break;
        }
    },
    onKeyRight: function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.right:
                this.moveRight();
                break;
        }
    },

    onKeyUp: function(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.up:
                this.jump();
                break;        
        }
    },

    onKeySpace: function(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.shoot();
                break;
         }
    },

    moveRight() {
        Emitter.instance.emit('RIGHT');
    },

    moveLeft() {
        Emitter.instance.emit('LEFT');
    },

    jump(){
        Emitter.instance.emit('JUMP')
    },

    shoot() {
        Emitter.instance.emit('SHOOT')
    }

});