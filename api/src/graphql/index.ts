import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'

const graphServer: ApolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

export {
  graphServer
}