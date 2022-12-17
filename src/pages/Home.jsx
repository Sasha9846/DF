import React from "react";
import Card from "../components/Card";
import Sqr from "../img/squ.png"
export default ({data}) => {
    return <>
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
    </>
}