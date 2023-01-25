import React, {useState} from "react";
import "./style.css";

import Signup from "./Signup";
import Login from "./Login";

export default ({isActive, setState}) => {
    const [auth, setAuth] = useState(true);
    let style = {
        display: isActive && "flex",
        // display: isActive ? "flex": "none"
    }
    return <div className="modal-container" style={style}>
        <div className="modal">
            <div className="modal-close" onClick={() => setState(false)}/>
            <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
            {auth ? <Login change={setAuth} 
            close={setState} /> 
            : <Signup change={setAuth}  
            close={setState} />}
        </div>
    </div>
}