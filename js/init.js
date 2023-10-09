/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Config
import { applicationId, shopCode, newsfeedUrl } from './config.js';

// Products
import Products from './_products.js';
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&applicationId=${applicationId}`);

// Slider
import Slider from './_slider.js';
new Slider();

// News feed
import Newsfeed from './_newsfeed.js';
new Newsfeed(newsfeedUrl);
