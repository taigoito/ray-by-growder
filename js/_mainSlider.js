/**
 * Slider
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

import Slider from './_slider.js';

export default class MainSlider extends Slider {

  _setupNavs() {
    // .slider__prev
    this._prev = document.createElement('a');
    this._prev.classList.add('slider__prev');
    this._prev.setAttribute('href', '#');
    //const prevIcon = document.createElement('span');
    //prevIcon.dataset.icon = 'ei-chevron-left';
    //prevIcon.dataset.size = 'l';
    //this._prev.appendChild(prevIcon);

    // .slider__next
    this._next = document.createElement('a');
    this._next.classList.add('slider__next');
    this._next.setAttribute('href', '#');
    //const nextIcon = document.createElement('span');
    //nextIcon.dataset.icon = 'ei-chevron-right';
    //nextIcon.dataset.size = 'l';
    //this._next.appendChild(nextIcon);

    // .slider__nav
    this._nav = document.createElement('ul');
    this._nav.classList.add('slider__nav');

    // .slider__navItem
    for (let i = 0; i < this.itemsCount; i++) {
      const li = document.createElement('li');
      li.classList.add('slider__navItem');

      // 画像を挿入
      const img = new Image();
      img.classList.add('slider__navImage');
      img.dataset.targetIndex = i; // data-target-indexを挿入
      const item = this._inner.children[i];
      const imgSrc = item.querySelector('img').getAttribute('src');
      img.src = imgSrc;
      li.appendChild(img);

      this._nav.appendChild(li);
    }

    this._elem.appendChild(this._prev);
    this._elem.appendChild(this._next);
    this._elem.after(this._nav);
  }

}
