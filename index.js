const express = require("express"),
    path = require("path"),
    { frameworks, search } = require("./views/partials")
app = express();

const PORT = process.env.PORT || 8001;

app.use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .engine("html", require("ejs").renderFile)
    .set("view engine", "html")
    .get("/", (req, res) => res.render("index"))
    .get("/search", (req, res) => res.render("foods"))
    .get("/frameworks", (req, res) => frameworks(res, req))
    .get("/book", (req, res) => search(res, req))
    .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


//languages_frameworks = { 'Python': ['Django', 'Flask', 'FastAPI'], 'Ruby': ['Rails', 'Sinatra'], 'JavaScript': ['Expess', 'Hapi'] }


