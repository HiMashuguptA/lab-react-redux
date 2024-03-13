import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { LikeIncrement, LikeDecrement } from "./Perform/Perform"

const Counter = () => {
    const Dispatch = useDispatch()
    const Count = useSelector((state) => state.Reducer)
    return (
        <div style={{ textAlign:"center", flexDirection: "column", display: "flex", justifyContent: "center"}} >
            <h2 style={{color:"red", backgroundColor:"black"}}>{Count}</h2>
            <div>
                <button onClick={() => Dispatch(LikeIncrement())} style={{cursor:"pointer"}}>Like</button>
                <button onClick={() => Dispatch(LikeDecrement())} style={{cursor:"pointer"}}>Unlike</button>
            </div>
        </div>
    );
};

export default Counter;