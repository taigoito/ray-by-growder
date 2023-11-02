/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Config
import { applicationId, shopCode, url } from './config.js';

// Main Menu
import MainMenu from './_mainMenu.js';
new MainMenu(url, `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=standard&applicationId=${applicationId}`);

// Main Slider
import MainSlider from './_mainSlider.js';
const mainSlider = document.getElementById('mainSlider');
new MainSlider(mainSlider);

// News feed
import Newsfeed from './_newsfeed.js';
new Newsfeed(url);

// Products
import Products from './_products.js';

// Ranking
import Ranking from './_ranking.js';

// Recommend Slider
import RecommendSlider from './_recommendSlider.js';

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
new Ranking(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=standard&applicationId=${applicationId}`, rankingArg);

// Recommend
const recommendSlider = document.getElementById('recommendSlider');
if (recommendSlider) {
  const recommendArg = {
    count: 8,
    elemName: 'recommend',
    elem: recommendSlider.querySelector('.slider__inner'),
    template: document.getElementById('recommendTemplate')
  };
  const callback = () => {
    new RecommendSlider(recommendSlider);
  }
  new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=standard&applicationId=${applicationId}`, recommendArg, callback);
} else {
  new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&sort=standard&applicationId=${applicationId}`);
}

// Pickup
import Pickup from './_pickup.js';
new Pickup(url);

// Calendar
import BusinessCalendar from './_businessCalendar.js';
const calendar = document.querySelectorAll('.calendar');
calendar.forEach((elem, i) => {
  new BusinessCalendar({elem: elem, month: i, url: url});
});
