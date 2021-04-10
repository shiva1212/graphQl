import * as React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider,HttpLink, ApolloClient, InMemoryCache,} from '@apollo/client'
import './index.css';
import App from './App';


const graphQLink = new HttpLink({
  uri: 'https://spacexdata.herokuapp.com/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: graphQLink,
  cache,
  credentials: "include",
  resolvers:{}
})

ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    
      <App />
    
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);