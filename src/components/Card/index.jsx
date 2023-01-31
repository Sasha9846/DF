import React, {useContext, useState} from "react";
import "./index.css";
import Ctx from "../../Ctx";


export default ({text, cardImg, price, description, wight, author}) => {
    const {user} = useContext(Ctx);
    let like = author._id === user.id;
    

    const update = () => {

    }
    return <div className="card">
       <img className="cardsImage" src = {cardImg}></img>
       <h4>{text.toUpperCase ()}</h4> 
 
      <h4 className = "productPrice">{price} ₽</h4> 
      <h5 className = "productWight">{wight}</h5>
       <button className="btn" id = "btnBuy">Купить</button>
       <p className = "productDescriprion">{description}</p> 
        {/* сюда выводить изображение кажлдого товара */}
        {/* return <div className="UpBlock"> */}
        <span className="card__heart" onClick={update}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    {/* </div> */}
    </div>
}
