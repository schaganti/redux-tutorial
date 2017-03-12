import React from 'react';
import {FilterLink} from './filterLink';
export const FilterComponent = ({visibilityFilter, filter}) => {
    return (
        <p>
            <b>Show:
            </b>
            <FilterLink filter="SHOW_ALL" activeFilter={visibilityFilter} onFilter={filter}>All</FilterLink>
            {' '}
            <FilterLink filter="SHOW_ACTIVE" activeFilter={visibilityFilter} onFilter={filter}>Active</FilterLink>
            {' '}
            <FilterLink filter="SHOW_COMPLETED" activeFilter={visibilityFilter} onFilter={filter}>Completed</FilterLink>
        </p>
    );
}
