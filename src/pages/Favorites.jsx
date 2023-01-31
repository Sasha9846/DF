import React, {useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons"
import Ctx from "../Ctx";
import Pagination from "../components/Pagination";
import usePagination from "../hooks/usePagination";

export default () => {
    const {favorites, PATH} = useContext(Ctx);
    const paginate = usePagination(favorites, 3);


    return <>
    {favorites.length > 0 
    ? <>
        <h1>Каталог товаров</h1>
        <Pagination hook={paginate}/>

        <div className="cards">

            {paginate.setPageData().map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
            <Card key={"card_" + i} 
            // один фрагмент ниже писали на лекции
            {...el}
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
<p>У вас нет любимых товаров</p>
<Link to={PATH + "catalog"} className ="btn">В каталог</Link>
     </div>
     
}


</>
}