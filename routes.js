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
router.get("/event-proposal", (req, res) => {
    res.render('eventProposal');
})
router.get("/events-requested", (req, res) => {
    res.render('eventRequested');
})
router.get("/clubs", (req, res) => {
    res.render('home');
})
router.get("/events-approved", (req, res) => {
    res.render('eventsApproved');
})
router.get("/events-rejected", (req, res) => {
    res.render('eventsRejected');
})

module.exports = router