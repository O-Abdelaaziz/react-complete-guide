import React from 'react'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler= (quoteData)=>{
        console.log('clicked! '+ quoteData);
        history.push('/quotes');
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}
export default NewQuote;
