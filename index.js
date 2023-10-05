const express = require("express"),
    path = require("path"),
    //{ frameworks, search } = require("./views/partials")
app = express();

const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "vash")
    .use(express.urlencoded({ extended: false }))
    .engine("html", require("ejs").renderFile)
    .use('/', require('./routes/index'))
    .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


//languages_frameworks = { 'Python': ['Django', 'Flask', 'FastAPI'], 'Ruby': ['Rails', 'Sinatra'], 'JavaScript': ['Expess', 'Hapi'] }


