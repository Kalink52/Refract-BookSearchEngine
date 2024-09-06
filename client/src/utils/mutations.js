import { gql } from "@apollo/client";
// TODO LIST BELOW:

// LOGIN_USER will execute the loginUser mutation set up using Apollo Server.
export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        bookCount
        email
        password
        savedBooks {
          title
        }
      }
    }
  }
`;
// ADD_USER will execute the addUser mutation.
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      email
      password
      username
    }
  }
`;
// SAVE_BOOK will execute the saveBook mutation.
export const SAVE_BOOK = gql`
  mutation saveBook($bookDetails: BookDetailsInput, $id: ID) {
    saveBook(bookDetails: $bookDetails, _id: $id) {
      _id
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
// REMOVE_BOOK will execute the removeBook mutation.
