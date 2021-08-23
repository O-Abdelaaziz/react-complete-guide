import React from 'react'
import QuoteList from '../quotes/QuoteList'

const DUMMY_QUOTES=[
  {id:'q1',author:'Abdelaaziz',text:'Learning react from scratch'},
  {id:'q2',author:'Abdelaaziz',text:'Learning react router from scratch'},
]
const AllQuotes = () => {
    return (
        <div>
          <h1>all quotes</h1>  
          <QuoteList quotes={DUMMY_QUOTES}/>
        </div>
    )
}
export default AllQuotes;
