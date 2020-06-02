import reviewReducer from './Reviews-Reducer';
import mainReducer from './Main-Reducer';

let store = {
    _state: {
        mainPage: {
            ChoicesGlass: [
                { id: 1, img: ImgGlass, name: "Кружка", cost: "200 грн" },
                { id: 2, img: ImgGlass, name: "Кружка1", cost: "200 грн" },
                { id: 3, img: ImgGlass, name: "Кружка2", cost: "200 грн" },
                { id: 4, img: ImgGlass, name: "Кружка3", cost: "200 грн" },
            ],
            ChoicesTshirt: [
                { id: 1, img: ImgTshirt, name: "Футболка", cost: "300 грн" },
                { id: 2, img: ImgTshirt, name: "Футболка1", cost: "300 грн" },
                { id: 3, img: ImgTshirt, name: "Футболка2", cost: "300 грн" },
                { id: 4, img: ImgTshirt, name: "Футболка3", cost: "300 грн" },
            ],
            Whyuses: [
                { id: 1, img: Shopping_basket, text: "Досвід роботи з одягом", description: "більше року" },
                { id: 2, img: Print, text: "Використовуємо в роботі тільки", description: "якісні, провірені тканини і краски" },
                { id: 3, img: Transfer, text: "Індивідуальний підхід", description: "можливість вибрати свій дизайн" },
                { id: 4, img: Alarm, text: "Оперативність роботи", description: "до 24 годин" },
            ],
            FooterBoxes: [
                { id: 1, img: Tap, text: "Виберіть тип товару для прінту", description: "Виберіть колір, тип товару і кількість" },
                { id: 2, img: Tap, text: "Вибір товару з прінтом або загрузіть своє лого", description: "У вас є можливість вибрати товар з прінтом нашої колекції або відправити свій логотип для прінту" },
                { id: 3, img: Tap, text: "Оформити заказ в два кліка", description: "В корзині вкажіть свій номер і місце куди доставити" },
                { id: 4, img: Tap, text: "Підтвердження по телефону", description: "В ближайший час ми обов`язково зв`яжемось з вами по телефону для підтвердження товару" },
            ]
        },
        reviewsPage: {
            ReviewsData: [
                { id: 1, img: Yoda, text: "Hello how are you ?", like: "likes : 0" },
                { id: 2, img: Yoda, text: "Okay, how about you ?", like: "likes : 2" },
                { id: 2, img: Yoda, text: "Okay, how about you ?", like: "likes : 4" },
            ],
            NewReviewsText: ''
        }
    },
    _callSub() {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSub = observer;
    },
    dispatch(action) {
        this._state.mainPage = mainReducer(this._state.mainPage, action);
        this._state.reviewsPage = reviewReducer(this._state.reviewsPage, action);

        this._callSub(this._state);
    }
}

window.store = store;

export default store