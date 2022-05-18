const mongoose = require("mongoose")
const MONGODB_URI = "mongodb+srv://lewisjackson398:Testing123@twitter-clone.it9rw.mongodb.net/?retryWrites=true&w=majority"

const connect = () => {
    return mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("success")
    }).catch((err) => console.log("fix me"))
}

module.exports = connect 
