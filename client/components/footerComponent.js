import React from 'react';
import {FilterLink} from './filterLink';
export const FooterComponent = () => {
    return (
        <p>
            <b>Show:
            </b>
            <FilterLink filter="SHOW_ALL">All</FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
        </p>
    );
}
