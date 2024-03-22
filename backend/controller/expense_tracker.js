const tracker = require('../model/exp_tracker');



// Create and Save a new tracker
exports.create = (req, res) => {
    // create a expense tracker for user
    const track = new tracker.create({
        user: req.body.userId,
        expense: req.body.expense,
        description: req.body.description
    });
};

// Retrieve and return all trackers from the database for the user
exports.findAll = (req, res) => {
    tracker.find({user:req.params.userId})
        .then(trackers => {
            res.send(trackers);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving trackers."
            });
        });
};

// Edit trackers for user with trackerId
exports.edit = (req, res) => {
    // Find tracker and update it with the request
    tracker.findByIdAndUpdate(req.params.trackerId, {
        expense: req.body.expense,
        description: req.body.description
    }, {new: true})
        .then(track => {
            if (!track) {
                return res.status(404).send({
                    message: "tracker not found with id " + req.params.trackerId
                });
            }
            res.send(track);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "tracker not found with id " + req.params.trackerId
                });
            }
            return res.status(500).send({
                message: "Error updating tracker with id " + req.params.trackerId
            });
        });
};