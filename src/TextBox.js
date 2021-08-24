// This file is for generating/intearcting with boxes of text
import React from 'react';
import  {generateWord, generateParagraph} from './Generator.js';
import Styling from './TextBox.module.scss';

// get image to put into the custom textbox
function MakeImage(props){
    return(
        <img className={Styling.image} src='./logo512.png'/>
    );
}

// get paragraph to put into the custom textbox
function MakeParagraph(props){
    if(props.word){
        return(
            <p className={Styling.paragraph_text}>
                fart
            </p>
        );
    }
    else{
        return(
            <p className={Styling.paragraph_text}>
                Pick a word above and see what Artificial Idea gets generated!
            </p>
        );
    }
}

// longest (english)word: pneumonoultramicroscopicsilicovolcanoconiosis
// rendering and returning of the textbox component
class TextBox extends React.Component{
    render(){
        return(
            <div className={Styling.textbox}>
                <div className={Styling.textbox_inside}>
                    <div className={Styling.textbox_word_outside}>
                        <span className={Styling.textbox_word}>
                            {this.props.word}
                        </span>
                    </div>
                    <MakeImage word={this.props.word}/>
                    <MakeParagraph word={this.props.word}/>
                </div>
            </div>
        );
    }
}

export default TextBox;