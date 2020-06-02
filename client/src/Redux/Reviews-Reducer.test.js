import Yoda from './../Reviews/img/yoda.jpg';
import thumb from './../Reviews/img/thumb.png'
import reviewReducer, { addReviewActionCreator, deleteReview } from './Reviews-Reducer';


let state = {
    reviews: [
        { id: 1, img: Yoda, text: "Hello how are you ?", like: thumb, likecount: 1 },
        { id: 2, img: Yoda, text: "Okay, how about you ?", like: thumb, likecount: 1 },
        { id: 3, img: Yoda, text: "Okay, how about you ?", like: thumb, likecount: 1 },
    ],
}

it('length increment', () => {

    // 1. test data
    let action = addReviewActionCreator('new review');


    // 2.action
    let newState = reviewReducer(state, action)

    // 3.expectation
    expect(newState.reviews.length).toBe(4)

});

it('review text correct', () => {

    // 1. test data
    let action = addReviewActionCreator('new review');


    // 2.action
    let newState = reviewReducer(state, action)

    // 3.expectation
    expect(newState.reviews[3].text).toBe('new review')

});

it('delete review', () => {

    // 1. test data
    let action = deleteReview(1);


    // 2.action
    let newState = reviewReducer(state, action)

    // 3.expectation
    expect(newState.reviews.length).toBe(2)

});