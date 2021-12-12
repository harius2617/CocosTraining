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
    }
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
    start () {
    },

    clickBtn(){
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
        Emitter.instance.emit(this._currMode.LEFT);
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
        Emitter.instance.emit(this._currMode.JUMP);
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
        Emitter.instance.emit(this._currMode.RESET)
    },

    changeMode(){

    },
});