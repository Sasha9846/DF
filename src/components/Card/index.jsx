import React from "react";
import "./index.css";

export default ({text, like, cardImg, price, description}) => {
    return <div className="card">
       <img className="cardsImage" src = {cardImg}></img>
        {text}
        <br></br>
       {price}
       <br></br>
        {description}
        {/* сюда выводить изображение кажлдого товара */}
        {/* return <div className="UpBlock"> */}
        {/* <span className="card__heart">
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span> */}
    {/* </div> */}
    </div>
}
