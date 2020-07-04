import Reviews from './Reviews';
import { addReviewActionCreator, deleteReview, addLikeToReview, reviewsType } from '../Redux/Reviews-Reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../Redux/Redux-Store'

type mapStateToPropsType = {
    reviews: Array<reviewsType>
    isAuth: boolean
}
type mapDispatchToPropsType = {
    onAddNewReview: (newReview: string) => void
    onDeleteReview: (reviewId: number) => void
    addLikeToReview: (likeId: number) => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        reviews: state.reviewsPage.reviews,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        onAddNewReview: (newReview) => {
            dispatch(addReviewActionCreator(newReview))
        },
        onDeleteReview: (reviewId) => {
            dispatch(deleteReview(reviewId))
        },
        addLikeToReview: (likeId) => {
            dispatch(addLikeToReview(likeId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Reviews);


