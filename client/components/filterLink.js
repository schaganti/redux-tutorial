import {Component} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from './link';

const mapStateToProps = (state, orgProps) => {
    return ({
        active: state.visibilityFilter === orgProps.filter
    });
};

const mapDispatchToProps = (dispatch, orgProps) => {
    return ({
        onClick: () => {
            dispatch({type: 'SET_VISIBILITY_FILTER', filter: orgProps.filter})
        }
    });
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
