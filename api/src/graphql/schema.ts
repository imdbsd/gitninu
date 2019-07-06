import { gql } from 'apollo-server-express'
import { importSchema } from "graphql-import";

const schema = gql(importSchema(__dirname.concat('/schemas/schema.graphql')))

const typeDefs = [
    schema
]

export {
    typeDefs
}