const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')

require("./config/mongoose.config");
require('dotenv').config();

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors({credentials:true, origin:'http://localhost:3000'}))
app.use(cookieParser());



const UserRoutes = require('./routes/userRoutes')
const QuestionRoutes = require('./routes/questionRoutes')
UserRoutes(app);
QuestionRoutes(app);

app.listen(8000, () => console.log("It's Me Ninjas!.. Listening on port: 8000"))