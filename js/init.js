/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Config
import { applicationId, shopCode, url } from './config.js';

// Slider
import Slider from './_slider.js';
new Slider();

// News feed
import Newsfeed from './_newsfeed.js';
new Newsfeed(url);

// Products
import Products from './_products.js';

// New Arrival
const newarrivalArg = {
  count: 8,
  elemName: 'newarrival',
  elem: document.querySelector('.newarrival__products'),
  template: document.getElementById('newarrivalTemplate')
};
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&sort=-updateTimestamp&applicationId=${applicationId}`, newarrivalArg);

// Ranking
const rankingArg = {
  count: 10,
  elemName: 'ranking',
  elem: document.querySelector('.ranking__products'),
  template: document.getElementById('rankingTemplate')
};
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&keyword=%E6%A5%BD%E5%A4%A9&genreId=555086&sort=-reviewCount&applicationId=${applicationId}`, rankingArg);

// Recommend
const recommendArg = {
  count: 4,
  elemName: 'recommend',
  elem: document.querySelector('.recommend__products'),
  template: document.getElementById('recommendTemplate')
};
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=-reviewCount&applicationId=${applicationId}`, recommendArg);

// Calendar
import BusinessCalendar from './_businessCalendar.js';
const calendar = document.querySelectorAll('.calendar');
calendar.forEach((elem, i) => {
  new BusinessCalendar({elem: elem, month: i, url: url});
});
