import React from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons"

export default ({data}) => {
    return <>
    {data.length > 0 
    ? <>
        <h1>Каталог товаров</h1>
        <div className="cards">
            {/* ниже так лучше не делать */}
            {data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
            <Card key={"card_" + i} 
            cardImg={el.pictures}
            text={el.name} 
            descr={el.description}
            price = {el.price}
            description = {el.description}
            like={(i + 1) % 2 === 0}/>
            </Link>)}
        </div>
    </>
    : <div className ="empty-block">
<EmojiFrown/>
<p>По запросу не найдено ни одного товара</p>
<Link to="/" className ="btn">Вернуться на главную</Link>
     </div>
     
}
</>
}