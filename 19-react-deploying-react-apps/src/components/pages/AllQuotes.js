import React, { useEffect } from 'react'
import QuoteList from '../quotes/QuoteList'
import useHttp from '../../hooks/use-http';
import { getAllQuotes } from '../../lib/api';
import LoadingSpinner from '../ui/LoadingSpinner';
import NoQuotesFound from '../quotes/NoQuotesFound';

// const DUMMY_QUOTES = [
//   { id: 'q1', author: 'Abdelaaziz', text: 'Learning react from scratch' },
//   { id: 'q2', author: 'Abdelaaziz', text: 'Learning react router from scratch' },
// ]
const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);
  
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    )
  }
  if(error){
    return(
      <p className='centered focused'>Error: {error}</p>
    )
  }

  if(status==='completed' && (!loadedQuotes || loadedQuotes.length ===0)){
    return <NoQuotesFound/>
  }

  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  )
}
export default AllQuotes;
