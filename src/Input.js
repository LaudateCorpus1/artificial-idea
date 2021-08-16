// This js file is for user inputs, such as typing in a product to look up
import React, { Component } from 'react';
import Styling from './Input.module.scss';

class InputString extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userString: '',
        }
    }

    render() {
        return(
            <div className={Styling.navList}>
            <input type='text' className={Styling.leftSide} placeholder="Type product here"></input>
            <input type='submit' className={Styling.rightSide} placeholder="asdf"></input>
            </div>
        );
    };
}

export default InputString;