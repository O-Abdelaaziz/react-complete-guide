import React , {useState} from 'react';
import faker from 'faker';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: faker.datatype.number(),
    title: faker.commerce.productName(),
    amount: faker.finance.amount(),
    date: faker.date.future(),
  },
  { id: faker.datatype.number(), 
    title: faker.commerce.productName(), 
    amount: faker.finance.amount(), 
    date: faker.date.future() 
  },
  {
    id: faker.datatype.number(),
    title: faker.commerce.productName(),
    amount: faker.finance.amount(),
    date: faker.date.future(),
  },
  {
    id: faker.datatype.number(),
    title: faker.commerce.productName(),
    amount: faker.finance.amount(),
    date: faker.date.future(),
  },
];

function App() {

  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    //setExpenses([expense,...expenses]);
    setExpenses(prevExpenses =>{
      return [expense,...prevExpenses];
    });
    console.log("In App.js");
    console.log(expense);
  }
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
