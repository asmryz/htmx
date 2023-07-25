exports.frameworks = (res, req) => {
    //console.log(req.query)
    const language = req.query.language;

    const frmwrks = { 'Python': ['Django', 'Flask', 'FastAPI'], 'Ruby': ['Rails', 'Sinatra'], 'JavaScript': ['Expess', 'Hapi'] }
    let html = `${frmwrks[language].map(f => `<option value="${f}">${f}</option>`)}`

    res.send(html);
}