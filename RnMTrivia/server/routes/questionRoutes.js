//! Question Controller
const QC = require("../controllers/questionController")


module.exports = app => {
    app.get("/api/questions/category/:category", QC.findQuestionsByCategory)
    app.get("/api/questions/:id", QC.findQuestionById)
    app.get("/api/questions/episode/:episodeId", QC.findQuestionsByEpisodeId)
    app.post("/api/questions", QC.createQ)
    app.patch("/api/questions/:id", QC.editQuestion)
    app.delete("/api/questions/:id", QC.deleteQuestion)
}