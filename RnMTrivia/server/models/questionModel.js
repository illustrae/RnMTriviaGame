const mongoose = require("mongoose")


//! Model for questions API
const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question is required"],
        minLength: [4, "Questions must be at least 4 characters"]
    },
    category: {
        type: String,
        required: [true, "Category is required Jon"],
        //* Enum makes it to where the value of the category attribute can only be certain things.
        //* In this case, it can only be "Episode", "Character", or "Location"
        enum: ["Episode", "Character", "Location"]
    },
    episodeId: {
        type: Number,
        required: [true, "Episode ID is required"]
    },
    correctAnswer: {
        type: String,
        required: [true, "Correct answer is required"]
    },
    wrongAnswerOne: {
        type: String,
        required: [true, "Wrong answers are required"]
    },
    wrongAnswerTwo: {
        type: String,
        required: [true, "Wrong answers are required"]
    },
    wrongAnswerThree: {
        type: String,
        required: [true, "Wrong answers are required"]
    }
}, {timestamps: true})

const Question = mongoose.model("Question", QuestionSchema)
module.exports = Question