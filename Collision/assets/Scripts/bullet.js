const Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {

    },

    onCollisionEnter: function (other, self) {
        if(other.tag === 1 && self.tag === 3) {
            other.node.destroy()
            self.node.destroy()
            cc.log(1)
        }
        if(other.tag === 0 && self.tag === 3) {
            self.node.destroy()
            cc.log(2)
        }
    },

    update (dt) {
    },
});
