import React, {useState, useContext} from "react";
import Search from "../Search/search";
import "./header.css";
import Logo from "./img/logo.png";
import {Link} from "react-router-dom";
import Ctx from "../../Ctx";
import {Badge} from "react-bootstrap"
import {PlusSquareFill, HeartFill, CartFill} from "react-bootstrap-icons";
import Favorites from "../../pages/Favorites";
// user, setUser, раньше вставлялись ниже, до введения Ctx.js
export default () => {
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
    // const [user, setUser] = useState(localStorage.getItem("user8"));

    // let user = localStorage.getItem("user8");
const {user, setUser, setModalActive, PATH, favorites, basket} = useContext(Ctx);

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
            <nav className="addFavouritesAndBasketInHeader">  
            {user && <Link to={PATH + "add"}><PlusSquareFill/></Link>}
            
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style = {{fontSize: "20px"}}/>
            <Badge bg="light" text ="dark">{favorites.length}</Badge>
            </Link>}


            {user && <Link to={PATH + "basket"} className="badge-link">
                <CartFill style = {{fontSize: "23px"}}/>
            <Badge bg="light" text ="dark">
                {basket.reduce((acc, el) => acc + el.cnt, 0)}
                </Badge>
            </Link>}
            </nav>

            {user && user.name && <Link to={PATH + "profile"} style = {{marginRight: 0}}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {/* {user && <a href="" onClick={logOut}>Выйти</a>} */}
            {user && user.avatar && <img className="userAvatarInHeader" src={user.avatar}></img>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div