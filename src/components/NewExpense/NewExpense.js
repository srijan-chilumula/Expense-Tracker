import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';
const NewExpense=(props)=>
{
    const saveUpdate=(newData)=>{
        const expenseData={  
            ...newData,
        id:Math.random().toString()};
        props.onAddExpense(expenseData);
        //setUpdate(false);
    };
    //const [on,setUpdate]=useState(false)
    

    return(
        <div className='newExpense'>
            <ExpenseForm onChangeUpdate={saveUpdate}  />
            
        </div>
    );
}
export default NewExpense;