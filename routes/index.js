// var express = require('express');
// var router = express.Router();
// var utils = require('../commons/utils');
// var axios = require('axios');
// var jsonfile = require('jsonfile')


// let foods = null;
// let data_saved = './datas/data_3.json';
// let path = __dirname;
// let COUNTER = 2201;
// let timer_ = 1000 * 60 * 0.5;
// let page = 2201;
// let total_food = 0;
// let TIMER = null;

// TIMER = setInterval(function() {
//   let link = 'https://www.cooky.vn/directory/search?q=null&st=2&lv=&cs=&cm=&dt=&igt=&oc=&p=&crs=&' + 'page=' + page + '&pageSize=12&append=true&video=false';
  
//   axios.get(link)
//   .then(function (response) {
//     // handle success
//     response.data.recipes.forEach(function(element){
//           utils.writeAppendFileRestNormal(data_saved, JSON.stringify(element));
//           total_food++;
//     });
//     if (response.data.recipes == null || response.data.recipes.length == 0) {
//       finish = true;
//     }
//     COUNTER++;
//     console.log(link);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
//   if (COUNTER == 2500 || COUNTER == 2501 ) {
//     clearInterval(TIMER);
//     console.log("Finish crawl: " + page);
//     console.log("Total food crawled: " + total_food);
//   }
//   console.log("Crawling page: " + page);
//   page++;

// }, timer_);


// module.exports = router;
