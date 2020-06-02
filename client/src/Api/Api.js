import * as Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
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
