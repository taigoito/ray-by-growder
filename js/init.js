/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Config
import { applicationId, shopCode, newsfeedUrl } from './config.js';

// Slider
import Slider from './_slider.js';
new Slider();

// News feed
import Newsfeed from './_newsfeed.js';
new Newsfeed(newsfeedUrl);

// Products
import Products from './_products.js';

// New Arrival
const newarrivalArg = {
  count: 8,
  elemName: 'newarrival',
  elem: document.querySelector('.newarrival__products'),
  template: document.getElementById('newarrivalTemplate')
};
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=-updateTimestamp&applicationId=${applicationId}`, newarrivalArg);

// Ranking
const rankingArg = {
  count: 10,
  elemName: 'ranking',
  elem: document.querySelector('.ranking__products'),
  template: document.getElementById('rankingTemplate')
};
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=-reviewCount&applicationId=${applicationId}`, rankingArg);
