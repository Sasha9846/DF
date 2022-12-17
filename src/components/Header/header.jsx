import React, {useState} from "react";
import Search from "../Search/search";
import "./header.css";

export default ({user, setUser, products, setModalActive}) => {
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойства)
    // const [user, setUser] = useState(localStorage.getItem("user8"));

    // let user = localStorage.getItem("user8");
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
        <a className="logo" href="">DogFood</a>
        <Search data={products}/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && <a href="">{user}</a>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div