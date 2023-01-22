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


getProducts() { // получение продуктов
    return fetch(`${this.path}/products`, 
    {
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    })
}

setProduct() { // добавить продукт
    return fetch(`${this.path}/products`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }, 
        body: {
            "available": true, // boolean
            "pictures": "https://react-learning.ru/image-compressed/2.jpg", // string
            "name": "Куриные желудочки для собак", // string, обязательное
            "price": 450, // number, обязательное
            "discount": 10, // number 
            "stock": 10, // number
            "wight": "100 г", // string
            "description": "Описание demo", // string, обязательное
        }
    })
}

setLike() { // добавить лайк
    return fetch(`${this.path}/products/likes/:productId`, {
        method: "PUT",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    })
}

seleteLike() { // убрать лайк
    return fetch(`${this.path}/products/likes/:productId`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    })
}



passwordReset(){ // забли праоль?
    return fetch(`${this.path}/password-reset`), {
        method: "POST",
        headers: {
            "authorization": `Bearer ${this.token}`
        },
        body: {
            'email' : 'a.brusentsev@gmail.com'}
    }
}

deleteProducts() { // удаление товара
    return fetch(`${this.path}/products/:productId`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    })
}

createReview(){ //добавить отзыв
    return fetch(`${this.path}/products/review/:productId`), {
        method: "PUT",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    }
}

deleteReview(){ //удалить отзыв
    return fetch(`${this.path}/products/review/:postId/:reviewId`), {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    }
}


setAllReviews(){ // получить все отзывы
    return fetch(`${this.path}/products/review/`), {
        method: "GET",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    }
}

setIdReviews(){ // получить отзывы по конкретному товару
    return fetch(`${this.path}/products/review/:productId`), {
        method: "GET",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    }
}


getUser(){ //данные пользователя
    return fetch(`${this.path}/v2/:groupId/users/me`), {
        method: "GET",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    }
}

updUser(){ // изменить пользователя
    return fetch(`${this.path}/v2/:groupId/users/me`), {
        method: "PATCH",
        headers: {
            "authorization": `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        } 
    }
}

}
export {Api};