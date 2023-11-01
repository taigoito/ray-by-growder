/**
 * Ranking
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

import Products from './_products.js';

export default class Ranking extends Products {

  render(items) {
    super.render(items);

    const elem = document.querySelector('#rankingMenu .header__submenuInner');
    const template = document.getElementById('rankingMenuTemplate');
    if (!elem || !template) return;

    items = items.slice(0, 5);

    items.forEach((item) => {
      item = item.Item;
      //console.log(item);

      const clone = template.content.cloneNode(true);
      const img = clone.querySelector('.header__rankingMenuImage img');
      const span1 = clone.querySelector('.header__rankingMenuName');
      const span2 = clone.querySelector('.header__rankingMenuPrice');

      // 画像サイズの変更
      let imageUrl = item.smallImageUrls[0].imageUrl;
      imageUrl = imageUrl.replace('?_ex=64x64', `?_ex=${this.imageSize}x${this.imageSize}`);

      // リンク設定
      const anchors = clone.querySelectorAll('a');
      anchors.forEach((a) => {
        a.setAttribute('href', item.itemUrl);
      });

      img.setAttribute('src', imageUrl);
      span1.textContent = item.itemName;
      span2.textContent = `${item.itemPrice.toLocaleString()}円 (税込)`;

      elem.appendChild(clone);
    });
    
  }

}
