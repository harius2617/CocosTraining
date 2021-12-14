const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,
    onLoad: function () {
        // add key down and key up event
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyLeft, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyRight, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyUp, this);
        // cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
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

    // onKeyUp: function(event) {
    //     switch (event.keyCode) {
    //         case cc.macro.KEY.up:
    //             this.jump();
    //             break;        
    //     }
    // },

    moveRight() {
        Emitter.instance.emit('RIGHT');
        // Emitter.instance.emit('RIGHT_BY_TWEEN');
    },

    moveLeft() {
        Emitter.instance.emit('LEFT');
        // Emitter.instance.emit('LEFT_BY_TWEEN');
    },

});