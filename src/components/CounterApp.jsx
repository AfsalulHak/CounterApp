import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice';





function CounterApp() {


  const [amount,SetAmount]=useState("")

 const {count} = useSelector(state=>state.counterReducer)
 const dispatch=useDispatch()

  const handleIncrementByAmount = () => {

    if(amount){
      dispatch(incrementByAmount(parseInt(amount)))
    }else{
      alert("please enter a value")
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-center mb-3 mt-5 mt-sm-0">
        <h1 className="text-center text-white mt-5">Counter App</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="border rounded border-white p-1 p-sm-5 w-75 w-sm-100">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="text-center text-white fw-bold">{count}</h1>
          </div>
          <div className="mt-5 d-flex align-items-center justify-content-between">
            <button onClick={()=>dispatch(increment())} className="btn btn-warning">Increment</button>
            <button onClick={()=>dispatch(reset())} className="btn btn-danger">Reset</button>
            <button onClick={()=>dispatch(decrement())} className="btn btn-success">Decrement</button>
          </div>
          <div className="mt-5 d-flex justify-content-around">
            <input onChange={(e)=>SetAmount(e.target.value)}  type="number" className="form-control"placeholder="Enter the value"/>
            <button onClick={handleIncrementByAmount} className="btn btn-primary ms-3">Increment By Amount</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CounterApp;
