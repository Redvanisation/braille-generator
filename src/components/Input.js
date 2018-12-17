import React, { Component } from 'react';


class Input extends Component {
    render() {

        // const { callWatson } = this.props;
        // console.log(this.state)

        return (
            <div className="main">
                <h2 className="main__h2 heading-secondary">Input</h2>
                <br />
                <button className="main__record-btn" onClick={this.props.callWatson}>Record!</button>
                <button className="main__record-btn" id="stop">Stop!</button>
                
                <div className="main__input-div">bla bla bla</div>
            </div>
        );
    }
}

export default Input;