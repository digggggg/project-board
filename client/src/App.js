import React from 'react'
import Start from './pages/Start'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <ApolloProvider client={client}>
      <Start />
    </ApolloProvider>
  );
}

export default App;
