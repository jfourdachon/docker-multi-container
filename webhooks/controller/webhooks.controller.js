

exports.createFreeSomaUser = (req, res) => {
    console.log('url: ')
    console.log(req.url)
    console.log('query: ')
    console.log(req.query)
    console.log('params: ')
    console.log(req.params)
    console.log('body: ')
    console.log(req.body)

    return res.status(200).end();
}

exports.createFreeGoldenRulesUser = (req, res) => {
    console.log('url: ')
    console.log(req.url)
    console.log('query: ')
    console.log(req.query)
    console.log('params: ')
    console.log(req.params)
    console.log('body: ')
    console.log(req.body)
    
    return res.status(200).end();
}