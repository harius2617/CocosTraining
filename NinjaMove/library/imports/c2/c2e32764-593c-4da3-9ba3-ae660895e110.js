"use strict";
cc._RF.push(module, 'c2e32dkWTxNo5ujrmYIleEQ', 'mEmitter');
// Script/mEmitter.js

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);
var EventEmitter = require('events');

var mEmitter = function () {
    function mEmitter() {
        _classCallCheck(this, mEmitter);

        this._emiter = new EventEmitter();
        this._emiter.setMaxListeners(100);
    }

    _createClass(mEmitter, [{
        key: 'emit',
        value: function emit() {
            var _emiter;

            (_emiter = this._emiter).emit.apply(_emiter, arguments);
        }
    }, {
        key: 'registerEvent',
        value: function registerEvent(event, listener) {
            this._emiter.on(event, listener);
        }
    }, {
        key: 'registerOnce',
        value: function registerOnce(event, listener) {
            this._emiter.once(event, listener);
        }
    }, {
        key: 'removeEvent',
        value: function removeEvent(event, listener) {
            this._emiter.removeListener(event, listener);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this._emiter.removeAllListeners();
            this._emiter = null;
            mEmitter.instance = null;
        }
    }]);

    return mEmitter;
}();

mEmitter.instance = null;
module.exports = mEmitter;

cc._RF.pop();