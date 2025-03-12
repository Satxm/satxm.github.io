function hitokoto() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var res = JSON.parse(this.responseText);
      document.getElementById('hitokoto').innerHTML = res.hitokoto + " -「<strong>" + res.from + "</strong>」";
    }
  };
  xhr.open("GET", "https://v1.hitokoto.cn", true);
  xhr.send();
}

hitokoto();
document.addEventListener('click', function (event) {
  if (event.target.innerText == '首页') {
    hitokoto();
  }
  if (event.target.innerText == 'Satxm\'s Book') {
    hitokoto();
  }
});
