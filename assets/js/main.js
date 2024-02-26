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
	"e39ef13fc4348068390375c2b3887c3a.jpg",
	"e64cd4ad2d6fe290a358e48ba9948f7f.jpg",
	"ecd05884e2fd05fd4176929353894f6e.jpg",
	"ef4af52bd82b9a827196b868d347e676.jpg",
	"ef68b51a8aab0cc134122c85ac140f92.jpg",
	"f080602a7f8220b5d8cf52d37d260bab.jpg",
	"fe8e504680ffb218427f4e5709983ae5.jpg",
	"0bd6e01c39bf87059dfdc9eb5417e2e2.jpg",
	"0d854feba1e9a51cf9441bf95fea302c.jpg",
	"0e03eeb3971d3f7688e05fab49819cce.jpg",
	"1c59c5172ce9addb8462efc07f08e231.jpg",
	"02b12f182deea39301c812eeed3ed0af.jpg",
	"03c28546103b5e3530a67e97a4c8e441.jpg",
	"4df5a6c22c1e2b16f7c5b9e1dadcc690.jpg",
	"4e30b35e2177b07493b30e5204a76425.jpg",
	"05b9ee8f7e38e092a024bac002f53918.jpg",
	"5c089cf4f6289416ddae102e9aa81f29.jpg",
	"5cb8e10fa4346cffaf193960bb1487f6.jpg",
	"5ce0fedd8d0376bbfa23ff0ce24ad1cb.jpg",
	"5f1fc6e11316281fe5a2e0b699b9b944.jpg",
	"5f557a1c95a28186201cba137dd091a7.jpg",
	"06b6184a3ffa15fad6bfab72c03421a9.jpg",
	"6e26bf010f76b9da8f56415b88b03a93.jpg",
	"7c8a73058155b6a07becaea7f00d0bf4.jpg",
	"7f9cafd80f816d7702ecfe89ca48fbec.jpg",
	"7f909f30814c339759a077800a6bc1e3.jpg",
	"8d82005a253faa8e5a6d519cf88cb635.jpg",
	"9bff5eba16b58971322557b263ba8266.jpg",
	"31bd5fd1f110dae38923c27ff382d970.jpg",
	"40ff9cc0f8029a5c6d808c0efbfc8f51.jpg",
	"46b83ad1f2101782025349f9de395a26.jpg",
	"47c7805bd444ff5f38e411700b1bc595.jpg",
	"52a3b02eb8d84457393339a7c6d00071.jpg",
	"55a19b5c71014be9572291ed581933e5.jpg",
	"63b8a29ef206df29c67238b9304f2678.jpg",
	"69f08afd03aa55c376a7e5676f6c9225.jpg",
	"84f09facbb8aed8471c71485ff610b78.jpg",
	"94a67698c58cca0be7a1932312a7424d.jpg",
	"227ecf55c156ea1eab9519e7c46478aa.jpg",
	"315ab36ad10e6f71cce429db42289196.jpg",
	"483e30eb0618f0a2b26f391106558aa0.jpg",
	"531f0f86ebc830c9bbe0bfd417886503.jpg",
	"556ad35f91361c7c655770816567827a.jpg",
	"590ba50825298d09b803093757941dab.jpg",
	"635a0fc8ce46e9b8d479ee1501e0b9ed.jpg",
	"686c7918c5c023a733363c479a179860.jpg",
	"1243c242c751d30586a406b1e378121f.jpg",
	"5725ffa39f95978614d6de75310f6246.jpg",
	"6278bc78e1854a402f1fd780b728d823.jpg",
	"6917a8cdddb7e88c707cb8a57389d23d.jpg",
	"9004a6ef6f801af162f6d843f2d19deb.jpg",
	"9801c7d5844994fb31f2c323e1f671f1.jpg",
	"15361ef96f5670ee117d87036bfa8df7.jpg",
	"63992e0433051b9fbc3d547501880330.jpg",
	"76709a5af5e1d539ad041d563b25225d.jpg",
	"85589cfc15af1c0359dbe1c99d0b2713.jpg",
	"a9ad04c122c008732f83256343dbe433.jpg",
	"a46d99327a7f2491f14f36730e73f789.jpg",
	"a66ce604fc89fdeed13e37c1baf3f0bc.jpg",
	"aecddabca73804093379c77a831ef088.jpg",
	"b0c04fa62ddffc181380a7d7a49b6653.jpg",
	"b1e643a4a373cd7f698e7ec6f91768e3.jpg",
	"b59c3f63a9ff505665dd8ba5483896aa.jpg",
	"b429b6e266daec10fcde07827beac0b2.jpg",
	"b462d27ed0defa0337b2ef26b66cdc8c.jpg",
	"b2281df488667df3a4e5a88237170e44.jpg",
	"bf0d86f51aa8a6480158a6d739db109f.jpg",
	"bf64e0f8af5bd9afc810f27b04a9f762.jpg",
	"c669b1d51b78c6e03a3bff333f3549d4.jpg",
	"c1602761aabbfcdebf10ac96b95294d1.jpg",
	"c328895887e7d81f180ba6182a0febee.jpg",
	"ca55ba9da2f165c1c0f376c7b26e9f5d.jpg",
	"cbb15e6bbf2d42bc086d658aeea7f8c9.jpg",
	"cce2353e224d58f1c75cb3fcddecd526.jpg",
	"cd1f1616b0ba4aa6173e7908292c9118.jpg",
	"ce2b3b5972abf2fc8e0cc171adb3b9c8.jpg",
	"ce699e819edbd8870c21fd5174e41899.jpg",
	"d2debb38aae17f031f456200b96d48db.jpg",
	"d5d6c6e274074b49e3f324a2a9b7bb26.jpg",
	"d8ba4097dbf1b533eebd8945bafac25a.jpg",
	"d8bd63d1cfd2406a2be796ba66385457.jpg",
	"d80a359888456d028a48b43e400b7064.jpg",
	"da14de28568c132b7c9003508a3fd0a3.jpg",
	"da755c67883f927728d316388374dc3b.jpg",
	"dd1b4df3297f5c1d11ceab0da83a595b.jpg",
	"dee4f2033cba9745c0e135993dc89cef.jpg",
	"df694e4d234887748a1a1e7ee90d1e15.jpg",
	"dfc1baf6c5e87f13635fdd166ca536ad.jpg",
	"e06e6714e2a308399103ce5972a9bde3.jpg"
	];
var index = Math.round( Math.random() * 88 );
var panel = document.querySelector('#panel');
var imgUrl = imgUrls[index];
var url = "https://unpkg.com/satxm-home-page@latest/assets/img/" + imgUrl;
panel.style.background = "url('" + url + "') center center no-repeat #666";
panel.style.backgroundSize = "cover";
	