var iUp = (function () {
	var time = 0,
		duration = 150,
		clean = function () {
			time = 0;
		},
		up = function (element) {
			setTimeout(function () {
				element.classList.add("up");
			}, time);
			time += duration;
		},
		down = function (element) {
			element.classList.remove("up");
		},
		toggle = function (element) {
			setTimeout(function () {
				element.classList.toggle("up");
			}, time);
			time += duration;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	};
})();

document.addEventListener('DOMContentLoaded', function () {
	// 获取一言数据
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.responseText);
			document.getElementById('description').innerHTML = res.hitokoto + "<br/> -「<strong>" + res.from + "</strong>」";
		}
	};
	xhr.open("GET", "https://v1.hitokoto.cn", true);
	xhr.send();

	var iUpElements = document.querySelectorAll(".iUp");
	iUpElements.forEach(function (element) {
		iUp.up(element);
	});

	var avatarElement = document.querySelector(".js-avatar");
	avatarElement.addEventListener('load', function () {
		avatarElement.classList.add("show");
	});
});

var imgUrls = [
	"assets/img/e39ef13fc4348068390375c2b3887c3a.jpg",
	"assets/img/e64cd4ad2d6fe290a358e48ba9948f7f.jpg",
	"assets/img/ecd05884e2fd05fd4176929353894f6e.jpg",
	"assets/img/ef4af52bd82b9a827196b868d347e676.jpg",
	"assets/img/ef68b51a8aab0cc134122c85ac140f92.jpg",
	"assets/img/f080602a7f8220b5d8cf52d37d260bab.jpg",
	"assets/img/fe8e504680ffb218427f4e5709983ae5.jpg",
	"assets/img/0bd6e01c39bf87059dfdc9eb5417e2e2.jpg",
	"assets/img/0d854feba1e9a51cf9441bf95fea302c.jpg",
	"assets/img/0e03eeb3971d3f7688e05fab49819cce.jpg",
	"assets/img/1c59c5172ce9addb8462efc07f08e231.jpg",
	"assets/img/02b12f182deea39301c812eeed3ed0af.jpg",
	"assets/img/03c28546103b5e3530a67e97a4c8e441.jpg",
	"assets/img/4df5a6c22c1e2b16f7c5b9e1dadcc690.jpg",
	"assets/img/4e30b35e2177b07493b30e5204a76425.jpg",
	"assets/img/05b9ee8f7e38e092a024bac002f53918.jpg",
	"assets/img/5c089cf4f6289416ddae102e9aa81f29.jpg",
	"assets/img/5cb8e10fa4346cffaf193960bb1487f6.jpg",
	"assets/img/5ce0fedd8d0376bbfa23ff0ce24ad1cb.jpg",
	"assets/img/5f1fc6e11316281fe5a2e0b699b9b944.jpg",
	"assets/img/5f557a1c95a28186201cba137dd091a7.jpg",
	"assets/img/06b6184a3ffa15fad6bfab72c03421a9.jpg",
	"assets/img/6e26bf010f76b9da8f56415b88b03a93.jpg",
	"assets/img/7c8a73058155b6a07becaea7f00d0bf4.jpg",
	"assets/img/7f9cafd80f816d7702ecfe89ca48fbec.jpg",
	"assets/img/7f909f30814c339759a077800a6bc1e3.jpg",
	"assets/img/8d82005a253faa8e5a6d519cf88cb635.jpg",
	"assets/img/9bff5eba16b58971322557b263ba8266.jpg",
	"assets/img/31bd5fd1f110dae38923c27ff382d970.jpg",
	"assets/img/40ff9cc0f8029a5c6d808c0efbfc8f51.jpg",
	"assets/img/46b83ad1f2101782025349f9de395a26.jpg",
	"assets/img/47c7805bd444ff5f38e411700b1bc595.jpg",
	"assets/img/52a3b02eb8d84457393339a7c6d00071.jpg",
	"assets/img/55a19b5c71014be9572291ed581933e5.jpg",
	"assets/img/63b8a29ef206df29c67238b9304f2678.jpg",
	"assets/img/69f08afd03aa55c376a7e5676f6c9225.jpg",
	"assets/img/84f09facbb8aed8471c71485ff610b78.jpg",
	"assets/img/94a67698c58cca0be7a1932312a7424d.jpg",
	"assets/img/227ecf55c156ea1eab9519e7c46478aa.jpg",
	"assets/img/315ab36ad10e6f71cce429db42289196.jpg",
	"assets/img/483e30eb0618f0a2b26f391106558aa0.jpg",
	"assets/img/531f0f86ebc830c9bbe0bfd417886503.jpg",
	"assets/img/556ad35f91361c7c655770816567827a.jpg",
	"assets/img/590ba50825298d09b803093757941dab.jpg",
	"assets/img/635a0fc8ce46e9b8d479ee1501e0b9ed.jpg",
	"assets/img/686c7918c5c023a733363c479a179860.jpg",
	"assets/img/1243c242c751d30586a406b1e378121f.jpg",
	"assets/img/5725ffa39f95978614d6de75310f6246.jpg",
	"assets/img/6278bc78e1854a402f1fd780b728d823.jpg",
	"assets/img/6917a8cdddb7e88c707cb8a57389d23d.jpg",
	"assets/img/9004a6ef6f801af162f6d843f2d19deb.jpg",
	"assets/img/9801c7d5844994fb31f2c323e1f671f1.jpg",
	"assets/img/15361ef96f5670ee117d87036bfa8df7.jpg",
	"assets/img/63992e0433051b9fbc3d547501880330.jpg",
	"assets/img/76709a5af5e1d539ad041d563b25225d.jpg",
	"assets/img/85589cfc15af1c0359dbe1c99d0b2713.jpg",
	"assets/img/a9ad04c122c008732f83256343dbe433.jpg",
	"assets/img/a46d99327a7f2491f14f36730e73f789.jpg",
	"assets/img/a66ce604fc89fdeed13e37c1baf3f0bc.jpg",
	"assets/img/aecddabca73804093379c77a831ef088.jpg",
	"assets/img/b0c04fa62ddffc181380a7d7a49b6653.jpg",
	"assets/img/b1e643a4a373cd7f698e7ec6f91768e3.jpg",
	"assets/img/b59c3f63a9ff505665dd8ba5483896aa.jpg",
	"assets/img/b429b6e266daec10fcde07827beac0b2.jpg",
	"assets/img/b462d27ed0defa0337b2ef26b66cdc8c.jpg",
	"assets/img/b2281df488667df3a4e5a88237170e44.jpg",
	"assets/img/bf0d86f51aa8a6480158a6d739db109f.jpg",
	"assets/img/bf64e0f8af5bd9afc810f27b04a9f762.jpg",
	"assets/img/c669b1d51b78c6e03a3bff333f3549d4.jpg",
	"assets/img/c1602761aabbfcdebf10ac96b95294d1.jpg",
	"assets/img/c328895887e7d81f180ba6182a0febee.jpg",
	"assets/img/ca55ba9da2f165c1c0f376c7b26e9f5d.jpg",
	"assets/img/cbb15e6bbf2d42bc086d658aeea7f8c9.jpg",
	"assets/img/cce2353e224d58f1c75cb3fcddecd526.jpg",
	"assets/img/cd1f1616b0ba4aa6173e7908292c9118.jpg",
	"assets/img/ce2b3b5972abf2fc8e0cc171adb3b9c8.jpg",
	"assets/img/ce699e819edbd8870c21fd5174e41899.jpg",
	"assets/img/d2debb38aae17f031f456200b96d48db.jpg",
	"assets/img/d5d6c6e274074b49e3f324a2a9b7bb26.jpg",
	"assets/img/d8ba4097dbf1b533eebd8945bafac25a.jpg",
	"assets/img/d8bd63d1cfd2406a2be796ba66385457.jpg",
	"assets/img/d80a359888456d028a48b43e400b7064.jpg",
	"assets/img/da14de28568c132b7c9003508a3fd0a3.jpg",
	"assets/img/da755c67883f927728d316388374dc3b.jpg",
	"assets/img/dd1b4df3297f5c1d11ceab0da83a595b.jpg",
	"assets/img/dee4f2033cba9745c0e135993dc89cef.jpg",
	"assets/img/df694e4d234887748a1a1e7ee90d1e15.jpg",
	"assets/img/dfc1baf6c5e87f13635fdd166ca536ad.jpg",
	"assets/img/e06e6714e2a308399103ce5972a9bde3.jpg"
	];
var index = Math.round( Math.random() * 88 );
var panel = document.querySelector('#panel');
var imgUrl = imgUrls[index];
var url = imgUrl;
panel.style.background = "url('" + url + "') center center no-repeat #666";
panel.style.backgroundSize = "cover";
	