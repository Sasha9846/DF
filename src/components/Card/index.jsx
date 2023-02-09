import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";


export default ({name, pictures, price, description, wight, author, likes, _id, discount}) => {
    const {user, setFavorites, api, setGoods, setBasket, setVisibleGoods} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));
    
    
    const [flag, setFlag] = useState(false);


    const update = (e) => {
e.stopPropagation();
e.preventDefault();
setFlag(true);
setLike(!like);
api.setLike(_id, like)
    .then(res => res.json())
    .then(data => {
        setFavorites(prev => {
            let arr = prev.filter(el => el._id === _id);
            return arr.length > 0 ? 
            prev.filter(el => el._id !== el.id) :
            [...prev, data]
        }
        )
        setGoods(prev => prev.map(el => {
            if (el._id === data._id) {
                return data;
            }
            else {
                return el;
            }
        }));
        setVisibleGoods(prev => prev.map(el => {
            if (el._id === data._id) {
                return data;
            }
            else {
                return el;
            }
        }));
        // setGoods (prev => { // не забыть вставить сюда новую переменную как в лекции
        //     prev.map(el => el._id === _id 
        //     && like 
        //     ? el.likes.push(user._id)
        // : el.likes.filter(l => l !== user._id))}
        // )
    })
    }
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





useEffect(() => {
    if (flag) {
    api.getProducts()
    .then(res => res.json())
    .then(data => {
        if (!data.error) {
            setGoods(data.products)
        }
    })
}
}, [like])





    return <div className="card">

       <img className="cardsImage" src = { pictures}></img>
       <h6 className="cardProductName">{name}</h6> 
      
      <div className="discountBlockRed">{discount>0 && <p> Скидка {discount}% </p>}</div> 

        <div className="productPriceAndWightInCard"> 
            <h5 className = "productPrice productDiscountText">{discount > 0 && price}</h5>
            <h5 className = "productPrice">{price - price*(discount/100)}₽</h5> 
            <h6 className = "productWight">{wight}</h6>
        </div>
        

       <button className="btn" id = "btnBuy" onClick={buy}>В КОРЗИНУ</button>
       {/* <p className = "productDescriprion">{description}</p>  */}
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
