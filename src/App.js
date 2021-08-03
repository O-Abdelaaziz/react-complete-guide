import faker from 'faker';
import Expenses from './components/Expenses';
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
