window.__require=function t(e,o,i){function n(c,r){if(!o[c]){if(!e[c]){var a=c.split("/");if(a=a[a.length-1],!e[a]){var l="function"==typeof __require&&__require;if(!r&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+c+"'")}}var h=o[c]={exports:{}};e[c][0].call(h.exports,function(t){return n(e[c][1][t]||t)},h,h.exports,t,e,o,i)}return o[c].exports}for(var s="function"==typeof __require&&__require,c=0;c<i.length;c++)n(i[c]);return n}({createAcc:[function(t,e,o){"use strict";cc._RF.push(e,"27fe1Xk7c5Avbn2wbzcc5FU","createAcc"),cc.Class({extends:cc.Component,properties:{tooltipUserName:cc.Label,tooltipPw:cc.Label,tooltipFullName:cc.Label,userNameBox:cc.Node,pwBox:cc.Node,fullNameBox:cc.Node,noti:cc.RichText,item:cc.Prefab,content:cc.Node,_listUser:[]},onLoad:function(){this.tooltipUserName.node.active=!1,this.tooltipPw.node.active=!1,this.noti.node.active=!1,this.node.getComponent(cc.Button).interactable=!1},fullNameCheck:function(){if(this.fullNameBox.getComponent(cc.EditBox).string.length>0)return this.tooltipFullName.node.active=!1,!0;this.tooltipFullName.node.active=!0,this.tooltipFullName.string="Enter your name"},userNameCheck:function(){if(!(this.userNameBox.getComponent(cc.EditBox).string.length<6))return this.tooltipUserName.node.active=!1,!0;this.tooltipUserName.node.active=!0,this.tooltipUserName.string="Username must have at least 6 letters"},checkUserInited:function(t){this._listUser.push(t);for(var e=0;e<this._listUser.length;e++)for(var o=e+1;o<=this._listUser.length;o++)if(this._listUser[e]===this._listUser[o])return this._listUser.pop(),!1;return!0},passwordCheck:function(){var t=this.pwBox.getComponent(cc.EditBox).string;if(t.match(/[0-9]/gm)&&t.match(/[A-Z]/gm)&&t.length>=8)return this.tooltipPw.node.active=!1,this.node.getComponent(cc.Button).interactable=!0,!0;this.node.getComponent(cc.Button).interactable=!1,this.tooltipPw.node.active=!0,this.tooltipPw.string="Passwords must have at least 8 letters and \ncontain at least one uppercase letters and one numbers."},hideToolTip:function(){0===this.userNameBox.getComponent(cc.EditBox).string.length&&(this.tooltipUserName.node.active=!1),0===this.pwBox.getComponent(cc.EditBox).string.length&&(this.tooltipPw.node.active=!1)},showNoti:function(){var t="<color=#0fffff>Ch\xfac m\u1eebng </c><color=#00ff00>"+this.userNameBox.getComponent(cc.EditBox).string+"</c><color=#0fffff> \u0111\xe3 \u0111\u0103ng k\xfd th\xe0nh c\xf4ng</color>";this.noti.string=t,this.noti.node.active=!0},sigUpBtn:function(){if(this.fullNameCheck()&&this.userNameCheck()&&this.passwordCheck())if(this.showNoti(),this.checkUserInited(this.userNameBox.getComponent(cc.EditBox).string)){var t=cc.instantiate(this.item);this.content.addChild(t),t.getComponent(cc.Label).string="User name: "+this.userNameBox.getComponent(cc.EditBox).string,this.userNameBox.getComponent(cc.EditBox).string="",this.fullNameBox.getComponent(cc.EditBox).string="",this.pwBox.getComponent(cc.EditBox).string=""}else this.tooltipUserName.node.active=!0,this.tooltipUserName.string="Username already exist"}}),cc._RF.pop()},{}]},{},["createAcc"]);