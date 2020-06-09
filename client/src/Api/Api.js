import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
    });
    return await response.json(); 
}

export const productsAPI = {

    getProducts() {
        return Axios.get("https://spreadsheets.google.com/feeds/list/1h7mmDC6De5aUPQw5QgCwdGGWWlgQHcEVQZyOsfnCWXw/od6/public/values?alt=json")
            .then(response => {
                return response.data.feed.entry
            })
    },

    getItems() {
        return Axios.get("https://spreadsheets.google.com/feeds/list/1h7mmDC6De5aUPQw5QgCwdGGWWlgQHcEVQZyOsfnCWXw/od6/public/values?alt=json")
            .then(response => {
                return response.data.feed.entry
            })
    },

    getProfile() {
        return instance.get("auth/me")
    },
    login(email, password, rememberMe = false) {
        return instance.post("auth/login", { email, password, rememberMe })
    },
    logout() {
        return instance.delete("auth/login")
    },
    postDataCity() {
        return postData('https://api.novaposhta.ua/v2.0/json/', {
            modelName: 'Address',
            calledMethod: 'getCities',
            methodProperties: {},
            apiKey: 'a76b372c56929982b03756bf3d0337fc'
        })
            .then(response => {
                return response.data; // JSON data parsed by `response.json()` call
            })
    },
    postDataArea() {
        return postData('https://api.novaposhta.ua/v2.0/json/', {
            modelName: 'Address',
            calledMethod: 'getAreas',
            methodProperties: {},
            apiKey: 'a76b372c56929982b03756bf3d0337fc'
        })
            .then(response => {
                return response.data; // JSON data parsed by `response.json()` call
            })
    }
}
