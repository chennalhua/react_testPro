const express = require('express')
const request = require('request')
const cors = require('cors')

const app = express()

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true)
    },
}
app.options('*', cors(corsOptions))

const PRODUCTION_URL = 'https://ismart2.goldennet.com.tw:5000/api/'
const STAGING_URL = 'https://staging.virustrack.live'
const TEST_URL = 'https://test.virustrack.live'

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : "production"


const url = environment === "production" ? PRODUCTION_URL : environment === "staging" ? STAGING_URL : TEST_URL

app.use('/', cors(corsOptions), (req, res) => {
    const request_url = `${url}${req.url}`

    req.pipe(request(request_url)).pipe(res)
});

app.listen(process.env.PORT || 3000)