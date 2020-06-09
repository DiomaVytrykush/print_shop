import Anonim from './../Reviews/img/anonim.jpg';
import thumb from './../Reviews/img/thumb.png'

const ADD_REVIEW_TEXT = 'ADD-REVIEW-TEXT';
const DELETE_REVIEW = 'DELETE_REVIEW';
const ADD_LIKE_TO_REVIEW = 'ADD_LIKE_TO_REVIEW'

let initialState = {
    reviews: [
        { id: 1, img: Anonim, text: "Hello how are you ?", like: thumb, likecount: 1 },
        { id: 2, img: Anonim, text: "Nice, how about you ?", like: thumb, likecount: 2 },
        { id: 2, img: Anonim, text: "One more try", like: thumb, likecount: 0 },
    ],
    newReviewsId: 4,
    addedLikes: []
}

const reviewReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_REVIEW_TEXT:
            let newText = {
                id: state.newReviewsId++,
                img: Anonim,
                text: action.newReview,
                like: thumb,
                likecount: 0,
            };
            return {
                ...state,
                reviews: [...state.reviews, newText],
            }
        case DELETE_REVIEW:
            return {
                ...state,
                reviews: state.reviews.filter(r => r.id !== action.reviewId)
            }
        case ADD_LIKE_TO_REVIEW:
            return {
                ...state,
                reviews: state.reviews.map(item => {
                    if (action.likeId === item.id) {
                        return { ...item, likecount: ++item.likecount }
                    }
                    return item
                })

            }
        default:
            return state;
    }
}

export const addReviewActionCreator = (newReview) => ({ type: ADD_REVIEW_TEXT, newReview })
export const deleteReview = (reviewId) => ({ type: DELETE_REVIEW, reviewId })
export const addLikeToReview = (likeId) => ({ type: ADD_LIKE_TO_REVIEW, likeId })

export default reviewReducer


