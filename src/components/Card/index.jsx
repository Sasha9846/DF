import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";


export default ({name, pictures, price, description, wight, author, likes, _id}) => {
    const {user, setFavorites, api, setGoods} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));
    
    

    const update = (e) => {
e.stopPropagation();
e.preventDefault();
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

useEffect(() => {
    api.getProducts()
    .then(res => res.json())
    .then(data => {
        if (!data.error) {
            setGoods(data.products)
        }
    })
}, [like])


    return <div className="card">
       <img className="cardsImage" src = { pictures}></img>
       <h4>{name.toUpperCase ()}</h4> 
 
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
