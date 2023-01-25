import React, {useState, useEffect, useContext} from "react";
// useEffect чтоб данные с сервака подгрузить
import {useParams, Link} from "react-router-dom";
import "./Product.css";
import Review from "../components/Review/review";
import { ArrowRight, ArrowLeftCircle } from 'react-bootstrap-icons';
import Ctx from "../Ctx";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

// по id приходят данные о товаре для отрисовки страницы с товаром
// let token = localStorage.getItem('token8');
const {api} = useContext(Ctx);
useEffect(() => {
  api.getProduct(id)
        .then (res => res.json())
        .then (data => {
                setProduct(data);
            })
    
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