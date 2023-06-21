const Question = require("../models/questionModel")



module.exports.createQ = (req, res) => {
    Question.create(req.body)
    .then(question => {
        res.json({question: question})
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
}

//! Test in Postman
//* Finds question by category
module.exports.findQuestionsByCategory = (req, res) => {
    Question.find({category: req.params.category})
    .then(questions => {
        res.json({questions: questions})
    })
    .catch((err) => {
        res.status(400).json({message: "Something went wrong", error: err})
    })
}

//* Gets question by EpisodeId
module.exports.findQuestionsByEpisodeId = (req, res) => {
    Question.find({episodeId: req.params.episodeId})
    .then(questions => {
        res.json({questions: questions})
    })
    .catch((err) => {
        res.status(400).json({message: "Something went wrong", error: err})
    })
}

module.exports.findQuestionById = (req, res) => {
    Question.findOne({_id: req.params.id})
    .then(oneQuestion => {
        res.json({question: oneQuestion})
    })
    .catch((err) => {
        res.status(400).json({message: "Something went wrong", error: err})
    })
}

module.exports.editQuestion = (req, res) => {
    Question.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedQuestion => {
        res.json({question: updatedQuestion})
    })
    .catch(err => {
        res.status(400).json({
            err
        })
    })
}

module.exports.deleteQuestion = (req, res) => {
    Question.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}