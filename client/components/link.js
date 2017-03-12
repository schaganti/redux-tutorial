import React from 'react';

export const Link = ({active, children, onClick}) => {
    if (active) {
        return (
            <span>
                <b>{children}</b>
            </span>
        );
    }
    return (
        <a href="#" onClick={(e) => {
            e.preventDefault();
            onClick();
        }}>{children}</a>
    );

}
