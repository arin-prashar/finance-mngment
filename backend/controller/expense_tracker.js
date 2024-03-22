const tracker = require('../model/exp_tracker');



// Create and Save a new tracker
exports.create = (req, res) => {
    // create a expense tracker for user
    const track = new tracker({
    
        user: req.body.userId,
        expense: req.body.expense,
        description: req.body.description
    });

    // Save tracker in the database
    track.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the tracker."
            });
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

// Edit trackers for user