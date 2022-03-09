import React, {useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>
{
    const [newTitle,setTitle]=useState('');
    const[toggle,setToggle]= useState(false)
    const titleChanger=(event)=>{
        setTitle(event.target.value);
    }
    const addExpenseHandler = ()=>{
        setToggle(!toggle)
    }
    const [date,setDate]=useState('');
    const dateChanger=(event)=>{setDate(event.target.value)}
    const [amount,setAmount]=useState('');
    const amountChanger=(event)=>{setAmount(event.target.value)}
    const submit=(event)=>
    {
        event.preventDefault();
        const expenseData={
            title:newTitle,
            amount: +amount,
            date:new Date(date)
        }
        props.onChangeUpdate(expenseData);
        setTitle('');
        setDate('');
        setAmount('');
        
    };
    
    
    return(
        
            <form onSubmit={submit}>
               <div className="expense_controls">
                   <div className="expense_controls__control">
                       <label>Title</label>
                       <input type='text' value={newTitle} onChange={titleChanger}/>
                   </div>
                   <div className="expense_controls__control">
                       <label>Amount</label>
                       <input type='number' value={amount}min='0.01' step='0.01' onChange={amountChanger}/>
                   </div>
                   <div className="expense_controls__control">
                       <label>Date</label>
                       <input type='date' value={date}min='2019-01-01' max='2022-12-31' onChange={dateChanger}/>
                   </div>
                  
                       <button type="submit">Add Expense</button>
                       <button type="button" onClick={props.cancel}>Cancel</button>
                    

                </div> 
                
                
            </form>
        
    )
}
export default ExpenseForm;