"use strict";
cc._RF.push(module, '72699BwCB9MaYpkTXw0t0b1', 'bullet');
// Scripts/bullet.js

'use strict';

var Emitter = require('mEmitter');

cc.Class({
    extends: cc.Component,

    properties: {},

    onCollisionEnter: function onCollisionEnter(other, self) {
        if (other.tag === 1 && self.tag === 3) {
            other.node.destroy();
            self.node.destroy();
            cc.log(1);
        }
        if (other.tag === 0 && self.tag === 3) {
            self.node.destroy();
            cc.log(2);
        }
    },

    update: function update(dt) {}
});

cc._RF.pop();