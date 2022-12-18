import React, {useState, useEffect} from "react";
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {Api} from "./Api";
import Nut from'./img/nut1.jpg';

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];
const prodCards = [
<div className="cardProduct">
      <img className="imgInCard" src={Nut}/>
      <h2> Орешки</h2>
      <p>Очень вкусные</p>
</div>, 

<div className="cardProduct">
      <img className="imgInCard" src={Nut}/>
      <h2> Орешки</h2>
      <p>Очень вкусные</p>
</div>,

<div className="cardProduct">
      <img className="imgInCard" src={Nut}/>
      <h2> Орешки</h2>
      <p>Очень вкусные</p>
</div>,

<div className="cardProduct">
      <img className="imgInCard" src={Nut}/>
      <h2> Орешки</h2>
      <p>Очень вкусные</p>
</div>,

<div className="cardProduct">
      <img className="imgInCard" src={Nut}/>
      <h2> Орешки</h2>
      <p>Очень вкусные, белочкам по кайфу</p>
</div>,

<div className="cardProduct">
      <img className="imgInCard" src=""/>
      <h2> Примечание</h2>
      <p>в настоящий момент сайт находится еще на стадии разработки, автор к сожалению не упел доделать все, что хотел. А что успел, показал))</p>
</div>,
]
const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token))
    const [goods, setGoods] = useState([]);

    useEffect(() => { 
        console.log('Hello') 
        console.log(token);
        if (token) {
            //загрузить данные с сервера
            api.getProducts()
            .then(res => res.json())
            .then(data => {
               setGoods(data.products);
            })
        }
    }, []) // в этом случае консольлог сработает лишь раз, а если убрать [], то при любом изменении сайта)нажамать кнопку, обновтьь и тд) [] - это зависимость от чего-то
    
    useEffect(() => { // нужен чтоб загружать данные с серв, делать гет-запрос
        console.log('Change token'); 
        setApi(new Api(token))
        setUser (localStorage.getItem("user8")) 
    }, [token]) // зависимость от токкена

useEffect(() => {
    if (!user) {
        localStorage.removeItem("token8");
        setToken(null);
    }
}, [user])



    useEffect(() =>{
        if (token) {
            //загрузить данные с сервера
            api.getProducts()
            .then(res => res.json())
            .then(data => {
                setGoods(data.products);
            })
        }
    }, [api])

    
    return (
        <>
            <div className="container">
                <Header 
                    user={user} 
                    setUser={setUser} 
                    products={products} 
                    setModalActive={setModalActive}
                />
                <main>
                    {user ? <Catalog data={goods}/> : <Home data={prodCards}/>}
                </main>
                <Footer/>
            </div>
            {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
            <Modal isActive={modalActive} setState={setModalActive} api={api} setToken = {setToken}/>
        </>
    )
}
export default App;