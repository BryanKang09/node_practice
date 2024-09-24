const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

const validator = require('validator');



const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true, validate: {validator: function(v){
        if (!validator.isEmail(v)){
            throw new Error("not an email format")}
    }}},
    password: {type: String, trim: true},
    age: {type: Number, default: 0}
})

const User = mongoose.model("User", userSchema)

// const newUser = new User({ email:"1234@mail.com",password:"  e12345"})
// newUser.save().then((value)=>console.log(value))

User.find({name:'Cola'}).select('name - _id').then((value)=>console.log("all users",value))
// async function run() {

// }
// run();

// async function run() {
//     const database = client.db('firstDB');
//     const users = database.collection('users');

//     // const userData = await users.insertOne({name: "jenny", age: 15})
//     // console.log("results,", userData)
    
//     // const userlist = [{name:"andy", age:16},{name: "rose", age: 20}]
//     // const userlistResults = await users.insertMany(userlist)
//     // console.log(userlistResults)

//     // const findUser = await users.findOne({age:{$gt:15}});
//     // console.log ("result",findUser)

//     // const updateUser = await users.updateOne({name: "andy"},{$set: {age: 36}})
//     // console.log(updateUser)

//     // const deleteUsers = await users.deleteMany({age:{$gt:20}})
//     // console.log(deleteUsers)

//     const findUser = await users.find({}).project({_id:0}).toArray()
//     console.log(findUser)
// }


