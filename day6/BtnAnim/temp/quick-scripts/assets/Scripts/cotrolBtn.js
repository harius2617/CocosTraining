(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Scripts/cotrolBtn.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd1b56h0aNtE/5cEUAy8WFo4', 'cotrolBtn', __filename);
// Scripts/cotrolBtn.js

"use strict";

0; // Learn cc.Class:
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
        stepSound: cc.AudioClip
    },

    easeInSineBtn: function easeInSineBtn() {
        var _this = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeSineIn(6.0));
        this.node.runAction(action);
    },
    easeOutSine: function easeOutSine() {
        var _this2 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this2.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeSineOut(6.0));
        this.node.runAction(action);
    },
    easeInOutSine: function easeInOutSine() {
        var _this3 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this3.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeSineInOut(6.0));
        this.node.runAction(action);
    },
    easeInQuad: function easeInQuad() {
        var _this4 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this4.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionIn(3.0));
        this.node.runAction(action);
    },
    easeOutQuad: function easeOutQuad() {
        var _this5 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this5.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionOut(3.0));
        this.node.runAction(action);
    },
    easeInOutQuad: function easeInOutQuad() {
        var _this6 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this6.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuadraticActionInOut(3.0));
        this.node.runAction(action);
    },
    easeInBack: function easeInBack() {
        var _this7 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this7.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBackIn(3.0));
        this.node.runAction(action);
    },
    easeInCubic: function easeInCubic() {
        var _this8 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this8.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCubicActionIn(3.0));
        this.node.runAction(action);
    },
    easeOutCubic: function easeOutCubic() {
        var _this9 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this9.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCubicActionOut(3.0));
        this.node.runAction(action);
    },
    easeInOutCubic: function easeInOutCubic() {
        var _this10 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this10.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCubicActionInOut(3.0));
        this.node.runAction(action);
    },
    easeInQuart: function easeInQuart() {
        var _this11 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this11.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuarticActionIn(3.0));
        this.node.runAction(action);
    },
    easeOutQuart: function easeOutQuart() {
        var _this12 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this12.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuarticActionOut(3.0));
        this.node.runAction(action);
    },
    easeInOutQuart: function easeInOutQuart() {
        var _this13 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this13.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuarticActionInOut(3.0));
        this.node.runAction(action);
    },
    easeInQuint: function easeInQuint() {
        var _this14 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this14.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuinticActionIn(3.0));
        this.node.runAction(action);
    },
    easeOutQuint: function easeOutQuint() {
        var _this15 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this15.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuinticActionOut(3.0));
        this.node.runAction(action);
    },
    easeInOutQuint: function easeInOutQuint() {
        var _this16 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this16.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeQuinticActionInOut(3.0));
        this.node.runAction(action);
    },
    easeInExpo: function easeInExpo() {
        var _this17 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this17.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeExponentialIn(3.0));
        this.node.runAction(action);
    },
    easeOutExpo: function easeOutExpo() {
        var _this18 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this18.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeExponentialOut(3.0));
        this.node.runAction(action);
    },
    easeInOutExpo: function easeInOutExpo() {
        var _this19 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this19.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeExponentialInOut(3.0));
        this.node.runAction(action);
    },
    easeInCirc: function easeInCirc() {
        var _this20 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this20.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCircleActionIn(3.0));
        this.node.runAction(action);
    },
    easeOutCirc: function easeOutCirc() {
        var _this21 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this21.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCircleActionOut(3.0));
        this.node.runAction(action);
    },
    easeInOutCirc: function easeInOutCirc() {
        var _this22 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this22.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeCircleActionInOut(3.0));
        this.node.runAction(action);
    },
    easeOutBack: function easeOutBack() {
        var _this23 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this23.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBackOut(3.0));
        this.node.runAction(action);
    },
    easeInOutBack: function easeInOutBack() {
        var _this24 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this24.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBackInOut(3.0));
        this.node.runAction(action);
    },
    easeInElastic: function easeInElastic() {
        var _this25 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this25.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeElasticIn(3.0));
        this.node.runAction(action);
    },
    easeOutElastic: function easeOutElastic() {
        var _this26 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this26.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeElasticOut(3.0));
        this.node.runAction(action);
    },
    easeInOutElastic: function easeInOutElastic() {
        var _this27 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this27.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeElasticInOut(3.0));
        this.node.runAction(action);
    },
    easeInBounce: function easeInBounce() {
        var _this28 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this28.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBounceIn(3.0));
        this.node.runAction(action);
    },
    easeOutBounce: function easeOutBounce() {
        var _this29 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this29.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBounceOut(3.0));
        this.node.runAction(action);
    },
    easeInOutBounce: function easeInOutBounce() {
        var _this30 = this;

        this.resetBtn();
        this.spAnim.setAnimation(0, "run", true);
        var callback = function callback() {
            _this30.spAnim.setAnimation(0, "idle", true);
        };
        var action = cc.sequence(cc.moveBy(4, 450, 0), cc.callFunc(callback));
        action.easing(cc.easeBounceInOut(3.0));
        this.node.runAction(action);
    },
    resetBtn: function resetBtn() {
        this.node.stopAllActions();
        this.node.position = this._firstPos;
        this.spAnim.setAnimation(0, "idle", false);
    },
    onLoad: function onLoad() {
        this._firstPos = this.node.position;
        this.spAnim.setAnimation(0, "idle", false);
    },
    start: function start() {
        var _this31 = this;

        // this.spAnim.setCompleteListener((entry) => {
        //     if(entry.animation.name === 'run'){
        //         this.spAnim.setAnimation(0, "aim", true);
        //     }
        // })
        this.spAnim.setEventListener(function (entry, event) {
            var data = event.data;

            var audioID = cc.audioEngine.play(_this31.stepSound, false, 1);
        });
    }
}

// update (dt) {},
);

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
        //# sourceMappingURL=cotrolBtn.js.map
        