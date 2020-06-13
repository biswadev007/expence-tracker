import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const dateFormat = (date) => {
    let dateBreak = date.split("T");
    
    return  dateBreak[0];
}

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
            <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
                {transaction.text} {dateFormat(transaction.createdAt)} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}
