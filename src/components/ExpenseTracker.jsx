import React, { useEffect, useRef, useState } from 'react'

const ExpenseTracker = () => {
    const[input,setInput]=useState("")
    const[amount,setAmount]=useState("")
    const [expenses, setExpenses] = useState([]);
    const inp=useRef(null);
    useEffect(()=>{
        inp.current.focus()
    })

    const addItem = () => {
        if (input && amount) {
            setExpenses([...expenses, { id: expenses.length+1, item: input, amount: parseFloat(amount) }]);
            setInput("");
            setAmount("");
        }
    };

    const removeItem = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };
  return (
    <div className='a'>
      <h2>Expense Tracker</h2>
      <input type="text"
        ref={inp}
        value={input}
        placeholder='add expenses'
        onChange={(e)=>setInput(e.target.value)}
       />
       <br /> <br />
       <input type="number"
        value={amount}
        placeholder='add expenses'
        onChange={(e)=>setAmount(e.target.value)}
       />
       <br /> <br />
       <button onClick={addItem}>Add Item</button>
       <h3>Expense List:</h3>
     <ul>
       {expenses.map(expense => (
        <li key={expense.id}>
            {expense.item}: ${expense.amount.toFixed(2) } 
            <br />
            <button onClick={() => removeItem(expense.id)}>Remove</button>
        </li>
    ))}
</ul>

    </div>
  )
}

export default ExpenseTracker
