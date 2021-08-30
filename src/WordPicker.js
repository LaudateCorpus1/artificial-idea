// WordPicker and all of its components (used in letting the user pick a desired word)
import React from 'react';
import './WordPicker.scss';
import {generateWord} from './MakeData.js';
import {MakeWordButton, MakeRefreshButton} from './MakeObject.js';

// render & returns a word column with approx 5 buttons, each with a word value
class WordButtons extends React.Component{
    renderButtons(){
        let word = generateWord() + ' ' + generateWord();
        return(
            <MakeWordButton 
                value={word}
                onClickWord={() => this.props.onUseWord(word)}
            />
        );
    }
  
    render(){
        return(
            <div className='word-column'>
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
            </div>
        );
    }
}

// component that can be used to return randomly 
// generated words for use by a user
class WordPicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            /* callbackObject sends the generated word back to the parent component*/
            leftwordcolumn: <WordButtons 
                                onUseWord={word => this.props.callbackObject(word)}
                            />,
            rightwordcolumn: <WordButtons 
                                onUseWord={word => this.props.callbackObject(word)}
                            />, 
        }
    }
  
    // handles MakeRefreshButton click and refreshes words in buttons
    handleClickRefresh = () => {
        this.setState({
            leftwordcolumn: <WordButtons 
                                onUseWord={word => this.props.callbackObject(word)}
                            />,
            rightwordcolumn: <WordButtons 
                                onUseWord={word => this.props.callbackObject(word)}
                            />,
        });
    }
  
    render(){
        return(
            <div className='word-picker'>
                <div className='left-word-picker'>
                    <div className='left-word-picker-adjuster'>
                        {this.state.leftwordcolumn}
                    </div>
                </div>
                <MakeRefreshButton 
                    onClickRefresh={() => this.handleClickRefresh()}
                />
                <div className='right-word-picker'>
                    {this.state.rightwordcolumn}
                </div>
            </div>
        );
    }
}

export default WordPicker;