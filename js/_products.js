/**
 * Products
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Products {
  
  constructor(url, options = {}) {
    // 設定
    this.count = options.count || 10;
    this.elemName = options.elemName || 'products';
    this.imageSize = options.imageSize || 300;

    // 要素
    this.elem = options.elem || document.querySelector(`.${this.elemName}`);
    this.template = options.template || document.getElementById(`${this.elemName}Template`);
    if (!this.elem || !this.template) return;

    // データを取得してレンダリング
    this.fetch(url);

  }


  async fetch(url) {
    const res = await fetch(url);
    const data = await res.json();
    const items = data.Items.slice(0, this.count);

    this.render(items);

  }


  render(items) {
    items.forEach((item) => {
      item = item.Item;
      //console.log(item);

      const clone = this.template.content.cloneNode(true);
      const img = clone.querySelector(`.${this.elemName}__image img`);
      const span1 = clone.querySelector(`.${this.elemName}__name`);
      const span2 = clone.querySelector(`.${this.elemName}__price`);

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

      this.elem.appendChild(clone);

    });
  }

}
