//TODO use User controller js as a guide here????
const typeDefs = `
type User {
    _id
    username: String,
    email: String,
    password: String
    bookCount:
    savedBooks:[Book]
}

type Book:
    bookId 
    authors
    description
    title
    image

type Auth{
    token: String,
    user: User
}

type Query {
    me: User
    
  }
type Mutation{
    createUser(username:String!, email:String!, password: String!): User
}
`;

module.exports = typeDefs;
