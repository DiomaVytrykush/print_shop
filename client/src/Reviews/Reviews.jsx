import React from 'react';
import './Reviews.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLength50 } from '../Helpers/Validators/Validators';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from 'mdbreact';

const ReviewsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    component={Textarea}
                    validate={maxLength50}
                    name="newReview" placeholder="Введіть свій коментар..." />
            </div>
            <button className="Add__Review__Button">Коментувати</button>
        </form>
    )
}

const ReviewsReduxForm = reduxForm({ form: 'reviews' })(ReviewsForm)

class Reviews extends React.Component {
    state = {
        modal11: false
    }
    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber]
        });
    }
    addNewReview = values => {
        if (this.props.isAuth == false) {
            this.toggle(11)()
        }
        else {
            this.props.onAddNewReview(values.newReview)
        }
    }
    render() {
        return (
            <div className="Reviews">
                <h1>Залишайте свої відгуки тут :</h1>
                <div className="Add__Review">
                    <ReviewsReduxForm onSubmit={this.addNewReview} />
                </div>
                {this.props.reviews.map(r =>
                    <div className="Reviews__box">
                        <div className="Reviews__box__profile">
                            <img className="Reviews__box__avatar" src={r.img} alt="a" />
                            <div className="Reviews__box__description" >
                                <p>{r.text}</p>
                                <div className="Reviews__box__like">
                                    <img src={r.like} alt="a"
                                        onClick={() => {
                                            if (this.props.isAuth == false) {
                                                this.toggle(11)()
                                            }
                                            else {
                                                this.props.addLikeToReview(r.id)
                                            }
                                        }}
                                    />
                                    <MDBContainer>
                                        <MDBModal isOpen={this.state.modal11} toggle={this.toggle(11)} frame position="top">
                                            <MDBModalBody className="text-center">
                                                <p>Спочатку ввійдіть на сайт</p>
                                                <MDBBtn className="buyer__submit" type="submit" color="dark" onClick={this.toggle(11)}>Закрити</MDBBtn>
                                            </MDBModalBody>
                                        </MDBModal>
                                    </MDBContainer>
                                    <span>{r.likecount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
};

export default Reviews;
