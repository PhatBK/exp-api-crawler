// var express = require('express');
// var router = express.Router();
// var utils = require('../commons/utils');
// var axios = require('axios');

// var jsonfile = require('jsonfile')

// let path = __dirname;
// let data_saved = './datas/users/data_1.json';

// let COUNTER = 1;

// let timer_ = 1000 * 60 * 1;

// let page = 1;

// let list_users = null;

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
//   if (COUNTER == 100 || COUNTER == 101 ) {
//     clearInterval(TIMER);
//     console.log("Finish crawl: " + page);
//     console.log("Total user infos crawled: " + total_food);
//   }
//   console.log("Crawling users page: " + page);
//   page++;

//   if (20 <= page && page < 40) {
//     data_saved = './datas/users/data_2.json';
//   }
//   if (40 <= page && page < 60) {
//     data_saved = './datas/users/data_3.json';
//   }
//   if (60 <= page && page < 80) {
//     data_saved = './datas/users/data_4.json';
//   }
//   if (80 <= page && page <= 100) {
//     data_saved = './datas/users/data_5.json';
//   }

// }, timer_);


// module.exports = router;
