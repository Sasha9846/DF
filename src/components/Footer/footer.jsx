import React from "react";
import "./footer.css";
import Vk from "../../img/vk.png";
import Watsapp from "../../img/wt.png";
import Viber from "../../img/vb.png";
import { Link } from "react-router-dom";

export default () => {
    const year = new Date().getFullYear();
    return <footer>

<div className="foticons">  
           <a href=""><img className="ic" src= {Watsapp} alt="" /></a> 
           <a href=""><img className="ic" src= {Viber} alt="" /></a> 
           <a href=""><img className="ic" src= {Vk} alt="" /></a> 
         </div>



        <div className="footer__left">
        <Link to="/catalog">   <a href="">Каталог</a></Link>
        <Link to="/catalog"><a href="">Акции</a></Link>
            <a href="">Отзывы</a>
        </div>

        <div className="footer__center">
            <a href="">Оплата и доставка</a>
            <a href="">Часто спрашивают</a>
            <a href="">Обратная связь</a>
        </div>
{/* /рпрр */}

        <div className="footer__right">
        <h1>Контакты</h1>
        <a id="telnumb" href="">8 (999) 700-77-77</a>
        <a href=""> dogfood@mail.ru</a>
        </div>

    </footer>
}
// © => &copy;
// &nbsp; - неразбиваемый пробел