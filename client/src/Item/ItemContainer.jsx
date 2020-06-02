import React, { useEffect } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { getItemsFromAPI } from './../Redux/Choices-Reducer'
import { withRouter } from 'react-router-dom';
import { getIsFetching } from './../Redux/Choices-Selectors';

const ItemContainer = (props) => {

    const id = props.match.params.itemId

    useEffect(() => {
        props.getItemsFromAPI()
    }, [])

    return <>
        <Item
            item={props.item[id]}
            isFetching={props.isFetching}
        />
    </>
}

let mapStateToProps = (state) => ({
    item: state.choicesPage.item,
    isFetching: getIsFetching(state),
})

let itemURL = withRouter(ItemContainer)

export default connect(mapStateToProps, { getItemsFromAPI })(itemURL);