import './App.css';
import React from 'react';

//import all components
import Home from './Home';


import {
  ApolloClient, 
  createHttpLink,
  ApolloProvider, 
  InMemoryCache
} 
from '@apollo/client';
import {setContext} from '@apollo/client/link/context';

//apollo client setup
const httpLink = createHttpLink({
  uri: "https://api.hashnode.com/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = "3a227d2b-e780-434c-8596-e5594c57f83e";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h3>Welcome!</h3>
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
