import React, {useState, useEffect, useContext} from "react";

import products from "./assets/data.json";
// роутер - это маршрут
import {Routes, Route, Link} from "react-router-dom";
// буцрап ниже можно отключить
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import AddForn from "./pages/AddForn";
import {Helmet} from "react-helmet";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {Api} from "./Api";

import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Ctx from "./Ctx";
import Card from "./components/Card";
import Favorites from "./pages/Favorites";

import Fake from "./pages/Fake";
import Basket from "./pages/Basket";
import "./style.css";
const smiles = ["%_%", "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

// Ниже пути сайта, при локальной работе, оставляем с одной палком, 
// иначе берем по имени репозитория путь
const PATH = "/";

// const PATH = "/DF/"
// alert(<Card/>)



const App = () => {
    let usr = localStorage.getItem("user8");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token))
    const [goods, setGoods] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [favorites, setFavorites] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem
        ("basket8") ? JSON.parse(localStorage.getItem("basket8")) :
        [])



    useEffect(() => { 
        if (token) {
            //загрузить данные с сервера
            api.getProducts()
            .then(res => res.json())
            .then(data => {
               setGoods(data.products);
            })
            api.getUsers()
            .then(res => res.json())
            .then(data => {
                console.log("af-af", data);
                setAuthors(data);
            })
        }
    }, []) // в этом случае консольлог сработает лишь раз, а если убрать [], то при любом изменении сайта)нажамать кнопку, обновтьь и тд) [] - это зависимость от чего-то
    
    useEffect(() => { // нужен чтоб загружать данные с серв, делать гет-запрос
        console.log("change token");
        setApi(new Api(token));
        let usr = localStorage.getItem("user8");
        if (usr) {
            usr = JSON.parse(usr);
        }
        setUser(usr); 
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
                setVisibleGoods(data.products);
                setGoods(data.products);
            })
        }
    }, [api])

    useEffect(() => {

setFavorites(goods.filter(el => {
// console.log(el)
return el.likes && el.likes.includes(user._id)

}
    

    ))
    }, [goods])
    

useEffect (() => {
        console.log(visibleGoods.length);
    }, [visibleGoods])


useEffect(() => {
    
        localStorage.setItem("basket8", JSON.stringify(basket));
    
}, [basket]);


    return (
        <Ctx.Provider value ={{
// слева части которые приходят от Ctx,а справа, которые были выше в этом файле
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            favorites: favorites,
            setFavorites: setFavorites,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            PATH: PATH,
            basket,
            setBasket,
            authors
        }}>
            <div className="wrapper">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Doog Food</title>
                <link rel="canonical" href="" />
            </Helmet>

                <Header/>

                <main>
                    {/* ниже для прошлых версий без реакт-роутер
                    {user ? <Catalog data={goods}/> : <Home data={prodCards}/>} */}
                    <Routes>
                        <Route path={PATH} element= {<Home data={products}/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog data={visibleGoods}/>}/>
                        <Route path={PATH + "profile"} element={<Profile />}/>
                        <Route path={PATH + "catalog/:id"} element={<Product/>}/>
                        <Route path = {PATH + "add"} element ={<AddForn/>}/>
                        <Route path = {PATH + "favorites"} element ={<Favorites/>}/>
                        <Route path = {PATH + "basket"} element ={<Basket/>}/>
                    <Route path = {PATH + "fake/:n/:title"} element ={<Fake/>}/>
                    </Routes>


{/* <ul>
 {smiles.map((el, i) => <li key ={el}>
    <Link to ={`${PATH}fake/${i+1}/${el}`}>{el}</Link>
    </li>)}
</ul> */}

                </main>
                <Footer/>
            </div>
            {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
            <Modal/>
        </Ctx.Provider>
    )
}
export default App;