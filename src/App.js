import React, { useState, useEffect } from 'react';

// Components
import Layout from './components/Layout';

// Services
import { getAll } from './services/quoteService'
import { QuoteProvider } from './services/quoteContext'

function App() {

  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    getAll().then(
      data => {
        setQuotes(data)
      }
    )
    return () => {
      setQuotes([])
    }
  }, [])

  return (
    <QuoteProvider value={quotes}>
      <Layout />
    </QuoteProvider>
  );
}

export default App;
