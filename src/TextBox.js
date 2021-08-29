// This file is for generating/intearcting with boxes of text
import React from 'react';
import  {generateParagraph, generateImage} from './MakeData.js';
import Styling from './TextBox.module.scss';

// get image to put into the custom textbox
function MakeImage(props){
    //console.log('image got here - ' + props.image);
    if(props.image){
        return(
            <img className={Styling.image} src={props.image}/>
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
    //console.log('paragraph got here - ' + props.paragraph);
    if(props.paragraph){
        return(
            <p className={Styling.paragraph_text}>
                {props.paragraph}
            </p>
        );
    }
    else{
        return(
            <p className={Styling.paragraph_text}>
                Oh No!!! Something went wrong!!!
            </p>
        );
    }
}

class TextBoxItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            word: this.props.word,
            image: <MakeImage 
                image='./logo512.png'
            />,
            paragraph: <MakeParagraph 
                paragraph='Pick a word above and see what 
                Artificial Idea gets generated!'
            />,
        }
    }

    componentDidUpdate(){
        if(this.state.word !== this.props.word){
            if(this.props.word === ''){
                this.setState({
                    word: this.props.word,
                    image: <MakeImage 
                        image='./logo512.png'
                    />,
                    paragraph: <MakeParagraph 
                        paragraph='Pick a word above and see what 
                        Artificial Idea gets generated!'
                    />,
                })
            }
            else{
                (async () => {
                    let imagesrc = await generateImage(this.props.word)
                        .then(
                            (result) => {
                                return result;
                        })
                        .catch(
                            () => {
                                return false;
                        })
                    let paragraphtext = await generateParagraph(this.props.word)
                        .then(
                            (result) => {
                                return result;
                        })
                        .catch(
                            () => {
                                return false;
                        })
                    this.setState({
                        word: this.props.word,
                        image: <MakeImage
                            image={imagesrc}
                        />,
                        paragraph: <MakeParagraph
                            paragraph={paragraphtext}
                        />,
                    })
                })()
            }
        }
    }

    render(){
        return(
            <div>
            {this.state.image}
            {this.state.paragraph}
            </div>
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
                    <TextBoxItems word={this.props.word}/>
                </div>
            </div>
        );
    }
}

export default TextBox;
