//TODO use User controller js as a guide here????
const typeDefs = `
type User {
    _id: ID,
    username: String,
    email: String,
    password: String,

}

type Query {
    users: [User],
    me(userId:String): User,
    
  }

type Mutation {
    createUser(username:String!, email:String!, password:String!): User,

  }

`;

module.exports = typeDefs;
