import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";


export default ({name, pictures, price, description, wight, author, likes, _id}) => {
    const {user, setFavorites, api, setGoods, setBasket} = useContext(Ctx);
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
       <h4>{name}</h4> 
 
      <h4 className = "productPrice">{price} ₽</h4> 
      <h5 className = "productWight">{wight}</h5>
       <button className="btn" id = "btnBuy" onClick={buy}>Купить</button>
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
