import React, { useContext } from 'react'
import { Balance } from "./Balance";
import { IncomeExpences } from "./IncomeExpences";
import { TransactionList } from "./TransactionList";
import { AddTransaction } from "./AddTransaction";
//import { Loader } from "../hoc/Loader";
import { GlobalContext } from "../context/GlobalState";
import Loader from 'react-loader-spinner'

export const Contain = () => {
    const { loader } = useContext(GlobalContext);
    return (
        <div>
            {
                <div>
                    <Balance />
                    <IncomeExpences />
                    <TransactionList />
                    <AddTransaction />
                </div>

            }
        </div>
    )
}
//loader === true ? <div> <Loader type="ThreeDots" color="#somecolor" height={80} width={80} /> </div> : 