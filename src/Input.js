// This js file is for user inputs, such as typing in a product to look up
import React from 'react';
import './Input.scss';

// component to return an input string from the user as a callback
class InputString extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userString: '',
        }
    }

    render() {
        return(
            <div className='navlist'>
                <form onSubmit={(event) => {event.preventDefault()}}>
                    <input 
                        type='text' 
                        className='leftside' 
                        onChange={(event) => this.setState({userString: event.target.value})} 
                        maxLength='64' 
                        placeholder="Type idea here"
                    >
                    </input>
                    <button 
                        className='rightside' 
                        onClick={() => this.props.callbackObject(this.state.userString)}
                    >
                        Generate
                    </button>
                </form>
            </div>
        );
    };
}

export default InputString;