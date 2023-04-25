var router = require('express').Router()
var eventController = require('./controller/eventController')

router.post('/events', eventController.saveEvent)
router.get('/getEvent', eventController.getEvent)

router.post('/rejectevents', eventController.rejectEvent)
router.get('/getRejected', eventController.getRejectEvents)


router.post('/approveevents', eventController.approveEvent)
router.get('/getApproved', eventController.getApprovedEvents)


router.get("", (req, res) => {
    res.render('home');
})
router.get("/eventProposal", (req, res) => {
    res.render('eventProposal');
})
router.get("/eventRequested", (req, res) => {
    res.render('eventRequested');
})
router.get("", (req, res) => {
    res.render('home');
})
router.get("/home", (req, res) => {
    res.render('home');
})
router.get("/eventApproved", (req, res) => {
    res.render('eventsApproved');
})
router.get("/eventRejected", (req, res) => {
    res.render('eventsRejected');
})

module.exports = router