import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql``

const data = []

const resolvers = {
  Query: {},
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
