import React from "react";
import "./index.css";

export default ({text, like}) => {
    return <div className="card">
        {text}
        <span className="card__heart">
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    </div>
}