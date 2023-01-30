import React, {useState, useContext} from "react";
import Search from "../Search/search";
import "./header.css";
import Logo from "./img/logo.png";
import {Link} from "react-router-dom";
import Ctx from "../../Ctx";
import {Badge} from "react-bootstrap"
import {PlusSquareFill, HeartFill} from "react-bootstrap-icons";
import Favorites from "../../pages/Favorites";
// user, setUser, раньше вставлялись ниже, до введения Ctx.js
export default () => {
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
    // const [user, setUser] = useState(localStorage.getItem("user8"));

    // let user = localStorage.getItem("user8");
const {user, setUser, setModalActive, PATH, favorites} = useContext(Ctx);

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
        <Link  to={PATH}><img className="logo" src= {Logo} alt="" /></Link>
        <Search/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && <Link to={PATH + "add"}><PlusSquareFill/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link"><HeartFill/>
            <Badge>{favorites.length}</Badge>
            </Link>}
            {user && user.name && <Link to={PATH + "profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div