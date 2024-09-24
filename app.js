const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);


async function run() {
    const database = client.db('firstDB');
    const users = database.collection('users');

    // const userData = await users.insertOne({name: "jenny", age: 15})
    // console.log("results,", userData)
    
    // const userlist = [{name:"andy", age:16},{name: "rose", age: 20}]
    // const userlistResults = await users.insertMany(userlist)
    // console.log(userlistResults)

    // const findUser = await users.findOne({age:{$gt:15}});
    // console.log ("result",findUser)

    // const updateUser = await users.updateOne({name: "andy"},{$set: {age: 36}})
    // console.log(updateUser)

    // const deleteUsers = await users.deleteMany({age:{$gt:20}})
    // console.log(deleteUsers)

    const findUser = await users.find({}).project({_id:0}).toArray()
    console.log(findUser)
}
  
run();

