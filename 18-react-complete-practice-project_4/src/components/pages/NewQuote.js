import React from 'react'
import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {
    const addQuoteHandler= ()=>{
        console.log('clicked!');
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}
export default NewQuote;
