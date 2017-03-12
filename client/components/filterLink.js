import React from 'react';

export const FilterLink = ({filter, children, activeFilter, onFilter}) => {
    if (filter === activeFilter) {
        return (
            <span>
                <b>{children}</b>
            </span>
        );
    } else {
        return (
            <a href="#" onClick={e => {
                e.preventDefault();
                onFilter(filter);
            }}>{children}</a>
        );
    }
};
