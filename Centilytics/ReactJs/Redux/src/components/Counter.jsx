    import React from 'react'
    import { useDispatch, useSelector } from 'react-redux'
    import { decrement, increment, incrementByAmount } from '../Store/reducers/CounterSlice';

    const Counter = () => {
    const value =  useSelector((state)=>state.counter.value);
    const dispatch = useDispatch()
    return (
        <div>
            <h3>value:{value} </h3>
            <button onClick={()=>{
                dispatch(increment())
            }}>increment</button>
            <button onClick={()=>{
                dispatch(decrement())
            }}>decrement</button>
            <button onClick={()=>{
                dispatch(incrementByAmount(3))
            }}>increment by 3</button>
        </div>
    )
    }

    export default Counter