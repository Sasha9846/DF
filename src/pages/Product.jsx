import React, {useState, useEffect, useContext} from "react";
// useEffect чтоб данные с сервака подгрузить
import {useParams, Link, useNavigate} from "react-router-dom";
import "./Product.css";
import Review from "../components/Review/review";
import { ArrowRight, ArrowLeftCircle } from 'react-bootstrap-icons';
import Ctx from "../Ctx";
import {Trash3} from "react-bootstrap-icons"


export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({})

// по id приходят данные о товаре для отрисовки страницы с товаром
// let token = localStorage.getItem('token8');
const {api, PATH, user, setGoods} = useContext(Ctx);

const navigate = useNavigate();

useEffect(() => {
  api.getProduct(id)
        .then (res => res.json())
        .then (data => {
                setProduct(data);
            })
    
}, []);

const btnST = {
    position: 'absolute',
    right: '100px',
    top: '150px',
    cursor: 'pointer',
    height: "auto"
}
const remove = () => {
api.delProduct(id)
.then(res => res.json())
.then(data => {
    alert(data + " товар удален")
    if (!data.error){
        setGoods(prev => prev.filter(g => g._id !== data._id))
        navigate(`${PATH}catalog`);
    }
}
    
    )


}


return <>

{product && product.author && product.author._id === user._id && <button 
onClick ={remove} 
className="btn" 
style={btnST}>
    <Trash3/>
</button>}

<div className="productTopBlock">

<h1 className ="productHName">{product.name || 'Страница товара'}</h1>
    <p className ="productArticle">Артикул: {id}</p>
    <div className ="btnReturnInCatalog"><Link to={PATH + "catalog"}><ArrowLeftCircle/> Назад</Link></div>
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