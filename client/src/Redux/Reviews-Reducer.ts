import Anonim from './../Reviews/img/anonim.jpg';
import thumb from './../Reviews/img/thumb.png'

const ADD_REVIEW_TEXT = 'ADD-REVIEW-TEXT';
const DELETE_REVIEW = 'DELETE_REVIEW';
const ADD_LIKE_TO_REVIEW = 'ADD_LIKE_TO_REVIEW'

export type reviewsType = {
    id: number,
    img: string
    text: string
    like: string
    likecount: number
}

let initialState = {
    reviews: [
        { id: 1, img: Anonim, text: "Hello how are you ?", like: thumb, likecount: 1 },
        { id: 2, img: Anonim, text: "Nice, how about you ?", like: thumb, likecount: 2 },
        { id: 3, img: Anonim, text: "One more try", like: thumb, likecount: 0 },
    ] as Array<reviewsType>,
    newReviewsId: 4 as number,
    addedLikes: [] as Array<number>,
    // NewReviewsText: string as string
}

export type initialStateType = typeof initialState

const reviewReducer = (state = initialState, action: ActionsTypes): initialStateType => {

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

type ActionsTypes = addReviewActionCreatorActionType | deleteReviewActiontype | addLikeToReviewActiontype

export const addReviewActionCreator = (newReview: string): addReviewActionCreatorActionType => ({ type: ADD_REVIEW_TEXT, newReview })
type addReviewActionCreatorActionType = {
    type: typeof ADD_REVIEW_TEXT
    newReview: string
}
export const deleteReview = (reviewId: number): deleteReviewActiontype => ({ type: DELETE_REVIEW, reviewId })
type deleteReviewActiontype = {
    type: typeof DELETE_REVIEW
    reviewId: number
}
export const addLikeToReview = (likeId: number): addLikeToReviewActiontype => ({ type: ADD_LIKE_TO_REVIEW, likeId })
type addLikeToReviewActiontype = {
    type: typeof ADD_LIKE_TO_REVIEW
    likeId: number
}

export default reviewReducer


