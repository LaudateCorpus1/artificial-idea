// This file is for generating/intearcting with boxes of text
import React, {Component} from 'react';
import  {generateWord, generateParagraph, generateRatings} from './Generator.js';
import Styling from './TextBox.module.scss';

function MakeImage(props){
    return(
        <img className={Styling.image} src='./test512.png'>
        </img>
    );
}

function MakeParagraph(props){
    return(
        <p className={Styling.paragraph_text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
    );
}
//pneumonoultramicroscopicsilicovolcanoconiosis
class TextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: 'pneumonoultramicroscopicsilicovolcanoconiosis',
        }
    }

    render(){
        return(
            <div className={Styling.textbox}>
                <div className={Styling.textbox_inside}>
                    <div className={Styling.textbox_word_outside}>
                        <span className={Styling.textbox_word}>{this.state.word}</span>
                    </div>
                    <MakeImage/>
                    <MakeParagraph/>
                </div>
            </div>
        );
    }
}

export default TextBox;