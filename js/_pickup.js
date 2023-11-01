/**
 * Pickup
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Pickup {

  constructor(url, options = {}) {
    // 要素
    this.elem1 = options.elem1 || document.querySelector('.pickup__inner');
    this.template1 = options.template1 || document.getElementById('pickupTemplate');
    this.elem2 = options.elem2 || document.querySelector('#pickupMenu .header__submenuInner');
    this.template2 = options.template2 || document.getElementById('pickupMenuTemplate')
    if (!this.elem1 || !this.template1 || !this.elem2 || !this.template2) return;

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

      const clone1 = this.template1.content.cloneNode(true);
      const a1 = clone1.querySelector('a');
      const img1 = clone1.querySelector('img');
      const caption = clone1.querySelector('figcaption');

      a1.setAttribute('href', data[i].href);
      img1.setAttribute('src', data[i].src);
      caption.textContent = data[i].caption;

      this.elem1.appendChild(clone1);

      const clone2 = this.template2.content.cloneNode(true);
      const a2 = clone2.querySelector('a');
      const img2 = clone2.querySelector('img');

      a2.setAttribute('href', data[i].href);
      img2.setAttribute('src', data[i].src);

      this.elem2.appendChild(clone2);
    }
    
  }
}
