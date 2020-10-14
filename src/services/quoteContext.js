import { createContext } from 'react'

/*const QuotesContext = createContext({})
export const QuotesProvider = QuotesContext.Provider

export default QuotesContext*/
const QuoteContext = createContext({})

export const QuoteProvider = QuoteContext.Provider
export const QuoteConsumer = QuoteContext.Consumer

export default QuoteContext