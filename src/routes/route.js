const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
   // logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get("/solution1", function (req, res) {
let arr1 = [1,2,3,5,6,7]
let missingNumber
        
   let sum1 =  ((arr1.length+1)*(arr1.length+2))/2
   ///n*(n+1)/2              
   let sumArray1 = 0
   for(let i = 0; i < arr1.length; i++) {
      sumArray1 = sumArray1 + arr1[i]
   }

   missingNumber1 = sum1 - sumArray1
   
   res.send(  { data: missingNumber1  }  );
});

router.get("/solution2", function (req, res) {

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
               
    let arr2 = [33, 34, 35, 37, 38]
    let missingNumber2no
     
    let sum2  =  (arr2.length+1)*(arr2[0] + (arr2[arr2.length - 1]))/2       /// n * (first + last) / 2
    let sumArray2 = 0
    for(let j = 0; j < arr2.length; j++) {
    sumArray2 = sumArray2 + arr2[j]
    }
    
    missingNumber2 = sum2 - sumArray2
    
    res.send(  { data: missingNumber2  }  );
    
    });

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;