// This file is for generating/intearcting with boxes of text
// to get a user input
import React from 'react';
import  {generateParagraph, generateImage} from './MakeData.js';
import {MakeImage, MakeParagraph} from './MakeObject.js';
import './TextBox.scss';

// component to generate/update state of textbox objects
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
                // if the componenet updates with no word, set default objects
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
                // if there is a change of word then update 
                // objects with newly generated data
                (async () => {
                    let imagesrc = await generateImage(this.props.word);
                    let paragraphtext = await generateParagraph(this.props.word);
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
            <div className='textbox'>
                <div className='textbox-inside'>
                    <div className='textbox-word-outside'>
                        <span className='textbox-word'>
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
