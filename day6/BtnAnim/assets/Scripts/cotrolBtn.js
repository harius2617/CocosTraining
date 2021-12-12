0// Learn cc.Class:
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
        _firstPos: null,
        spAnim: sp.Skeleton,
        stepSound: cc.AudioClip,
    },

    easeInSineBtn() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4, 450, 0),cc.callFunc(callback));
        action.easing(cc.easeSineIn(6.0));
        this.node.runAction(action);
    },

    easeOutSine(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeSineOut(6.0));
        this.node.runAction(action);
    },

    easeInOutSine() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeSineInOut(6.0));
        this.node.runAction(action);
    },

    easeInQuad(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuad() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuad() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionInOut(3.0));
        this.node.runAction(action);
    },

    easeInBack() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeBackIn(3.0));
        this.node.runAction(action);
    },

    easeInCubic(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCubicActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutCubic(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCubicActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutCubic(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCubicActionInOut(3.0));
        this.node.runAction(action);
    },
    
    easeInQuart(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuarticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuart(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuarticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuart(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuarticActionInOut(3.0));
        this.node.runAction(action);
    },

    easeInQuint(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuinticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuint(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuinticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuint(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeQuinticActionInOut(3.0));
        this.node.runAction(action);
    },

    easeInExpo(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeExponentialIn(3.0));
        this.node.runAction(action);
    },

    easeOutExpo(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeExponentialOut(3.0));
        this.node.runAction(action);
    },

    easeInOutExpo(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeExponentialInOut(3.0));
        this.node.runAction(action);
    },

    easeInCirc(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCircleActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutCirc(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCircleActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutCirc(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeCircleActionInOut(3.0));
        this.node.runAction(action);
    },

    easeOutBack() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeBackOut(3.0));
        this.node.runAction(action);
    },

    easeInOutBack() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeBackInOut(3.0));
        this.node.runAction(action);
    },

    easeInElastic(){
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeElasticIn(3.0));
        this.node.runAction(action);
    },

    easeOutElastic() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeElasticOut(3.0));
        this.node.runAction(action);
    },

    easeInOutElastic() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeElasticInOut(3.0));
        this.node.runAction(action);
    },

    easeInBounce() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0),cc.callFunc(callback));
        action.easing(cc.easeBounceIn(3.0));
        this.node.runAction(action);
    },

    easeOutBounce() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0), cc.callFunc(callback));
        action.easing(cc.easeBounceOut(3.0));
        this.node.runAction(action);
    },

    easeInOutBounce() {
        this.spAnim.setAnimation(0, "run", true);
        const callback = () => {
            this.spAnim.setAnimation(0, "idle", true)
        }
        let action = cc.sequence(cc.moveBy(4,450,0), cc.callFunc(callback))
        action.easing(cc.easeBounceInOut(3.0));
        this.node.runAction(action);
    },
    resetBtn() {
        this.node.stopAllActions()
        this.node.position = this._firstPos;
        this.spAnim.setAnimation(0, "idle", false);
    },
    onLoad () {
        this._firstPos = this.node.position;
        this.spAnim.setAnimation(0, "idle", false);
    },
    start () {
        // this.spAnim.setCompleteListener((entry) => {
        //     if(entry.animation.name === 'run'){
        //         this.spAnim.setAnimation(0, "aim", true);
        //     }
        // })
        this.spAnim.setEventListener((entry, event)=> {
            const {data} = event;
            let audioID = cc.audioEngine.play(this.stepSound, false, 1);
        });
    },

    // update (dt) {},
});
