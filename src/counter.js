import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';

export default function Counter() {
    const reducer=(state,action)=>{
        if(action.type==="incer"){
            state=state+1;
        }
        if(action.type==="decr" && state>0){
            state=state-1;
        }
        return state;
    }
    const [state,dispatch]=useReducer(reducer,0);
  return (
    <div className='container'>
        <p>{state}</p>
        <button className='btn btn-success m-4 p-2' onClick={()=>dispatch({type:"incer"})}>Incerment</button>
        <button className='btn btn-success m-4 p-2' onClick={()=>dispatch({type:"decr"})}>decerment</button>
    </div>
  )
}
