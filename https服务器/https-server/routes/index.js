var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let {
    message
  } = req.query;
  console.log(req.query.message);
  
  if(message=='亲爱的'){
    res.send("你个死鬼");
  }else if(message=='你在哪里'){
    res.send("我在你心里");
  }else if(message=='你在干嘛'){
    res.send("我在想你");
  }else if(message=='你和谁在一起'){
    res.send("想和你在一起");
  }

});

module.exports = router;
