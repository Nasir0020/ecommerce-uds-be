const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://betrayalsoul20:87LBAUBJVEFaWzlj@cluster0.pvik9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
