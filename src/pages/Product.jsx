import React, {useState, useEffect} from "react";
// useEffect чтоб данные с сервака подгрузить
import {useParams, Link} from "react-router-dom";
import "./Product.css";
import Review from "../components/Review/review";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

// по id приходят данные о товаре для отрисовки страницы с товаром

let token = localStorage.getItem('token8');
useEffect(() => {
    if (token){
        fetch(`https://api.react-learning.ru/products/${id}`, {
            headers: {
              authorization: `Bearer ${token}`
            }
            }).then (res => res.json()).then (data => {
                // console.log(data) в этой строке приходят все данные с товара, и чтоб его вывести см в консоли, что у него есть
                setProduct(data);
            })
    }


})
return <>
    <h1>{product.name || 'Страница товара'}</h1>
    <p>{id}</p>
    <img className="productImg" src={product.pictures} alt="Изображение товара"></img>
    <p>{`${product.price} рублей`}</p>
    <h2>Отзывы</h2>
    <div className="reviews">
        {product.reviews && product.reviews.length > 0
        && product.reviews.map((el, i) => <Review {...el}
        key = {i}/>)}


    </div>
    <Link to="/catalog">Назад</Link>
    </>
}