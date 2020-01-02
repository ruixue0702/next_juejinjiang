const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

const httpProxy = require('http-proxy-middleware')
app.use(
    '/api',
    httpProxy({ 
        target: 'https://extension-ms.juejin.im/',
        changeOrigin: true, 
        pathRewrite: {
            '^/api/resources': '/resources'
        } 
    })
)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res, next) {
    // req.header.cookie = req.header.cookie + `QINGCLOUDELB=743155a837e7deb03acb8e760501fb609b6845ac24ccb3b2c31a11c11a0765c2|XgclR|XgclR; path=/; HttpOnly`;
    next();

    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})

const port = 6666
app.listen(port, () => {
    console.log(`express app listening on port ${port}`)
})