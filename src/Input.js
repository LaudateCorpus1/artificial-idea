import React, { Component } from 'react';
import styling from './Input.module.scss';

class InputString extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userString: '',
        }
    }

    render() {
        return(
            <form>
                <div className={styling.navList}>
                <input type='text' className={styling.leftSide} placeholder="Type product here"></input>
                <input type='submit' className={styling.rightSide} placeholder="asdf"></input>
                </div>
            </form>
        );
    };
}

export default InputString;