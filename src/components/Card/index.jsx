import React from "react";
import "./index.css";

export default ({product}) => {
    return <div className="card">
       <img className="cardsImage" src = {product.pictures}></img>
        {product.name}
        <br></br>
        {product.price}
       <br></br>
        {product.description}
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
