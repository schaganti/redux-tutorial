import {Component} from 'react';
import React from 'react';
import {Link} from './link';

export class FilterLink extends Component {

    componentDidMount() {
        this.store = this.props.store;
        this.unsubscribe = this.store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = this.store.getState();
        return (
            <Link active={state.visibilityFilter === props.filter} onClick={() => {
                this.store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: props.filter})
            }}>{props.children}</Link>
        );
    }
}
