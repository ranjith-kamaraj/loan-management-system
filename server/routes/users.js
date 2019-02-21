var express = require('express');
var router = express.Router();
var Customer = require('../models/customer');


router.route('/').get((req, res) => {
  Customer.find((err, value) => {
    if (err) {
      console.log(err);
    } else {
      res.json(value);
    }
  });
})

router.route('/addCustomer').post( function (req, res) {
  var customer = new Customer()
  customer.name = req.body.name;
  customer.gender = req.body.gender;
  customer.amount = req.body.amount;
  customer.loanTenure = req.body.loanTenure;
  customer.save();
  res.send('succesfully added')
})
module.exports = router;
