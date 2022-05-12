const mongoose = require("mongoose")
const DB = "mongodb://localhost/twitter123"

const connect = () => {
    return mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("success")
    }).catch((err) => console.log("fix me"))
}

module.exports = connect 
