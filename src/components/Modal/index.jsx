import React, {useState, useContext} from "react";
import "./style.css";
import Ctx from "../../Ctx";
import Signup from "./Signup";
import Login from "./Login";
import {X} from "react-bootstrap-icons";
export default () => {
    const [auth, setAuth] = useState(true);
    const {modalActive, setModalActive} = useContext(Ctx);
    let style = {
        display: modalActive && "flex",
        // display: isActive ? "flex": "none"
    }
    return <div className="modal-container" style={style}>
        <div className="modal" id>
            <div className="modal-close" onClick={() => setModalActive(false)}><X/></div>
            {auth ? <h2>Войти</h2> : <h5>Зарегистрироваться</h5>}
            {auth ? <Login change={setAuth} 
            close={setModalActive} /> 
            : <Signup change={setAuth}  
            close={setModalActive} />}
        </div>
    </div>
}