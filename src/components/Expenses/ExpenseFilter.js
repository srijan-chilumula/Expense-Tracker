import React from 'react';
import './ExpenseFilter.css';
const ExpenseFilter=(props)=>
{
    const setOption=(event)=>
    {
        props.onChange(event.target.value)
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <h2>Choose Year</h2>
                <select value={props.select} onChange={setOption}> 
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
};
export default ExpenseFilter;