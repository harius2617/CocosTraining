const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
        btnReset: cc.Button
    },
    start () {
    },
    moveRight(){
        Emitter.instance.emit('RIGHT');
        this.btnLeft.interactable = false;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node)
            .delay(1)
            .call(()=> {
                this.btnLeft.interactable = true;
                this.btnReset.interactable = true;
                this.btnJump.interactable = true;
            })
            .start()
    },
    moveLeft(){
        Emitter.instance.emit('LEFT');
        this.btnRight.interactable = false;
        this.btnJump.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node)
            .delay(1)
            .call(()=> {
                this.btnRight.interactable = true;
                this.btnReset.interactable = true;
                this.btnJump.interactable = true;
            })
            .start()
    },
    jump() {
        Emitter.instance.emit("JUMP");
        this.btnJump.interactable = false;
        this.btnLeft.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
        cc.tween(this.node)
            .delay(2)
            .call(()=> {
                this.btnJump.interactable = true;
                this.btnLeft.interactable = true;
                this.btnReset.interactable = true;
                this.btnRight.interactable = true;
            })
            .start()
    },
    reset(){
        Emitter.instance.emit("RESET")
    }
});