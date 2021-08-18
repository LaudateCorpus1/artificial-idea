// This file is for generating/intearcting with boxes of text
import React from 'react';
import  {generateWord, generateParagraph, generateRatings} from './Generator.js';
import Styling from './TextBox.module.scss';

export function returnWord(props){
    return(
        <span>{props.value}</span>
    );
}

export function returnParagraph(props){
    return(
        <p>{props.paragraph}</p>
    );
}
