import Print from './../Main/Whyus/img/print.svg';
import Shopping_basket from './../Main/Whyus/img/shopping_basket.svg';
import Alarm from './../Main/Whyus/img/alarm.svg';
import Transfer from './../Main/Whyus/img/transfer.svg';
import Tap from './../Footer/img/tap.svg';

type MassiveType = {
    id: number
    img: string
    text: string
    description: string
}

let initialState = {
    Whyuses: [
        { id: 1, img: Shopping_basket, text: "Досвід роботи з одягом", description: "більше року" },
        { id: 2, img: Print, text: "Використовуємо в роботі тільки", description: "якісні, провірені тканини і краски" },
        { id: 3, img: Transfer, text: "Індивідуальний підхід", description: "можливість вибрати свій дизайн" },
        { id: 4, img: Alarm, text: "Оперативність роботи", description: "до 24 годин" },
    ] as Array<MassiveType>,
    FooterBoxes: [
        { id: 1, img: Tap, text: "Виберіть тип товару для прінту", description: "Виберіть колір, тип товару і кількість" },
        { id: 2, img: Tap, text: "Вибір товару з прінтом або загрузіть своє лого", description: "У вас є можливість вибрати товар з прінтом нашої колекції або відправити свій логотип для прінту" },
        { id: 3, img: Tap, text: "Оформити заказ в два кліка", description: "В корзині вкажіть свій номер і місце куди доставити" },
        { id: 4, img: Tap, text: "Підтвердження по телефону", description: "В ближайший час ми обов`язково зв`яжемось з вами по телефону для підтвердження товару" },
    ] as Array<MassiveType>
}

export type initialStateType = typeof initialState

const MainReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        default:
            return state
    }
}

export default MainReducer;