import React, { useEffect } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { getItemsFromAPI } from '../Redux/Choices-Reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppStateType } from '../Redux/Redux-Store';

type OwnPropsType = RouteComponentProps<any>

type mapStateToPropsType = {
    item: Array<any>
}

type mapDispatchToPropsType = {
    getItemsFromAPI: () => void
}

type propsType = OwnPropsType & mapStateToPropsType & mapDispatchToPropsType

const ItemContainer = (props: propsType) => {

    const id = props.match.params.itemId

    useEffect(() => {
        props.getItemsFromAPI()
    }, [])

    return <>
        <Item
            item={props.item[id]}
        />
    </>
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    item: state.choicesPage.item,
})

let itemURL = withRouter(ItemContainer)

export default connect<mapStateToPropsType, mapDispatchToPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, { getItemsFromAPI })(itemURL);