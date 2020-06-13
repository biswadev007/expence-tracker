import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText]= useState('');
    const [amount, setAmount]= useState(0); 
    const { addTransaction } = useContext(GlobalContext);

    const handleSubmit = e =>{
        e.preventDefault();
        const newTransaction = {
            id: create_UUID(),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction);
    }
    
    const create_UUID = () =>{
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}  placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)</label>
                <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }}  placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
