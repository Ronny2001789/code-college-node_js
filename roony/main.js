"use strict"

const cities = require("cities");
const usersController = require("../controllers/usersController");
const coursesController = require("../controllers/coursesController");
// var mycity = cities.zip_lookup("10016");
// console.log(mycity);

// const port = 3000;
// htttp = require("http");

// app = http.createserver(res,req) => {
//     console.log()
// };

//  var npm http-status-codes  -s

// var house = prompt("enter your password");

// function mycode(req,res) {
//     if ("ronny" == house) {
//        alert("welcome house human")
//     else if (house == "jim"){
//         alert("welcome to new world")
//     else{
//         alert("wrong password human try again u got these")
//       }  
//      }
//     }
// };

// // if i want to install express.js u must run these command 
// npm install express --save 

// // express it parsing incominbg code to server
// express.urlendcode({
//     extends: false
// });
// powwer(req,res) => {
//   let car = req.body  
// res.render("index.ejs")
// }

router.get("/users", usersController.index);
router.get("/users/new",usersController.authenticate,usersController);
router.get("/users/:id",usersController.authenticate,usersController);
router.post("/users/create", usersController.authenticate,usersController);


router.get("/courses",coursesController.index , coursesController.indexView);
router.get("/courses/new",coursesController.create,coursesController);
router.get("/courses/:id",coursesController,coursesController);
router.post("/courses/create",coursesController,coursesController);
















