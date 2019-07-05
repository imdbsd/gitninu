import express from 'express'
import { githubRouter } from './routes'

const PORT = 3000
const app: express.Application = express()

app.use('/', githubRouter)

function start(): void {
    app.listen(PORT, () => {
        console.log(`Example app listening on port: ${PORT}`)
    })
}

export {
    start
}