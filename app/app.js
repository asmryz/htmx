const express = require("express"),
    path = require("path"),
    app = express();

const PORT = process.env.PORT || 9001;

app.use(express.static(path.join(__dirname, "public")))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "vash")
    .use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use("/api", require("./api/ìndex"))
    .use("/", require("./routes/index"))
    .use("/", (req, res) => res.sendFile("index.html", { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

//languages_frameworks = { 'Python': ['Django', 'Flask', 'FastAPI'], 'Ruby': ['Rails', 'Sinatra'], 'JavaScript': ['Expess', 'Hapi'] }
