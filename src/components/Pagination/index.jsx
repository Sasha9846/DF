import React, {useState} from "react";
import "./style.css";
import {CaretRightFill, CaretLeftFill} from "react-bootstrap-icons";

export default ({hook}) => {

    const max= hook.maxPage;
    const current = hook.currentPage;
    const pages = [];

for (let i = 0; i < max; i++){
    pages.push(i+1);
}

    return <div className="page-container">
        <button className="btn page" disabled={current === 1} onClick={hook.previous}><CaretLeftFill/></button>
        {pages.map(p=> <button 
        className="btn page" 
        key = {p}
        style={{
        backgroundColor: p === current && "#1D4443",
        color:  p === current && "white"
        }}
        onClick = {e => {hook.step(p)}}
        >{p}</button>)}
        <button className="btn page" disabled={current === max} onClick={hook.next}><CaretRightFill/></button>

    </div>
}