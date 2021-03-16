import { ValidationError } from "apollo-server-errors"
import { posts } from "../db/postData"
import { users } from "../db/userData"

export const typeDef = `

extend type Query {
  posts: [Posts]
  post(id: String!): Posts
}

type Posts {
  id: String!
  name: String!
  description: String!
  imageUrl: String!
  userId: String!
  user: User
}
`

export const resolvers = {
  Query: {
    posts: () => posts,
    post: (_: null, args: { id: string }) => {
      return (
        posts.filter((post) => post.id === args.id)[0] ||
        new ValidationError("Post not found")
      )
    },
  },
  Posts: {
    user: (post) => users.filter((user) => user.id === post.userId)[0],
  },
}
