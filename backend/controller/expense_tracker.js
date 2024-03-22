const Tracker = require('../model/exp_tracker');

// Create and Save a new tracker
exports.create = async (req, res) => {
    // create a expense tracker for user
    const track = await  new Tracker.create({
        user: req.body.userId,
        expense: req.body.expense,
        description: req.body.description
    });
};

// Retrieve and return all trackers from the database for the user
exports.findAll = async (req, res) => {
    await Tracker.find({user:req.params.userId})
        .then(trackers => {
            res.send(trackers);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving trackers."
            });
        });
};

// Edit trackers for user with trackerId
exports.edit = async (req, res) => {
    // Find tracker and update it with the request
    await tracker.findByIdAndUpdate(req.params.trackerId, {
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

exports.delete = async (req,res) => {
    try{
        const tracker = await Tracker.findOne({ username: req.params.username });
        if (!budget) {
            return res.status(404).send({ error: 'User/Budget Not Found' });
        }
        await tracker.remove();
        res.send({message: 'Budget deleted successfully'});
    }
    catch (error) {
        res.status(400).send(error);
}};