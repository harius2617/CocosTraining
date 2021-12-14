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
    extends: cc.      Component,

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
    },

    onCollisionEnter: function (other, self) {
        this.isColli = true;
        if(other.tag === 0) {
            this.spAnim.setAnimation(0, "jump", true);
            this.node.x += 30
        }else if(other.tag === 1) { 
            this.canMove = false
            // this.spAnim.setAnimation(0, "idle", false);
            // cc.tween(this.node)
            //     .delay(3)
            //     .by(0.5, {position: cc.v2(0,0)})
            //     .start()
            this.spAnim.setAnimation(0, "shoot", false);
            cc.tween(this.node)
            .delay(0.5)
            .call(()=>{
                this.canMove = true
                
            })
            .start()
            other.node.destroy()
            this.spAnim.addAnimation(0, "walk", true);
        }
        cc.log(this.spAnim.animation)
        console.log('on collision enter');
    },
    
    onCollisionExit: function (other, self) {
        console.log('on collision exit');
        // this.spAnim.setAnimation(0, "run", true)
    },

    move() {
        if(this.canMove) {
            this.node.x += 2;
        }else{
            return this.node.x
        }
    },

    update (dt) {
        // if(this.spAnim.animation === "idle"){
        //     this.node.x = this.node.x;
        // }else {
        //     this.node.x += 2
        // }
        this.move()
    },

    start () {

    },

});
