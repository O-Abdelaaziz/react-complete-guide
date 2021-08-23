import React from 'react'
import {useParams} from 'react-router-dom';
const QuoteDetail = () => {
    const params = useParams();
    return (
        <div>
            <h1>quote detail</h1>
            <p>ID: {params.quoteId}</p>
        </div>
    )
}
export default QuoteDetail;

