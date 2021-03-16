import { users } from "../db/userData"
import { posts } from "../db/postData"
import { ValidationError } from "apollo-server-errors"

export const typeDef = `
extend type Query {
  users: [User]
  user(id: String!): User
}

type User {
  id: String!
  firstName: String!
  lastName: String!
  email: String!
  isVerified: Boolean!
  posts: [Posts]
}
`

export const resolvers = {
  Query: {
    users: () => users,
    user: (_: null, args: { id: string }) =>
      users.filter((user) => user.id === args.id)[0] ||
      new ValidationError("User not Found"),
  },
  User: {
    posts: (user) => {
      const postData = posts.filter((post) => post.userId === user.id)
      return postData.length !== 0 ? postData : null
    },
  },
}
