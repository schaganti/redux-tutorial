import React from 'react';
import {FilterLink} from './filterLink';
export const FooterComponent = ({store}) => {
    return (
        <p>
            <b>Show:
            </b>
            <FilterLink filter="SHOW_ALL" store={store}>All</FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE" store={store}>Active</FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED" store={store}>Completed</FilterLink>
        </p>
    );
}
