import {Component} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from './link';
import {setVisibiityFilter} from '../actions/actionCreators';

const mapStateToProps = (state, orgProps) => {
    return ({
        active: state.visibilityFilter === orgProps.filter
    });
};

const mapDispatchToProps = (dispatch, orgProps) => {
    return ({
        onClick: () => {
            dispatch(setVisibiityFilter(orgProps.filter));
        }
    });
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
