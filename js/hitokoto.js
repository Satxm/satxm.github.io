document.addEventListener("DOMContentLoaded", () => {
  // 获取一言数据
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      document.getElementById('hitokoto').innerHTML = res.hitokoto + " -「<strong>" + res.from + "</strong>」";
    }
  };
  xhr.open("GET", "https://v1.hitokoto.cn", true);
  xhr.send();

  var iUpElements = document.querySelectorAll(".iUp");
  iUpElements.forEach(function (element) {
    iUp.up(element);
  });

  // 更新一言内容
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
  });
});