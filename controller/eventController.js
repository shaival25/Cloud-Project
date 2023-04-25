const eventModel = require("../models/eventModel")
const couterModel = require("../models/counterModel")

// exports.saveEvent =  (req,res)=>{
//     let event = new eventModel(req.body)
//     console.log(req.body)
//     event.save().then((success,err)=>{
//         if(err){

//         } else{
//             res.json({
//                 status:200,
//                 msg:"Event Registered",
//                 data:success
//             })
//         }
//     })
// }   

exports.getEvent = (req, res) => {
    eventModel.find({ eventstatus: "undefined" }).then((success, err) => {
        if (err) {

        } else {
            res.json({
                status: 200,
                msg: "Event Registered",
                data: success
            })
        }
    })
}

exports.getRejectEvents = (req, res) => {
    eventModel.find({ eventstatus: "rejected" }).then((success, err) => {
        if (err) {

        } else {
            res.json({
                status: 200,
                msg: "Event Registered",
                data: success
            })
        }

    })
}
exports.getApprovedEvents = (req, res) => {
    eventModel.find({ eventstatus: "approved" }).then((success, err) => {
        if (err) {

        } else {
            console.log(success)

            res.json({
                status: 200,
                msg: "Event Registered",
                data: success
            })

        }

    })
}


exports.saveEvent = (req, res) => {
    // console.log("hidlknfkkaenkbkjsjbfjlsdbjhasvdhjav")
    let event = new eventModel(req.body)
    console.log(req.body)
    let id
    couterModel.findOneAndUpdate({ type: "eventseq" }, { $inc: { "seq": 1 } }, { new: true }).then((success, err) => {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime 1"
            })
        } else {
            id = success.seq
            event.eventstatus = "undefined"
            event.id = id
            console.log(event)
            event.save().then((success, err) => {
                if (err) {
                    console.log(err);
                    res.json({
                        status: -1,
                        msg: "SMW",
                        data: "Please Try After Sometime 2"
                    })
                } else {
                    res.json({
                        status: 200,
                        msg: "Event registered!!",
                        data: success
                    })
                }
            })
        }
    })
}


exports.rejectEvent = (req, res) => {
    console.log(req.body.id)
    const id = { id: req.body.id }
    const change = { eventstatus: "rejected" }
    eventModel.findOneAndUpdate(id, change, { new: true }).exec().then((success, err) => {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            res.json({
                status: 1,
                data: success
            })
        }
    })
}



exports.approveEvent = (req, res) => {
    console.log(req.body.id)
    const id = { id: req.body.id }
    const change = { eventstatus: "approved" }
    eventModel.findOneAndUpdate(id, change, { new: true }).exec().then((success, err) => {
        if (err) {
            res.json({
                status: 0
            })
        } else {
            console.log(success)
            res.json({
                status: 1,
                data: success
            })
        }
    })
}