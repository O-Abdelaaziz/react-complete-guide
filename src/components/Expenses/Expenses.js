import React , {useState} from 'react'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem'
import './Expenses.css';

const Expenses = (props) => {

    const [filterYear, setFilterYear] = useState('2020');

    const filterChangeHandler =(selectedYear)=>{
        setFilterYear(selectedYear);
    }

    const filteredExpenses=props.items.filter(item=>{
        console.log(item);
        return item.date.getFullYear().toString()===filterYear;
    });


    return (
        //add key={item.id} props to avoid any bugs of list rendering
        <Card className="expenses">
            <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.map((item) => (
                <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />
            ))}
        </Card>
    )
}

export default Expenses;