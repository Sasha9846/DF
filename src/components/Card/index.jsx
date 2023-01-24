import React from "react";
import "./index.css";

export default ({text, like, cardImg, price, description, wight}) => {
    return <div className="card">
       <img className="cardsImage" src = {cardImg}></img>
       <h4>{text.toUpperCase ()}</h4> 
        
      <h4 className = "productPrice">{price} ₽</h4> 
      <h5 className = "productWight">{wight}</h5>
       
       <p className = "productDescriprion">{description}</p> 
        {/* сюда выводить изображение кажлдого товара */}
        {/* return <div className="UpBlock"> */}
        <span className="card__heart">
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    {/* </div> */}
    </div>
}
