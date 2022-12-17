import React from "react";
import Card from "../components/Card";

export default ({data}) => {
    return <>
        <h1>Главная страница</h1>
        <div className="cards">
            {data.map((el, i) => <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
        </div>
    </>
}