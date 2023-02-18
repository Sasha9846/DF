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
const {api, user, setGoods, setBasket, PATH} = useContext(Ctx);

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
    
    if (!data.error){
        alert(data.name + " товар удален")
        setGoods(prev => prev.filter(g => g._id !== data._id))
        navigate(`${PATH}catalog`);
    }
}
    
    )


}

const choiseConfirm = () => {
    if (window.confirm('Вы действительно хотите удалить товар?')) {
       return remove()
      } 
}
  

const buy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBasket(prev => {
        const test = prev.filter(el => el.id === id);
        if(test.length) {
            return prev.map(el => {
                if(el.id === id) {
                    el.cnt++;
                }
                return el;
            })
        } else {
            return [...prev, {id: id, cnt: 1}];
        }
    })
}




return <>

{product && product.author && product.author._id === user._id && 

<button 
// onClick ={remove} 
onClick= {choiseConfirm}
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


    <div className="productLefttBlock">
    <div className="discountBlockRedInProductCard">

        {product.discount > 0 && <p>Скидка {product.discount} %</p>}
      </div>
         <img className="productImg" src={product.pictures} alt="Изображение товара"></img>

    </div>



         <div className="productRightBlock">

            <div className="productPriceBlock">
                
                <h2>Стоимость</h2>
                
                <div className="PriceBlockPriceAndDiscountPrice">
                    {product.discount > 0 && <h3 className="DiscountPriceInCard">{product.price}</h3>   }
                    <h3>{`${product.price - product.price*(product.discount/100) } ₽`}</h3>   
                </div>

                <p>Вес/количество: {product.wight}</p>
            </div>

            <div className="productDescriptionsBlock">
                <h2>Описание</h2>
                <p>{product.description}</p>
             </div>
             <button className="btn" id = "btnBuy" onClick={buy}>В КОРЗИНУ</button>

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