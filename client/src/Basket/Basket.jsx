import React from 'react';
import './Basket.css';
import Backspace from './../Reviews/img/backspace.svg'
import ImgGlass from './../Main/Choices/img/glass.jpg';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

// function Basket(props) {
class Basket extends React.Component {

    state = {
        response: '',
        post: '',
        responseToPost: '',
        name: '',
        phone: '',
        orderName: '',
        postCity: '',
        postCityArea: '',
        postNumber: '',
        file: '',
        modal11: false
    };
    
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    orders = () => {
        return this.props.itemsInCard.map(item => item.gsx$name.$t)
    };
    ordersCount = () => {
        return this.props.itemsInCard.map(item => item.gsx$count.$t)
    }
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                post: this.state.post,
                name: this.state.name,
                phone: this.state.phone,
                orderName: this.orders(),
                orderCount: this.ordersCount(),
                totalPrice: this.getPrice(),
                postCity: this.state.postCity,
                postCityArea: this.state.postCityArea,
                postNumber: this.state.postNumber,
                file: this.state.file
            }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };

    getPrice = () => {
        let price = 0;
        this.props.itemsInCard.forEach((item) => {
            price += +item.gsx$cost.$t * +item.gsx$count.$t
        })
        return price
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit}>
                <div className="basket__wrapper" >
                    <div className="basket">Корзина</div>
                    <form>
                        {
                            this.props.itemsInCard.map(p => <div key={p.gsx$id.$t} id={p.gsx$id.$t} >
                                <div className="basket__box">
                                    <div className="basket__photo">
                                        <img src={p.gsx$img.$t != null ? p.gsx$img.$t : ImgGlass} alt="" />
                                    </div>
                                    <div className="basket__name">
                                        {p.gsx$name.$t}
                                    </div>
                                    <div className="basket__cost">{p.gsx$cost.$t} грн</div>
                                    <div>
                                        <button type='button' className="basket__button" onClick={() => {
                                            if (p.gsx$count.$t > 1) {
                                                this.props.minusAmount(p.gsx$id.$t)
                                            }
                                        }}>-</button>
                                        <span className="basket__count">{p.gsx$count.$t}</span>
                                        <button type='button' className="basket__button" onClick={() => {
                                            this.props.plusAmount(p.gsx$id.$t)
                                        }}>+</button>
                                    </div>
                                    <img className="basket__backspace"  src={Backspace} alt="a" onClick={() => {
                                        this.props.toggleFollowingProgress(false, p.gsx$id.$t)
                                        this.props.deleteItemFromCard(p.id)
                                    }} />
                                </div>
                            </div>)
                        }
                        <div className="total__order">Сума до оплати за товар : <div className="total__order__price">{this.getPrice()}грн</div></div>
                        <h1>Оформлення замовлення</h1>
                        <div className="Order__wrapper">
                            <div className="buyer__order">
                                <div className="buyer__name__number">
                                    <h2>Дані покупця</h2>
                                    <div>
                                        <input
                                            value={this.state.name}
                                            onChange={e => this.setState({ name: e.target.value })}
                                            name="firstName"
                                            placeholder="Введіть ПІБ"
                                            type="text"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            value={this.state.phone}
                                            onChange={e => this.setState({ phone: e.target.value })}
                                            name="phoneNumber"
                                            placeholder="Введіть номер телефону"
                                            type="number"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="buyer__location">
                                    <h2>Доставка</h2>
                                    <div>
                                        <select name="postCityArea"
                                            required
                                            value={this.state.postCityArea}
                                            onChange={e => this.setState({ postCityArea: e.target.value })}>
                                            <option>Виберіть область</option>
                                            {
                                                this.props.postDataArea.map(p =>
                                                    <option key={p.Ref}>{p.Description}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <select name="postCity"
                                            required
                                            value={this.state.postCity}
                                            onChange={e => this.setState({ postCity: e.target.value })}>
                                            <option>Виберіть місто</option>
                                            {
                                                this.props.postDataCity.map(p =>
                                                    <option key={p.CityID}>{p.Description}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <input name="postNumber"
                                            placeholder="Введіть номер відділенння"
                                            required
                                            type="text"
                                            value={this.state.postNumber}
                                            onChange={e => this.setState({ postNumber: e.target.value })} />
                                    </div>
                                </div>
                                <div className="buyer__file">
                                    <input name="file"
                                        placeholder="Введіть URL вашої фотографії"
                                        type="text"
                                        value={this.state.file}
                                        onChange={e => this.setState({ file: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={this.toggle(11)}
                            className="buyer__submit" type="submit">Оформити замовлення</button>
                        <MDBContainer>
                            <MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
                                <MDBModalBody className="text-center">
                                    <p>Ваше замовлення оформленно , чекайте дзвінка.</p>
                                    <MDBBtn type='button' className="buyer__submit" color="dark" onClick={this.toggle(11)}>Закрити</MDBBtn>
                                </MDBModalBody>
                            </MDBModal>
                        </MDBContainer>
                    </form>
                </div >
            </div>
        );
    }
}
export default Basket;