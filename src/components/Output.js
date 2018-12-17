import React, { Component } from 'react';


class Output extends Component {
    render() {
        return (
            <div className="main">
                <h2 className="main__h2 heading-secondary">Output</h2>
                <div className="main__output">{this.props.braille}{console.log(this.props.braille)}</div>
            </div>
        );
    }
}

export default Output;