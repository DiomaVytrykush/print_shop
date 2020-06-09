import Reviews from './Reviews';
import { addReviewActionCreator, deleteReview, addLikeToReview} from '../Redux/Reviews-Reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        reviews: state.reviewsPage.reviews,
        NewReviewsText: state.reviewsPage.NewReviewsText,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddNewReview: (newReview) => {
            dispatch(addReviewActionCreator(newReview))
        },
        onDeleteReview: (reviewId) => {
            dispatch(deleteReview(reviewId))
        },
        addLikeToReview : (like) => {
            dispatch(addLikeToReview(like))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Reviews);


