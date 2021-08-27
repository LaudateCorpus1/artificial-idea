// This file is for generating/intearcting with boxes of text
import React from 'react';
import  {generateParagraph, generateImage} from './Generator.js';
import Styling from './TextBox.module.scss';

// get image to put into the custom textbox
function MakeImage(props){
    if(props.word){
        return(
            <img className={Styling.image} src='./test512.png'/>
        );
    }
    else{
        return(
            <img className={Styling.image} src='./cancel-mark.png'/>
        );
    }
}

// get paragraph to put into the custom textbox
function MakeParagraph(props){
    console.log('word got here - ' + props.word);
    if(props.word){
        generateParagraph().then(
            function(result){
                console.log(result);
                return(
                    <p className={Styling.paragraph_text}>
                        
                    </p>
                );
            }
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

/*
function WaitTilExists(props){
    console.log('started');
    let count = 0;
    let finished = false;
    let time = setTimeout(() => {
        console.log('timeout: ' + finished);
        finished = true;

    }, 3000);
    let intv = setInterval(() => {
        count = count + 1;
        console.log('interval: ' + finished);
        //console.log(count);
        if(finished){
            clearInterval(intv);
            clearTimeout(time);
            console.log('time met, give up');
        }
    }, 500);
}

class TextBoxItems extends React.Component{

    renderImage(props){
        console.log('renderimage')
        generateParagraph().then(
            function(result){
                console.log(result);
                return(
                    <MakeParagraph word={props.word}/>
                );
            }
        );
        console.log('the iamge time');
    }

    renderParagraph(props){
        return(
            <MakeParagraph word={this.props.word}/>
        );

        //generateImage(props.word);
        console.log('propsparagarph')
    }

    render(){
        return(
            <div>
            {this.renderImage(this.props.word)}
            {this.renderParagraph(this.props.word)}
            </div>
        );
    }

}
*/