/*
============================================
; Title:  EMS Application
; Author: Griselda Balmaceda
; Date:   28 February 2019
; Description: Demonstrates EJS layouts.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var Employee = require("./models/employee");
var app = express();
var mongoose = require("mongoose");
var helmet = require("helmet");
var csrf = require("csurf");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

//establish database connections
var mongoDB = "mongodb+srv://user1001:WFd0DjcMnvQGv52v@ems-merh9.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function () {
    console.log("Application connected to mLab MongoDB")
});

//setting csrf protection 
var csrfProtection = csrf({
    cookie: true
});



//setting view engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', process.env.PORT || 8080);

//use statements
app.use(logger("short"));
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function (request, response, next) {
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});
app.use(express.static(__dirname + '/public'));
app.use(helmet.xssFilter());





//routing

app.get("/", function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            console.log(employees);
            res.render('index', {
                title: 'EMS|Home',
                employees: employees
            })
        }
    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: 'EMS|New'
    });
});
// app.get("/list",function(req,res){
//     res.render("list",{
//         title:'EMS|List'
//     })
// });

app.post("/process", function (req, res) {
    //get requests data 
    const employeeName = req.body.txtName;
    console.log(employeeName)
    //employee model
    var employee = new Employee({
        name: employeeName
    });
    //save employee
    employee.save(function (err) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            console.log(employeeName + 'saved');
            res.redirect('/')
        }
    });

})

app.get("/list",function(req,res){
    Employee.find({},function(error,employees){
        if(error)throw error;
        res.render("list",{
            title:'Employee List',
            employee:employees
        })
    })
})






//creating node web server
http.createServer(app).listen(8080, function () {
    console.log("Application started on port 8080!")
});