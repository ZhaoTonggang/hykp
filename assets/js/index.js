var title = "火影跑酷";
var content = "飞檐走壁动作游戏《火影跑酷》让你挑战反应能力极限！";
var link = "http://yx8.com/huoyingkupao/?share";
var ico = "./142537_7329.jpg";

function moreGame() {
	EgretShare.moreGame();
}
document.addEventListener('EgretShareLoaded', function() {
	EgretShare.setShareData(title, content, link, ico)
});
var egret_h5 = {};
egret_h5.prefix = "";
egret_h5.loadScript = function(list, callback) {
	var loaded = 0;
	if (navigator.userAgent.indexOf("Trident/5") > -1) {
		//ie9
		var loadNext = function() {
			egret_h5.loadSingleScript(egret_h5.prefix + list[loaded], function() {
				loaded++;
				if (loaded >= list.length) {
					callback();
				} else {
					loadNext();
				}
			})
		};
		loadNext();
	} else {
		list.forEach(function(f, i) {
			egret_h5.loadSingleScript(egret_h5.prefix + f, function() {
				loaded++;
				if (loaded >= list.length) {
					callback();
				}
			})
		});
	}
}
egret_h5.loadSingleScript = function(src, callback) {
	var s = document.createElement('script');
	if (s.hasOwnProperty("async")) {
		s.async = false;
	}
	if (window.version) {
		s.src = src + "?r=" + window.version.src[src];
	} else {
		s.src = src + "?r=" + Math.random();
	}
	s.addEventListener('load', function() {
		this.removeEventListener('load', arguments.callee, false);
		callback();
	}, false);
	document.body.appendChild(s);
}
egret_h5.loadScript([
	"./assets/js/browser-api.js",
	"./assets/js/game-min.js"
], function() {
	var orient = browsers.orientation;
	if (orient.check(orient.portrait)) {
		egret_h5.startGame();
	}
})
window.shareData = {
	'title': '火影酷跑',
	'link': 'http://game.ikongzhong.cn/games/hypk/',
	'imgurl': 'http://game.ikongzhong.cn/games/hypk/icon.png'
}
window.shareFriendData = {
	'title': '火影酷跑',
	'content': '关注空中传媒网络,更多好玩的游戏等着你。',
	'link': 'http://game.ikongzhong.cn/games/hypk/',
	'imgurl': 'http://game.ikongzhong.cn/games/hypk/icon.png'
}