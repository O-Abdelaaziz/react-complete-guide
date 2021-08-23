import React from 'react'
import {Route, useParams} from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';

const DUMMY_QUOTES=[
    {id:'q1',author:'Abdelaaziz',text:'Learning react from scratch'},
    {id:'q2',author:'Abdelaaziz',text:'Learning react router from scratch'},
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    
    if(!quote){
        return <p>no quote found!</p>
    }
    
    //const dynamicParam=`/quotes/${params.quoteId}/comments`;
    return (
        <div>
            <HighlightedQuote text={quote.text} author={quote.author}/> 
            <Route path={`/quotes/${params.quoteId}/comments`}><Comments/></Route>
        </div>
    )
}
export default QuoteDetail;

