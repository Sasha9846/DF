import Signup from "./components/Modal/Signup";

class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    
    }
signUp(body) { // регистрация
    body.group = this.group;
    return fetch (`${this.path}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
body: JSON.stringify(body)
    });
}
signIn(body) { // авторизхация
    return fetch (`${this.path}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
    },
body: JSON.stringify(body)
    });
}


getProducts() {
    return fetch(`${this.path}/products`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    })
}
}
export {Api};