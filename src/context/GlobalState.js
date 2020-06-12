import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

const apiUrl = "https://trackerexpences.herokuapp.com/";
//Initial State
const initialState = {
    transactions: [],
    error: null,
    loader: true
}

//Global context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    //Get transaction
    async function getTransactions() {
        try {
            const res = await axios.get(`${apiUrl}api/v1/transaction`);
            

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    //Delete transaction
    async function deleteTransaction(id) {
        try {
            await axios.delete(`${apiUrl}api/v1/transaction/${id}`);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function addTransaction(transaction) {
        const config= {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        try {
            const res = await axios.post(`${apiUrl}api/v1/transaction`, transaction, config);
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            });
        }
        
    }

    return (<GlobalContext.Provider
        value={{
            transactions: state.transactions,
            getTransactions,
            deleteTransaction,
            addTransaction,
            error: state.error,
            loader: state.loader
        }}
    >
        {children}
    </GlobalContext.Provider>)
} 