import express from 'express'
import { GITHUB_ACCESS_TOKEN, GITHUB_GRAPH_BASE_URL } from './utils/config'

const PORT = 3000
const app: express.Application = express()

app.get('/', (req, res) => {
    console.log({
        GITHUB_ACCESS_TOKEN,
        GITHUB_GRAPH_BASE_URL
    }) 
    res.send('hello fellas')
})

function start(): void {
    app.listen(PORT, () => {
        console.log(`Example app listening on port: ${PORT}`)
    })
}

export {
    start
}