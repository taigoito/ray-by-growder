/**
 * Init
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

// Config
import { applicationId, shopCode } from './config.js';

// Products
import Products from './_products.js';
new Products(`https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?format=json&shopCode=${shopCode}&applicationId=${applicationId}`);
