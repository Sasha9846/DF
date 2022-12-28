import React from "react";
import Card from "../components/Card";
import Sqr from "../img/squ.png";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";

export default ({data}) => {
    return <>
    {/* ниже рпанозначные 2 строки, если тег а то есть перезагрузка страницы, если чз компонент Линк, то перезагрузкки нет */}
   {/* <a href="/catalog">Перейти в КАТАЛОГ</a> */}
   <Link to="/catalog">Перейти в КАТАЛОГ</Link>
<div className="UpBlockSq">
<img className="squImg" src={Sqr}/>
    <div className="UpBlock">
        <h1>ЛАКОМСТВА ДЛЯ БЕЛОЧЕК</h1>
        <p>Вкусные ништяки для маленьких любимых пушистиков</p>
    </div>
    <button className="sqButton">ЗАКАЗАТЬ</button>
    </div>
        <h1>Каталог</h1>
        <div className="cards">
            {data.map((el, i) => <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
        </div>
        <Ads/>
    </>
}