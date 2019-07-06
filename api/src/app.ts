import express from 'express'

const PORT = 4000
const app: express.Application = express()

function start(): void {
    app.listen(PORT, () => console.log(`api service listening on port ${PORT}`))
}

export {
    start
}