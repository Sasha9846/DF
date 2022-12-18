import React from "react";
import "./footer.css";
import Vk from "../../img/vk.png";
import Watsapp from "../../img/wt.png";
import Viber from "../../img/vb.png";


export default () => {
    const year = new Date().getFullYear();
    return <footer>

<div className="foticons">  
           <a href=""><img className="ic" src= {Watsapp} alt="" /></a> 
           <a href=""><img className="ic" src= {Viber} alt="" /></a> 
           <a href=""><img className="ic" src= {Vk} alt="" /></a> 
         </div>



        <div className="footer__left">
            <a href="">Каталог</a>
            <a href="">Акции</a>
            <a href="">Отзывы</a>
        </div>

        <div className="footer__center">
            <a href="">Оплата и доставка</a>
            <a href="">Часто спрашивают</a>
            <a href="">Обратная связь</a>
        </div>



        <div className="footer__right">
        <h1>Контакты</h1>
        <a id="telnumb" href="">8 (999) 700-77-77</a>
        <a href=""> squirrelfood@mail.ru</a>
        </div>

    </footer>
}
// © => &copy;
// &nbsp; - неразбиваемый пробел