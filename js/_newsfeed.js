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
    const res = await fetch(url);
    const data = await res.json();

    this.render(data);

  }


  render(data) {
    data.forEach((dt) => {
      //console.log(dt);

      const clone = this.template.content.cloneNode(true);
      const p1 = clone.querySelector('.news__date');
      const p2 = clone.querySelector('.news__content');
      const a = document.createElement('a');

      p1.textContent = dt.date;
      p2.appendChild(a);
      a.setAttribute('href', dt.link);
      a.textContent = dt.content;

      this.elem.appendChild(clone);

    });
  }
}
