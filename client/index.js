import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Router,Route, IndexRoute, hashHistory } from 'react-router';

import App from "./components/App"
import SongList from './components/songlist';
import SongCreate from './components/SongCreate';


const client = new ApolloClient({})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/"component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate} /> 
          </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
