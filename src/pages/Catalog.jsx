import React, {useContext, useEffect, useState} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown, SortNumericDown, SortNumericUp} from "react-bootstrap-icons"
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default (data) => {
    const {visibleGoods, user, PATH} = useContext(Ctx);
const [sortGoods, setSortGoods] = useState(visibleGoods)
const paginate = usePagination(sortGoods, 12);

const [btnType, setBtnType] = useState("");

let st= {
    display: "flex",
    gap: "10px"
}
const updSort = (e) => {
    let el = e.currentTarget;
    let flag = false;
    if (el.classList.contains("sort")) {
        el.classList.remove("sort");
        setBtnType("");
        flag = true;
    }
    else {
        el.classList.add("sort");
        setBtnType(el.title);
    }
    if (flag) {
        setSortGoods(visibleGoods);
    }
    else {
        let data = [...visibleGoods];
        switch (el.title) {
            case "down": data.sort((a, b) => a.price - b.price); break;
            case "up": data.sort((a, b) => b.price - a.price); break;
            case "new": data = data.filter(d => d.tags.includes("new")); break;
            case "sale": data = data.filter(d => d.discount > 0); break;
        }
        setSortGoods(data);
    }
}

useEffect(() => {
        setSortGoods(visibleGoods)
}, 
[visibleGoods]);


    return <>
    {user && <>
    {visibleGoods.length > 0 
    ? <>
        <h1>Каталог товаров</h1>
        <div className="sortBlockSuper">
            <h4>Сортировать</h4>
        <div style={st}>
            <button className= {`btn ${btnType === "up" ? "sort" : ""}`} title="up" onClick={updSort}>По цене &nbsp;<SortNumericDown/></button>
            <button className= {`btn ${btnType === "down" ? "sort" : ""}`} title="down" onClick={updSort}>По цене &nbsp;<SortNumericUp/></button>
            <button className= {`btn ${btnType === "new" ? "sort" : ""}`} title="new" onClick={updSort}>Новинки</button>
            <button className= {`btn ${btnType === "sale" ? "sort" : ""}`} title="sale" onClick={updSort}>Скидки</button>
        </div>
        </div>

        <Pagination hook={paginate}/>



        <div className="cards">
            {/* ниже так лучше не делать */}
            {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
            <Card key={"card_" + i} 
            // один фрагмент ниже писали на лекции
            {...el}
            // а ниже я сам писал
            // cardImg={el.pictures}
            // text={el.name} 
            // descr={el.description}
            // price = {el.price}
            // description = {el.description}
            // wight = {el.wight}
            // like={(i + 1) % 2 === 0}
            // author = {el.author}
            />
            </Link>)}
        </div>
        <Pagination hook={paginate}/>
    </>
    : <div className ="empty-block">
<EmojiFrown/>
<p>По запросу не найдено ни одного товара</p>
<Link to={PATH} className ="btn">Вернуться на главную</Link>
     </div>
     
}
</>}
{!user && <div className ="empty-block">
<EmojiFrown/>
<p>Простите, у вас нет доступа к каталогу товаров. Необходима авторизация.</p>
<Link to={PATH} className ="btn">Вернуться на главную</Link>
     </div>
     }
</>
}