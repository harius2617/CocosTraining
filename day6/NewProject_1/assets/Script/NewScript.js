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
        spAnim: sp.Skeleton,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.spAnim.setEventListener((entry, event)=> {
            const {data} = event;
             cc.log(data.name);
        });
    },

    start () {
        this.spAnim.setAnimation(0, "aim", false);
        this.spAnim.addAnimation(0, "deadth", false);
        this.spAnim.addAnimation(0, "hoverboard", false);
        this.spAnim.addAnimation(0, "idle", false);
        this.spAnim.addAnimation(0, "idle-turn", false);
        this.spAnim.addAnimation(0, "jump", false);
        this.spAnim.addAnimation(0, "portal", false);
        this.spAnim.addAnimation(0, "run", false);
        this.spAnim.addAnimation(0, "run-to-idle", false);
        this.spAnim.addAnimation(0, "shoot", false);
        this.spAnim.addAnimation(0, "walk", false);
    },

    // update (dt) {},
});
