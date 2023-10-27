/**
 * Recommend Slider
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

import Slider from './_slider.js';

export default class RecommendSlider extends Slider {

  _getAdjustedDistance(index) {
    const len = this._items.length;
    let result = this.gap / 2
    for (let i = 0; i > -3; i--) {
      let j = (index + i - 1 + len) % len;
      result -= this._items[j].clientWidth;
      result -= this.gap;
    }
    return result;

  }
}
