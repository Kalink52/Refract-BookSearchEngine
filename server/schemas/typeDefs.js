//TODO use User controller js as a guide here????
const typeDefs = `
type Query {
    users: [User],
    me(userId:String): User,
    
  }

type Mutation {
    login(email:String,password:String):Auth
    addUser(username:String!, email:String!, password:String!): User,
    saveBook(_id:ID, bookDetails:BookDetailsInput): User,
    removeBook(bookId:String):User
  }

input BookDetailsInput{
    bookId: String,
    authors: [String],
    description: String,
    title: String,
    image: String,
    link: String
}

type User {
    _id: ID,
    username: String,
    email: String,
    password: String,
    bookCount: Int,
    savedBooks: [Book]
}

type Book {
    bookId: String,
    authors: [String],
    description: String,
    title: String,
    image: String,
    link: String
}
type Auth {
    token: ID!,
    user: User, 
}
`;

module.exports = typeDefs;
