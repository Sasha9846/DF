import React, {useContext, useState, useEffect} from "react";
// import "./index.css";
import Ctx from "../../Ctx";


export default ({name, pictures, price, description, wight, author, likes, _id, discount}) => {
    const {user, setFavorites, api, setGoods, setBasket, setVisibleGoods} = useContext(Ctx);

    
    const buy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev => {
            const test = prev.filter(el => el.id === _id)
            // alert("Товар добавлен в корзину");
            if (test.length) {
                return prev.map(el => {
                    if (el.id === _id) {
                        el.cnt++
                    }
                    return el;
                }
                     );
            }
            else {
                return [...prev, {id: _id, cnt: 1}]
            }
            
        })
    }
    return <button className="btn" id = "btnBuy" onClick={buy}>В КОРЗИНУ</button>
}