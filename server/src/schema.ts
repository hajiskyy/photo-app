import { merge } from "lodash"
import { typeDef as Users, resolvers as UserResolver } from "./users/Users"
import { typeDef as Posts, resolvers as PostResolver } from "./posts/Posts"

const Query = `
  type Query {
    _empty: String
  }
`
const resolvers = {}

export const schema = {
  typeDefs: [Query, Users, Posts],
  resolvers: merge(resolvers, UserResolver, PostResolver),
}
