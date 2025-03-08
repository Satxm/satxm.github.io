export function hitokoto() {
const xhr: XMLHttpRequest = new XMLHttpRequest();
  xhr.onreadystatechange = function (): void {
    if (this.readyState === 4 && this.status === 200) {
      const res: { hitokoto: string; from: string } = JSON.parse(this.responseText);
      document.getElementById('hitokoto')!.innerHTML = `${res.hitokoto} -「<strong>${res.from}</strong>」`;
    }
  };
  xhr.open("GET", "https://v1.hitokoto.cn", true);
  xhr.send();
}