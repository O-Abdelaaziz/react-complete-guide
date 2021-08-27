import React, { useEffect } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../comments/Comments';
import HighlightedQuote from '../quotes/HighlightedQuote';
import useHttp from '../../hooks/use-http';
import { getSingleQuote } from '../../lib/api';
import LoadingSpinner from '../ui/LoadingSpinner';


const QuoteDetail = () => {
    const params = useParams();
    const { quoteId } = params;
    const match = useRouteMatch();

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }
    if (error) {
        return (
            <p className='centered focused'>Error: {error}</p>
        )
    }
    if (!loadedQuotes.text) {
        return <p>No quote found!</p>
    }

    //const dynamicParam=`/quotes/${params.quoteId}/comments`;
    return (
        <div>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author} />
            <Route path={`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}><Comments /></Route>
        </div>
    )
}
export default QuoteDetail;

