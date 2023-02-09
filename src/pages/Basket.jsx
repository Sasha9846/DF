import React, {useContext, useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";
import Row from "../components/Row/row";
import {Link} from "react-router-dom";
export default () => {
    const [gds, setGds] = useState([])
    const {basket, goods, PATH} = useContext(Ctx);

    useEffect(() => {
        let arr = [];
        if (goods.length) {
            basket.forEach(el => {
                arr.push(goods.filter(g => g._id
                    === el.id)[0])
            })
        }
setGds(arr);
    }, [basket, goods])




    return <>
    <h1>Корзина</h1>
    {basket.length > 0 && gds.length > 0 && <Table hover> 
    
        <thead>
            <tr>
                <th>Изображение</th>
                <th>Название</th>
                <th>Количество</th>
                <th>Цена</th>
            </tr>
        </thead>


        <tbody>
           {basket.map((el, i) => 
           <Row key= {el.id} {...gds[i]} {...el} />)}

        </tbody>


        <tfoot>
            <tr>
             <td colSpan ={3} className="text-end fw-bold fs-3">ИТОГО:</td>
                <td className="fw-bold fs-3">
                    {basket.reduce((acc, el, i) =>
                    {
                        acc += el.cnt * (gds[i].price - (gds[i].price * gds[i].discount/100));
                        return acc;
                    }, 0)} ₽
                </td>
            </tr>
        </tfoot>
        </Table>
        }


{basket.length <= 0 && <>
<div className="basketIsEmpty">
    <EmojiFrown/>
<p>Ваша корзина пуста</p>
<Link to={PATH + "catalog"} className ="btn">ПЕРЕЙТИ В КАТАЛОГ</Link>

</div>
</>}

    </>
}