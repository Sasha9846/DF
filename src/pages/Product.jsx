import React, {useState, useEffect} from "react";
// useEffect чтоб данные с сервака подгрузить
import {useParams, Link} from "react-router-dom";
import "./Product.css";
import Review from "../components/Review/review";
import { ArrowRight, ArrowLeftCircle } from 'react-bootstrap-icons';
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



<div className="productTopBlock">

<h1 className ="productHName">{product.name || 'Страница товара'}</h1>
    <p className ="productArticle">Артикул: {id}</p>
    <div className ="btnReturnInCatalog"><Link to="/catalog"><ArrowLeftCircle/> Назад</Link></div>
    </div>



<div className="productPage">
    
    <div className="productPageBlock">  
      
         <img className="productImg" src={product.pictures} alt="Изображение товара"></img>
   
         <div lassName="productRightBlock">

            <div className="productPriceBlock">
                <h2>Стоимость</h2>
                <h3>{`${product.price} ₽`}</h3>   
                <p>{product.wight}</p>
            </div>

            <div className="productDescriptionsBlock">
                <h2>Описание</h2>
                <p>{product.description}</p>
             </div>


         </div>

         
    </div>



    
   
    <h2>Отзывы</h2>
    <div className="reviews">
        {product.reviews && product.reviews.length > 0
        && product.reviews.map((el, i) => <Review {...el}
        key = {i}/>)}


    </div>
    <Link to="/catalog">Назад</Link>
    </div>
    </>
}