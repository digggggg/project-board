import React from 'react'
import Home from './pages/Home'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
