const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
       isColli: false,
       spAnim: sp.Skeleton,
       canMove: true,
    },

    onLoad () {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        // cc.tween(this.node).by(10, {position: cc.v2(1000, 0)}).start()
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT", this.moveLeft.bind(this));
    },

    onCollisionEnter: function (other, self) {
        this.isColli = true;
        // if(other.tag === 0 && self.tag == 0 ) {
        //     this.spAnim.setAnimation(0, "jump", false);
        //     this.spAnim.addAnimation(0, "walk", true)
        //     // this.node.y += 100;
        //     // cc.tween(this.node)
        //     //     .by(0.5, {position: cc.v2(50, 100)})
        //     //     .by(0.5, {position: cc.v2(0, -100)})
        //     //     .start()
        // }else if(other.tag === 1) { 
            this.canMove = false
        //     this.spAnim.setAnimation(0, "shoot", false);
        //     cc.tween(this.node)
        //     .delay(0.5)
        //     .call(()=>{
        //         this.canMove = true
                
        //     })
        //     .start()
        //     other.node.destroy()
        //     this.spAnim.addAnimation(0, "walk", true);
        // }
        // cc.log(this.spAnim.animation)
        console.log('on collision enter');
    },
    
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        // this.spAnim.setAnimation(0, "walk", true)
    },

    moveRight() {
        if(!this.canMove) return;
        cc.tween(this.node) 
            .to(0, {scaleX: 0.1})
            .by(1, {position: cc.v2(10,0)})
            .start()
    },

    moveLeft() {
        if(!this.canMove) return;
        cc.tween(this.node)
            .to(0, {scaleX: -0.1})
            .by(1, {position: cc.v2(-20,0)})
            .start()
    },

    update (dt) {
        // this.move()
    },

    start () {

    },

});
