const Emitter = require('mEmitter');
const MODE = {
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
    },
}
cc.Class({
    extends: cc.Component,

    properties: {
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
        btnReset: cc.Button,
        _currMode: null,
        btnModeStr: cc.Label,
    },

    onLoad() {
        this._currMode = MODE.MODE_TWEEN;
        this.btnModeStr.string = 'MODE: Tween'
    },

    clickBtn(){
        cc.log(1)
        if(this._currMode ===  MODE.MODE_TWEEN){
            this._currMode =  MODE.MODE_ACTION;
            this.btnModeStr.string = 'MODE: Action'
        }else if(this._currMode ===  MODE.MODE_ACTION){
            this._currMode =  MODE.MODE_TWEEN;
            this.btnModeStr.string = 'MODE: Tween'
        }
    },

    moveRight(){
        Emitter.instance.emit(this._currMode.RIGHT);
        this.btnInteracOff();
        cc.tween(this.node)
            .delay(1)
            .call(()=> {
                this.btnInteracOn();
            })
            .start()
    },
    moveLeft(){
        Emitter.instance.emit(this._currMode.LEFT);
        this.btnInteracOff();
        cc.tween(this.node)
            .delay(1)
            .call(()=> {
                this.btnInteracOn();
            })
            .start()
    },
    jump() {
        Emitter.instance.emit(this._currMode.JUMP);
        this.btnInteracOff();
        cc.tween(this.node)
            .delay(2)
            .call(()=> {
                this.btnInteracOn();
            })
            .start()
    },
    reset(){
        Emitter.instance.emit(this._currMode.RESET)
    },

    btnInteracOn(){
        this.btnJump.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
        this.btnRight.interactable = true;
    },

    btnInteracOff() {
        this.btnJump.interactable = false;
        this.btnLeft.interactable = false;
        this.btnRight.interactable = false;
        this.btnReset.interactable = false;
    }
});
