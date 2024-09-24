const express = require ('express');
const app = express ();

// app.get("/", (req, res) => {
//     // console.log("Root route accessed");
//     res.send("hello world");
// });

// app.get("/about", (req, res) => {
//     // console.log("Root route accessed");
//     res.send("about world");
// });

const token = null

const checkAuth = (req,res, next) => {
    console.log("admin permit");
    next();
}

const getUser = (req,res) => {
    res.send("user info")
    console.log("user info");
}

const checkToken = (req,res) => {
    if (token){
        next();
    }
    res.send("you don't have token");
}

app.get("/users", checkAuth, checkToken, getUser)

app.listen(5000,()=>{
    console.log("server on")
})