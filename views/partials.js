const books = require("../ebooks.json");

exports.frameworks = (res, req) => {
    //console.log(req.query)
    const language = req.query.language;

    const frmwrks = { 'Python': ['Django', 'Flask', 'FastAPI'], 'Ruby': ['Rails', 'Sinatra'], 'JavaScript': ['Expess', 'Hapi'] }
    let html = `${frmwrks[language].map(f => `<option value="${f}">${f}</option>`)}`

    res.send(html);
}

exports.search = (res, req) => {
    console.log(req.query.q, req.query.q.length)
    let q = req.query.q;
    let html = '';
    if(q.length !== 0){
        let query = books.filter(b => b.title.toLowerCase().includes(q.toLowerCase()))
        query.forEach(q => html+= `<a class="panel-block">${q.title}</a>`)
        res.send(html);
    }
    res.send();
    
}