import ExpenseItem from './components/ExpenseItem';
import faker from 'faker';
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
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
}

export default App;
