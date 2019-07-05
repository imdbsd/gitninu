import express from 'express'

const PORT = 3000
const app: express.Application = express()

app.get('/', (req, res) => {
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