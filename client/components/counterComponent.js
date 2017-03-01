import
React
from 'react';

export const CounterComponent = React.createClass({

    render: function() {
        return ( <
            div >
            <
            h1 > {
                this.props.value
            } < /h1> <
            button onClick = {
                this.props.increment
            } > + < /button> <
            button onClick = {
                this.props.decrement
            } > - < /button> < /
            div >
        );
    }

});
