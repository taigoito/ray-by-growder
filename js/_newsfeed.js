/**
 * News feed
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Newsfeed {

  constructor(url, options = {}) {
    // 要素
    this.elem = options.elem || document.querySelector('.news__feed');
    this.template = options.template || document.getElementById('newsTemplate');
    if (!this.elem || !this.template) return;

    // データを取得してレンダリング
    this.fetch(url);

  }


  async fetch(url) {
    const res = await fetch(`${url}datecontent.json`);
    const data = await res.json();

    this.render(data);

  }


  render(data) {
    const keys = Object.keys(data);
    keys.forEach((key) => {
      //console.log(data[key]);

      const clone = this.template.content.cloneNode(true);
      const p1 = clone.querySelector('.news__date');
      const p2 = clone.querySelector('.news__content');

      p1.textContent = key;

      if (data[key].href !== '') {
        const a = document.createElement('a');
        a.setAttribute('href', data[key].href);
        a.textContent = data[key].text;
        p2.appendChild(a);
      } else {
        p2.textContent = data[key].text;
      }

      this.elem.insertBefore(clone, this.elem.firstChild);
    });
  }
}
