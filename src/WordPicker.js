// WordPicker and all of its objects (used in letting the user pick a desired word)
import React from 'react';
import Styling from './WordPicker.module.scss';
import {generateWord} from './Generator.js';

// returns a button with a given prop as an input value
function MakeWordButton(props){
    return(
        <div className={Styling.word_button_outside}>
            <input 
                type='button'
                className={Styling.word_button}
                defaultValue={props.value}
                onClick={props.onClickWord}>
            </input>
        </div>
    );
}

// returns a refresh button to update buttons with new prop values
function MakeRefreshButton(props){
    return(
        <input 
            type='image'
            src='./white-refresh-arrow.png'
            className={Styling.refresh_button}
            onClick={props.onClickRefresh}>
        </input>
    );
}

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
            <div className={Styling.word_column}>
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
                {this.renderButtons()}
            </div>
        );
    }
}

// component that can be used to return a randomly generated word
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
            <div className={Styling.word_picker}>
                <div className={Styling.left_word_picker}>
                    <div className={Styling.left_word_picker_adjuster}>
                        {this.state.leftwordcolumn}
                    </div>
                </div>
                <MakeRefreshButton 
                    onClickRefresh={() => this.handleClickRefresh()}
                />
                <div className={Styling.right_word_picker}>
                    {this.state.rightwordcolumn}
                </div>
            </div>
        );
    }
}

export default WordPicker;