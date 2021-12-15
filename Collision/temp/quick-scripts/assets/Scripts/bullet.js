(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/bullet.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '72699BwCB9MaYpkTXw0t0b1', 'bullet', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=bullet.js.map
        