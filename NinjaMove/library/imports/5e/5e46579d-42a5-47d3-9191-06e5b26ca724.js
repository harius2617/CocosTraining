"use strict";
cc._RF.push(module, '5e465edQqVH05GRBuWybKck', 'day6');
// Script/day6.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    moveRight: function moveRight() {
        cc.tween(this.node).to(1, { position: cc.v2(100, 0), rotation: 360 }).start();
    },
    moveLeft: function moveLeft() {
        cc.tween(this.node).to(1, { position: cc.v2(-100, 0), rotation: -360 }).start();
    },
    jump: function jump() {},
    reset: function reset() {},


    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // var seq = cc.repeat(
        //     cc.sequence(
        //         cc.moveBy(0.5, 100, 0), 
        //         cc.moveBy(1, -100, 0), 
        //         cc.moveBy(1, 100, 0),  
        //         cc.moveBy(1, 0, 0)
        // ),5)


        // var spaw = cc.spawn(cc.moveBy(1, 200, 100), cc.scaleTo(0.5, 2, 2))
        // this.node.runAction(seq)

        // this.jumpAction = cc.sequence(
        //     cc.spawn(
        //     cc.scaleTo(0.1, 0.8, 1.2),
        //     cc.moveTo(0.1, 0, 10)
        //     ),
        //     cc.spawn(
        //         cc.scaleTo(0.1, 0.8, 1.2),
        //         cc.moveTo(0.1, 200, 10)
        //         ),
        //     cc.spawn(
        //     cc.scaleTo(0.2, 1, 1),
        //     cc.moveTo(0.2, 0, 0)
        //     ),
        //     cc.delayTime(0.5),
        //     cc.spawn(
        //     cc.scaleTo(0.1, 1.2, 0.8),
        //     cc.moveTo(0.1, -200, -10)
        //     ),
        //     cc.spawn(
        //     cc.scaleTo(0.2, 1, 1),
        //     cc.moveTo(0.2, 0, 0)
        //     )
        //     // play the animation at 1/2 speed and repeat 5 times
        //     ).speed(2).repeat(10);

        // var action = cc.scaleTo(0.5, 2, 2);
        // action.easing(cc.easeIn(3.0));
        // this.node.runAction(action)

        // cc.tween(this.node)
        //     .by(1, {position: cc.v2(100,100), rotation: 360})
        //     .to(1, {scale: 2})
        //     .start()
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();