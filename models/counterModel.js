const mongoose = require("mongoose")

const CounterSchema = new mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    seq: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("counter", CounterSchema)