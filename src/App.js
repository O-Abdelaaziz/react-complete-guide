import faker from 'faker';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {

  const expenses = [
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

  const addExpenseHandler=(expense)=>{
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
