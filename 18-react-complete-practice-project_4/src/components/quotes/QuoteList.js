import { Fragment } from 'react';
import { useHistory, useLocation,useRouteMatch } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes=(quotes,ascending)=>{
  return quotes.sort((quoteA,quoteB)=>{
    if(ascending){
      return quoteA.id>quoteB.id? 1:-1;
    }else{
      return quoteA.id<quoteB.id? 1:-1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const match=useRouteMatch();
  const queryParam=new URLSearchParams(location.search);
  const isSortingAscending=queryParam.get('sort') === 'asc';
  const sortingParams= isSortingAscending ? 'desc' :'asc';
  const sortedQuotes=sortQuotes(props.quotes,isSortingAscending);

  const changeSortingHandler= () =>{
    // history.push(`${location.pathname}?sort=`+ sortingParams );
    //history.push(`${match.url}?sort=`+ sortingParams );
    history.push({
      pathname:match.url,
      search:`?sort=${sortingParams}` 
    });
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
