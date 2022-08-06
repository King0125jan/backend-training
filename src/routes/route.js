const express = require('express');

const router = express.Router();
const today=require('../util/helper.js')
const mm=require('../util/helper.js')
const xyz= require('../logger/logger.js')
const batch=require('../util/helper.js')
const trim=require('../validator/formatter.js')
const func=require('../validator/formatter.js')
const lower=require('../validator/formatter.js')

router.get('/test-me', function (req, res) {
    batch.getBatchInfo()
    xyz.welcome()
   console.log('month is', mm.month)
   console.log('today is', today.date)
   batch.getBatchInfo()
   console.log(trim.result)
   console.log(lower.str)
   console.log(func.camp)
   
   res.send('This is my second api ever')
} )  
router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason