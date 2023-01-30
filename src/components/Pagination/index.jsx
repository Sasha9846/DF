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
        <button className="btn page" disabled={current === 1}><CaretLeftFill/></button>
        {pages.map(p=> <button 
        className="btn page" 
        style={{
        backgroundColor: p === current && "#222",
        color:  p === current && "yellow"
        }}
        >{p}</button>)}
        <button className="btn page" disabled={current === max}><CaretRightFill/></button>

    </div>
}