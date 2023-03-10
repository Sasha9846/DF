import Signup from "./components/Modal/Signup";
const onResponce = (res) => (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));
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

getProduct(id) { // получение продуктa
    return fetch(`${this.path}/products/${id}`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    }).then(onResponce);
}

addProduct(body) { // создать новый продукт (UPDD)
    return fetch(`${this.path}/products`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        }, 
                body: JSON.stringify(body)
    })
}

setLike(id, isLike) { // добавить/ удалить лайк
    return fetch(`${this.path}/products/likes/${id}`, {
        method: isLike ? "DELETE" : "PUT",
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

delProduct(id) { // удаление товара
    return fetch(`${this.path}/products/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `Bearer ${this.token}`
        } 
    })
}

addReview(productId, body) { // отзыв
    return fetch(`${this.path}/products/review/${productId}`, {
        method: "POST",
        headers: {
            "authorization": `Bearer ${this.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }).then(onResponce);
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

updUser(body, img = false) {
    return fetch(`${this.path}/v2/${this.group}/users/me${img ? "/avatar" : ""}`, {
        method: "PATCH",
        headers: {
            "authorization": `Bearer ${this.token}`,
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify(body)
    }
    )
}
getUsers() { //получить пользователей
    return fetch(`${this.path}/v2/${this.group}/users`, {
        headers: {
            "authorization": `Bearer ${this.token}`
        }
    })
}


}
export {Api};