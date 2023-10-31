/**
 * Pickup
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Pickup {

  constructor(url, options = {}) {
    // 要素
    this.elem = options.elem || document.querySelector('.pickup__inner');
    this.template = options.template || document.getElementById('pickupTemplate');
    if (!this.elem || !this.template) return;

    // データを取得してレンダリング
    this.fetch(url);

  }


  async fetch(url) {
    const res = await fetch(`${url}pickupitems.json`);
    const data = await res.json();

    this.render(data);

  }


  render(data) {
    const len = data.length;
    for (let i = 0; i < len; i++) {
      //console.log(data[key]);

      const clone = this.template.content.cloneNode(true);
      const item = clone.querySelector('.pickup__item');
      const a = clone.querySelector('a');
      const img = clone.querySelector('img');
      const caption = clone.querySelector('figcaption');

      a.setAttribute('href', data[i].href);
      img.setAttribute('src', data[i].src);
      caption.textContent = data[i].caption;

      this.elem.appendChild(clone);
    }
  }
}
