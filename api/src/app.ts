import express from 'express'
import { graphServer } from './graphql'

const PORT = 4000
const app: express.Application = express()

graphServer.applyMiddleware({ app })

function start(): void {
    app.listen(PORT, () => {
        console.log(`api service listening on port ${PORT}`)
        console.log(`graphql run on: ${graphServer.graphqlPath}`)
    })
}

export {
    start
}