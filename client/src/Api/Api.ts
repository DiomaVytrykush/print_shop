import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

type getProfileResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}

type loginResponseType = {
    data: {
        userId: number
    }
    resultCode: number
    messages: Array<string>
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

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
        return axios.get("https://spreadsheets.google.com/feeds/list/1h7mmDC6De5aUPQw5QgCwdGGWWlgQHcEVQZyOsfnCWXw/od6/public/values?alt=json")
            .then(response => {
                return response.data.feed.entry
            })
    },

    getItems() {
        return axios.get("https://spreadsheets.google.com/feeds/list/1h7mmDC6De5aUPQw5QgCwdGGWWlgQHcEVQZyOsfnCWXw/od6/public/values?alt=json")
            .then(response => {
                return response.data.feed.entry
            })
    },

    getProfile() {
        return instance.get<getProfileResponseType>("auth/me").then(res => res.data)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<loginResponseType>("auth/login", { email, password, rememberMe }).then(res => res.data)
    },

    logout() {
        return instance.delete<loginResponseType>("auth/login")
    },

    postDataCity() {
        return postData('https://api.novaposhta.ua/v2.0/json/', {
            modelName: 'Address',
            calledMethod: 'getCities',
            methodProperties: {},
            apiKey: 'a76b372c56929982b03756bf3d0337fc'
        })
            .then(response => {
                return response.data;
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
                return response.data;
            })
    }
}
