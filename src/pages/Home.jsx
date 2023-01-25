import React, {useEffect, useState} from "react";
import Card from "../components/Card";
import Sqr from "../img/squ.png";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";
import Api from "../Api";


// const [product, setProducts] = useState([])



export default ({data}) => {
//     возможное решение
//  const [prod, setProd] = useState([]);

//  useEffect(() =>
//     fetch("https://api.react-learning.ru/products")
//     .then(responce => {
//         if (responce.ok){
//             return responce.json()
//         }
//     })
//     .then(prod => {setProd(prod)
//     }), []
//  )


    return <>
    {/* ниже рпанозначные 2 строки, если тег а то есть перезагрузка страницы, если чз компонент Линк, то перезагрузкки нет */}
   {/* <a href="/catalog">Перейти в КАТАЛОГ</a> */}
   {/* <Link to="/catalog">Перейти в КАТАЛОГ</Link> */} 
   {/* реализовано ниже */}
<div className="UpBlockSq">
<img className="squImg" src={Sqr}/>
    <div className="UpBlock">
        <h1>ЛАКОМСТВА ДЛЯ СОБАК</h1>
        <p>Крафтовые угощения для ваших питомцев.<br></br> Натурально, полезно, интересно! </p>
    </div>
    <button className="sqButton"> <Link to="/catalog">ПЕРЕЙТИ В  КАТАЛОГ</Link></button>
    </div>
        <h1>Покупают сейчас</h1>
        <div className="cards">
           
            {data.map((el, i) => <Card key={"card_" + i}
            text={el.name}
            like={(i + 1) % 2 === 0}
            cardImg = {el.pictures}
            price = {el.price}
            wight = {el.wight}
            // description = {el.description}
            />)}
        </div>
    
        <Ads/>


        

       
      
    </>
}