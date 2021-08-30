// used in returning an html object of a specific type for use with
// react components
import React from 'react';
import './MakeObject.scss';

// returns a button with a given prop as an input value
export function MakeWordButton(props){
    return(
        <div className='word-button-outside'>
            <input 
                type='button'
                className='word-button'
                defaultValue={props.value}
                onClick={props.onClickWord}>
            </input>
        </div>
    );
}

// returns a refresh button to update buttons with new prop values
export function MakeRefreshButton(props){
    return(
        <input 
            type='image'
            alt='refresh image'
            src='./white-refresh-arrow.png'
            className='refresh-button'
            onClick={props.onClickRefresh}>
        </input>
    );
}

// returns image to put into the custom textbox
export function MakeImage(props){
    //console.log('image got here - ' + props.image);
    if(props.image){
        return(
            <img className='image' src={props.image} alt='mainimg'/>
        );
    }
    else{
        return(
            <img className='image' src='./cancel-mark.png' alt='mainimg'/>
        );
    }
}

// returns paragraph to put into the custom textbox
export function MakeParagraph(props){
    //console.log('paragraph got here - ' + props.paragraph);
    if(props.paragraph){
        return(
            <p className='paragraph-text'>
                {props.paragraph}
            </p>
        );
    }
    else{
        return(
            <p className='paragraph-text'>
                Oh No!!! Something went wrong!!!
            </p>
        );
    }
}