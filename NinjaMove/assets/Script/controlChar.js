const Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    properties: {
        isRight: false,
        isLeft: false,
        isJump: false,
        distan: 0,
        firstPos: null,
        btnReset: cc.Button,
        btnRight: cc.Button,
        btnLeft: cc.Button,
        btnJump: cc.Button,
    },
    onLoad() {
        Emitter.instance = new Emitter();
        this.firstPos = this.node.position;
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerOnce("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this));
        Emitter.instance.registerOnce("RESET", this.reset.bind(this));
    },
    moveRight() {
        let action = cc.moveTo(1, 200, 50);
        this.node.runAction(action);
        // this.isRight = true;
        // this.btnJump.interactable = false;
        // this.btnReset.interactable = false;
        // this.btnLeft.interactable = false;
    },

    moveLeft() {
        let action = cc.moveTo(1, -200, 50)
        this.node.runAction(action);
        // this.isLeft = true;
        // this.btnJump.interactable = false;
        // this.btnRight.interactable = false;
        // this.btnReset.interactable = false;
    },

    jump() {
        let action = cc.moveTo(1, this.node.x, 100)
        this.node.runAction(action);
        // this.isJump = true;
        // this.btnReset.interactable = false;
        // this.btnRight.interactable = false;
        // this.btnLeft.interactable = false;
    },

    reset() {
        this.node.position = this.firstPos;
    },

    resetBtn() {
        this.btnJump.interactable = true;
        this.btnRight.interactable = true;
        this.btnLeft.interactable = true;
        this.btnReset.interactable = true;
    },

    update(dt) {
    //     if (this.isJump || this.isLeft || this.isRight) {
    //         this.distan++;
    //         if (this.isRight) {
    //             this.node.scaleX = -1
    //             this.node.x += 3;
    //             if (this.distan == 100) {
    //                 this.isRight = false;
    //                 this.distan = 0;
    //                 this.resetBtn();
    //             }
    //         }

    //         if (this.isLeft) {
    //             this.node.scaleX = 1
    //             this.node.x -= 3;
    //             if (this.distan == 100) {
    //                 this.isLeft = false;
    //                 this.distan = 0;
    //                 this.resetBtn();
    //             }
    //         }

    //         if (this.isJump) {
    //             if (this.distan <= 100) {
    //                 this.node.y += 2;
    //                 if (this.node.y >= 80) {
    //                     this.node.angle += 4.7;
    //                 }
    //             } else if (this.distan > 100 && this.distan < 200) {
    //                 this.node.y -= 2;
    //                 this.node.angle = 0;
    //             } else if (this.distan == 200) {
    //                 this.distan = 0;
    //                 this.node.y = this.firstPos.y;
    //                 this.isJump = false;
    //                 this.resetBtn();
    //             }
    //         }
    //     }
    },
});