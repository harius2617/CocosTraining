const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {
    //    isColli: false,
       spAnim: sp.Skeleton,
       canMove: true,
       bullets: cc.Prefab,
       stepSound: cc.AudioClip,
       gunSound: cc.AudioClip
    },

    onLoad () {
        let manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        // cc.tween(this.node).by(10, {position: cc.v2(1000, 0)}).start()
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent("RIGHT", this.moveRight.bind(this));
        Emitter.instance.registerEvent("LEFT", this.moveLeft.bind(this));
        Emitter.instance.registerEvent("JUMP", this.jump.bind(this))
        Emitter.instance.registerEvent('SHOOT', this.shoot.bind(this))

    },

    start() {
        this.spAnim.setEventListener((entry, event)=> {
            const {data} = event;
            let audioStep = cc.audioEngine.play(this.stepSound, false, 1);
        });
    },

    onCollisionEnter: function (other, self) {
        // this.isColli = true;
        // if(other.tag === 0 && self.tag == 0 ) {
            // this.spAnim.setAnimation(0, "jump", false);
            // this.spAnim.addAnimation(0, "walk", true)
            // this.node.y += 100;
            // cc.tween(this.node)
            //     .by(0.5, {position: cc.v2(50, 100)})
            //     .by(0.5, {position: cc.v2(0, -100)})
            //     .start()
        //     return
        // }else if(other.tag === 1) { 
        //     if(!this.shoot()){
        //         this.canMove = false
        //     }else{
        //         other.node.destroy()

            // }
            // this.spAnim.setAnimation(0, "shoot", false);
            // cc.tween(this.node)
            // .delay(0.5)
            // .call(()=>{
            //     this.canMove = true
                
            // })
            // .start()
            // this.spAnim.addAnimation(0, "walk", true);
            // this.shoot()
        // }
        // cc.log(this.spAnim.animation)
        // console.log('on collision enter');
        // if(other.tag === 1 && self.tag === 0 ) {
        //     // this.canMove = false;
        //         // other.node.destroy();
        //         // this.canMove = true;
        //     this.shoot()
        //     other.node.destroy()
        // }
        // if(other.tag === 0 && self.tag === 3) {
        //     self.node.destroy()
        // }
    },

    onCollisionStay: function(other, self){
        this.node.x -= 10
        cc.log("collition stay")
    },
    
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        // this.spAnim.setAnimation(0, "walk", true)
    },

    moveRight() {
        if(!this.canMove) return;
        this.spAnim.setAnimation(0, "walk", false)
        cc.tween(this.node) 
            .to(0, {scaleX: 0.1})
            .by(0.2, {position: cc.v2(20,0)})
            .start()
        this.spAnim.addAnimation(0,"idle", false)
        
    },

    moveLeft() {
        if(!this.canMove) return;
        this.spAnim.setAnimation(0, "walk", false)
        cc.tween(this.node)
            .to(0, {scaleX: -0.1})
            .by(0.1, {position: cc.v2(-20,0)})
            .start()
        this.spAnim.addAnimation(0,"idle", false)
        
    },

    jump() {
        this.spAnim.setAnimation(0, "jump", false)
        if(this.node.scaleX === 0.1){
            cc.tween(this.node)
                .by(0.5, {position: cc.v2(60, 100)},{easing: "quintInOut"})
                .by(0.5, {position: cc.v2(40, -100)})
                .start()
        }else if(this.node.scaleX === -0.1) {
            cc.tween(this.node)
                .by(0.5, {position: cc.v2(-60, 100)},{easing: "quintInOut"})
                .by(0.5, {position: cc.v2(-40, -100)})
                .start()
        }
        this.spAnim.addAnimation(0,"idle", false)
    },

    shoot() {
        let bullet = cc.instantiate(this.bullets)
        this.node.addChild(bullet);
        let shootSound = cc.audioEngine.play(this.gunSound, false, 1)
        this.spAnim.setAnimation(0, "shoot", false)
        cc.tween(bullet)
            .by(10, {position: cc.v2(15000, 0)})
            .start()
        this.spAnim.addAnimation(0, 'idle', true)
    },

});
