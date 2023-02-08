import react from "react";
import { Link } from "react-router-dom";
import "./ads.css";
import pic from "./img/twosqu.png";
import picDogEat from "./img/dog-eat.png";
import dogSmile from "./img/dog-smile.png";
import pedegri from "./img/pedegri.png";
import craftEat from "./img/craft-eat.png";
import pedegriWet from "./img/pedegri-wet.png";
import dogWithToy from "./img/dogWithToy.png";



export default () => {
    return <>



<h2 className="textHeaderInHomePage">НАША ПРОДУКЦИЯ</h2>
<div className="adsProductCatalog">

<Link to="/catalog"> <div className="adsProductCatalogCard" style={{
    background: '#419494'
  }}>
        <h4>ВКУСНЯШКИ</h4>
    <img className="adsProductCatalogImg" src={craftEat} alt="doggy eat"/>
    </div> </Link>

    <Link to="/catalog"> <div className="adsProductCatalogCard" style={{
    background: '#99CCCD'
  }}>
        <h4>СУХОЙ КОРМ</h4>
    <img className="adsProductCatalogImg" src={pedegri} alt="doggy eat"/>
    </div> </Link>

    <Link to="/catalog"> <div className="adsProductCatalogCard" style={{
    background: 'rgb(124 183 183)'
  }}>
        <h4>ВЛАЖНЫЙ КОРМ</h4>
    <img className="adsProductCatalogImg" src={pedegriWet} alt="doggy eat"/>
    </div> </Link>

    <Link to="/catalog">  <div className="adsProductCatalogCard" style={{
    background: '#f0af4d'
  }}>
        <h4>ИГРУШКИ</h4>
    <img className="adsProductCatalogImg" src={dogWithToy} alt="doggy eat"/>
    </div> </Link>

</div>

<h2 className="textHeaderInHomePage">АКЦИИ И ПРЕДЛОЖЕНИЯ</h2>
<div className="promo-bottom">
    <div className="promo-little">
 
    <img src={dogSmile} alt="doggy eat"/>
        <div>
            <h4>НЕ ТОЛЬКО ПРОДУКТЫ</h4>
            <h5 style={{
    color: 'rgb(102, 102, 102)'
  }}>Мы обновили каталог!</h5>
            <p>Теперь в нашем магазине, кроме продуктов питания, вы можете выбрать различные игрушки для ваших питомцев</p>
        </div>
    </div>


    <div className="promo-medium">
    <img src={picDogEat} alt="doggy eat"/>
        <div>
            <h4>СЕЗОННОЕ ПРЕДЛОЖЕНИЕ</h4>
            <p>Cкидки на сухие корма для собак</p>
            <button className="btnAds"> <Link to="/catalog">ПЕРЕЙТИ В КАТАЛОГ</Link></button>
        </div>

    </div>

</div>

<Link to="/catalog"><div className="promo">
        <div>
            <h2>ТОРОПИСЬ ЗА СКИДКАМИ</h2>
            <h5>Успей купить пока цена снижена</h5>
        </div>
        <img src={pic} alt="doggy"/>
    </div></Link>
    
    </>
}