import React, {useState, useContext} from "react";
import Search from "../Search/search";
import "./header.css";
import Logo from "./img/logo.png";
import {Link} from "react-router-dom";
import Ctx from "../../Ctx";
// user, setUser, раньше вставлялись ниже, до введения Ctx.js
export default ({goods, searchGoods, setModalActive}) => {
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
    // const [user, setUser] = useState(localStorage.getItem("user8"));

    // let user = localStorage.getItem("user8");
const {user, setUser} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        // let name = prompt("Как вас зовут?");
        // if (name) {
        //     localStorage.setItem("user8", name);
        //     setUser(name);
        // }
        // setModalActive(function(previous) {
        //     console.log("Активность модального окна:", previous)
        //     return !previous;
        // });
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link  to="/"><img className="logo" src= {Logo} alt="" /></Link>
        <Search data={goods} searchGoods={searchGoods}/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && <Link to="/profile">{user}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div