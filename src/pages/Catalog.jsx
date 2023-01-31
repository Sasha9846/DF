import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons"
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default (data) => {
    const {visibleGoods, user, PATH} = useContext(Ctx);

const paginate = usePagination(visibleGoods, 12);


    return <>
    {user && <>
    {visibleGoods.length > 0 
    ? <>
        <h1>Каталог товаров</h1>



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
<p>Простите, у вас нет доступа к каталогу товаров. Необоходима авторизация.</p>
<Link to={PATH} className ="btn">Вернуться на главную</Link>
     </div>
     }
</>
}