var express = require('express');
var router = express.Router();
var utils = require('../commons/utils');
var axios = require('axios');
var jsonfile = require('jsonfile')


let foods = null;
let data_saved = './datas/data_1_100.json';
let path = __dirname;
let COUNTER = 1;
let timer_ = 1000 * 60 * 0.3;
let page = 1;
let total_food = 0;
let TIMER = null;

TIMER = setInterval(function() {
  let link = 'https://www.cooky.vn/directory/search?q=null&st=2&lv=&cs=&cm=&dt=&igt=&oc=&p=&crs=&' + 'page=' + page + '&pageSize=12&append=true&video=false';
  
  axios.get(link)
  .then(function (response) {
    // handle success
    response.data.recipes.forEach(function(element){
          utils.writeAppendFileRestNormal(data_saved, JSON.stringify(element));
          total_food++;
    });
    if (response.data.recipes == null || response.data.recipes.length == 0) {
      finish = true;
    }
    COUNTER++;
    console.log(link);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });
  if (COUNTER == 600 || COUNTER == 601 ) {
    clearInterval(TIMER);
    console.log("Finish crawl: " + page);
    console.log("Total food crawled: " + total_food);
  }
  console.log("Crawling page: " + page);
  page++;
  if (100 < page && page <= 200) {
      data_saved = './datas/data_101_200.json';
  }
  if (200 < page && page <= 300) {
    data_saved = './datas/data_201_300.json';
  }
  if (300 < page && page <= 400) {
    data_saved = './datas/data_301_400.json';
  }
  if (400 < page && page <= 500) {
    data_saved = './datas/data_401_500.json';
  }
  if (500 < page && page <= 600) {
    data_saved = './datas/data_501_600.json';
  }

}, timer_);


module.exports = router;
