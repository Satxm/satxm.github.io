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

var btnMobileMenu = document.querySelector('.btn-mobile-menu__icon');
var navigationWrapper = document.querySelector('.navigation-wrapper');

btnMobileMenu.addEventListener('click', function () {
	if (navigationWrapper.style.display == "block") {
		navigationWrapper.addEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			navigationWrapper.classList.toggle('visible');
			navigationWrapper.classList.toggle('animated');
			navigationWrapper.classList.toggle('bounceOutUp');
			navigationWrapper.removeEventListener('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', arguments.callee);
		});
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceOutUp');
	} else {
		navigationWrapper.classList.toggle('visible');
		navigationWrapper.classList.toggle('animated');
		navigationWrapper.classList.toggle('bounceInDown');
	}
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-list');
	btnMobileMenu.classList.toggle('social');
	btnMobileMenu.classList.toggle('iconfont');
	btnMobileMenu.classList.toggle('icon-angleup');
	btnMobileMenu.classList.toggle('animated');
	btnMobileMenu.classList.toggle('fadeIn');
});

var imgUrls = [
	"assets/img/18958785.jpg",
	"assets/img/23601458.jpg",
	"assets/img/23870987.jpg",
	"assets/img/32168773.jpg",
	"assets/img/38636316.jpg",
	"assets/img/39592741.jpg",
	"assets/img/44445633.jpg",
	"assets/img/53582870.jpg",
	"assets/img/57294670.jpg",
	"assets/img/58767332.jpg",
	"assets/img/62748235.jpg",
	"assets/img/62810615.jpg",
	"assets/img/66862697.jpg",
	"assets/img/67513225.jpg",
	"assets/img/74264577.jpg",
	"assets/img/84657530.jpg",
	"assets/img/89107377.jpg",
	"assets/img/99732256.jpg",
	"assets/img/05983780.jpg",
	"assets/img/08710712.jpg",
	"assets/img/09183364.jpg",
	"assets/img/11573974.jpg",
	"assets/img/13171493.jpg"
	];
var index = Math.round( Math.random() * 23 );
var panel = document.querySelector('#panel');
var imgUrl = imgUrls[index];
var url = imgUrl;
panel.style.background = "url('" + url + "') center center no-repeat #666";
panel.style.backgroundSize = "cover";
	