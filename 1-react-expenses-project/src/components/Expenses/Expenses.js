import React , {useState} from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

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
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;