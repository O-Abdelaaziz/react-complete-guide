import React from 'react'
import {Route, useParams} from 'react-router-dom';
import Comments from '../comments/Comments';
const QuoteDetail = () => {
    const params = useParams();
    //const dynamicParam=`/quotes/${params.quoteId}/comments`;
    return (
        <div>
            <h1>quote detail</h1>
            <p>ID: {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}><Comments/></Route>
        </div>
    )
}
export default QuoteDetail;

