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
            <div className={Styling.navlist}>
                <input 
                    type='text' 
                    className={Styling.leftside} 
                    onChange={(event) => this.setState({userString: event.target.value})} 
                    maxLength='64' 
                    placeholder="Type idea here"
                >
                </input>
                <button 
                    className={Styling.rightside} 
                    onClick={() => this.props.callbackObject(this.state.userString)}
                >
                    Generate
                </button>
            </div>
        );
    };
}

export default InputString;