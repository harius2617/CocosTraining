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
        let action = cc.moveBy(4, 450, 0);
        action.easing(cc.easeSineIn(6.0));
        this.node.runAction(action);
    },

    easeOutSine(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeSineOut(6.0));
        this.node.runAction(action);
    },

    easeInOutSine() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeSineInOut(6.0));
        this.node.runAction(action);
    },

    easeInQuad(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuadraticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuad() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuadraticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuad() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuadraticActionInOut(3.0));
        this.node.runAction(action);
        
    },

    easeInBack() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBackIn(3.0));
        this.node.runAction(action);
    },

    easeInCubic(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCubicActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutCubic(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCubicActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutCubic(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCubicActionInOut(3.0));
        this.node.runAction(action);
    },
    
    easeInQuart(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuarticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuart(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuarticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuart(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuarticActionInOut(3.0));
        this.node.runAction(action);
    },

    easeInQuint(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuinticActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutQuint(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuinticActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutQuint(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeQuinticActionInOut(3.0));
        this.node.runAction(action);
    },

    easeInExpo(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeExponentialIn(3.0));
        this.node.runAction(action);
    },

    easeOutExpo(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeExponentialOut(3.0));
        this.node.runAction(action);
    },

    easeInOutExpo(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeExponentialInOut(3.0));
        this.node.runAction(action);
    },

    easeInCirc(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCircleActionIn(3.0));
        this.node.runAction(action);
    },

    easeOutCirc(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCircleActionOut(3.0));
        this.node.runAction(action);
    },

    easeInOutCirc(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeCircleActionInOut(3.0));
        this.node.runAction(action);
    },

    easeOutBack() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBackOut(3.0));
        this.node.runAction(action);
    },

    easeInOutBack() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBackInOut(3.0));
        this.node.runAction(action);
    },

    easeInElastic(){
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeElasticIn(3.0));
        this.node.runAction(action);
    },

    easeOutElastic() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeElasticOut(3.0));
        this.node.runAction(action);
    },

    easeInOutElastic() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeElasticInOut(3.0));
        this.node.runAction(action);
    },

    easeInBounce() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBounceIn(3.0));
        this.node.runAction(action);
    },

    easeOutBounce() {
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBounceOut(3.0));
        this.node.runAction(action);
    },

    easeInOutBounce() {
        this.spAnim.setAnimation(0, "run", true);
        let action = cc.moveBy(4,450,0)
        action.easing(cc.easeBounceInOut(3.0));
        this.node.runAction(action);
    },
    resetBtn() {
        this.node.position = this._firstPos;
        this.spAnim.setAnimation(0, "aim", false);
    },
    onLoad () {
        this._firstPos = this.node.position;
        this.spAnim.setAnimation(0, "aim", false);
    },
    start () {
        this.spAnim.setCompleteListener(() => {
            this.spAnim.setAnimation(0, "aim", true);
        })
        this.spAnim.setEventListener((entry, event)=> {
            const {data} = event;
            let audioID = cc.audioEngine.play(this.stepSound, false, 1);
        });
    },

    // update (dt) {},
});
