import React from 'react';
import './Reviews.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../Common/FormsControls/FormsControls';
import { maxLength50 } from './../Helpers/Validators/Validators'
// import backspace from './img/backspace.svg'

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

const Reviews = React.memo(props => {

    const addNewReview = values => {
        if (props.isAuth == true) {
            props.onAddNewReview(values.newReview)
        }
        else {
            alert("Спочатку ввійдіть на сайт")
        }
    }

    return (
        <div className="Reviews">
            <h1>Залишайте свої відгуки тут :</h1>
            <div className="Add__Review">
                <ReviewsReduxForm onSubmit={addNewReview} />
            </div>
            {props.reviews.map(r =>
                <div className="Reviews__box">
                    <div className="Reviews__box__profile">
                        <img className="Reviews__box__avatar" src={r.img} alt="a" />
                        <div className="Reviews__box__description" >
                            <p>{r.text}</p>
                            <div className="Reviews__box__like">
                                <div onClick={() => {
                                    if (props.isAuth == true) {
                                        props.addLikeToReview(r.id)
                                    }
                                    else {
                                        alert("Спочатку ввійдіть на сайт")
                                    }
                                }} >
                                    <img src={r.like} alt="a" />
                                </div>
                                <span>{r.likecount}</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="Review__delete" onClick={() => { props.onDeleteReview(r.id) }}>
                        <img src={backspace} alt="a" />
                    </div> */}
                </div>
            )}
        </div>
    );
});

export default Reviews;
