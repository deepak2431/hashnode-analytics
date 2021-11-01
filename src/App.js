import "./App.css";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

//import all components
import Home from "./Home";
import ProfileHeader from "./layouts/ProfileHeader";

import rootReducer from "./redux/index";

import {
  ApolloClient,
  createHttpLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile-analytics" component={ProfileHeader} />
          </Switch>
        </Router>
      </ApolloProvider>
    </Provider>
  );
}

export default App;
