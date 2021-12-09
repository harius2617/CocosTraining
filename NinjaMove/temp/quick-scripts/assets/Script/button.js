(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/button.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4c4a83B/ixI8LyQursAZmQH', 'button', __filename);
// Script/button.js

'use strict';

var Emitter = require('mEmitter');
cc.Class({
    extends: cc.Component,
    start: function start() {},
    moveRight: function moveRight() {
        Emitter.instance.emit('RIGHT');
    },
    moveLeft: function moveLeft() {
        Emitter.instance.emit('LEFT');
    },
    jump: function jump() {
        Emitter.instance.emit("JUMP");
    },
    reset: function reset() {
        Emitter.instance.emit("RESET");
    }
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
        //# sourceMappingURL=button.js.map
        