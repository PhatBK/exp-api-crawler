var express = require('express');
var router = express.Router();

var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  let page = 1
  let api = 'https://www.cooky.vn/directory/search?q=null&st=2&lv=&cs=&cm=&dt=&igt=&oc=&p=21&crs=&page=' + page + '&pageSize=12&append=true&video=false'
  axios.get(api)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
