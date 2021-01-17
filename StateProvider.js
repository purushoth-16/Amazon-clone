import React,{ createContext, useContext, useReducer } from 'react'
//datalayer
export const StateContext = createContext();
//wrap
export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
//pull info
export const useStateValue=()=>useContext(StateContext);