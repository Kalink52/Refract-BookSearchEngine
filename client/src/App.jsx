import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import Navbar from './components/Navbar';
// TODO ?
// * App.jsx: Create an Apollo Provider to make every request work with the Apollo Server.
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Navbar />
        <Outlet />
      </ApolloProvider>
    </>
  );
}

export default App;
