const mongoose = require('mongoose')

const mongodbUrl = "mongodb+srv://Ayaan:hc4nLAqNX5PpU7ln@cluster0.jxww1so.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb = () =>{
    return mongoose.connect(mongodbUrl)
}

module.exports={connectDb}