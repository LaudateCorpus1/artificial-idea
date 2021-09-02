// This file is for generating/intearcting with boxes of text
// to get a user input
import React from 'react';
import  {desireLastCall, generateImage, generateParagraph} from './MakeData.js';
import {MakeImage, MakeParagraph, MakeRefreshButton} from './MakeObject.js';
import './TextBox.scss';

// component to generate/update state of textbox objects
class TextBoxItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            refresh: false,
            word: this.props.word,
            image: <MakeImage 
                image='./logo512.png'
            />,
            paragraph: <MakeParagraph 
                paragraph='Pick an idea above and see what 
                Artificial Idea gets generated!'
            />,
        }
    }

    componentDidUpdate(){
        if(this.state.word !== this.props.word || this.state.refresh){
            //console.log('will commit to update');
            // if the componenet updates with no idea, set default objects
            if(this.props.word === ''){
                this.setState({
                    refresh: false,
                    word: this.props.word,
                    image: <MakeImage 
                        image='./logo512.png'
                    />,
                    paragraph: <MakeParagraph 
                        paragraph='Pick an idea above and see what 
                        Artificial Idea gets generated!'
                    />,
                })
            }
            else{
                // else there is a change of idea, so update 
                // objects with newly generated data 
                (async () => {
                    let lastcall = await desireLastCall(3, this.props.word);
                    if(lastcall){
                        let imagesrc = await generateImage(this.props.word);
                        let paragraphtext = await generateParagraph(this.props.word);
                        this.setState({
                            refresh: false,
                            word: this.props.word,
                            image: <MakeImage
                                image={imagesrc}
                            />,
                            paragraph: <MakeParagraph
                                paragraph={paragraphtext}
                            />,
                        })
                    }
                })()
            }
        }
    }

    // if the user uses the refresh button, generate new info for the idea at hand
    render(){
        return(
            <div>
                <div className='textbox-refresh-outside'>
                    <div className='textbox-refresh'>
                        <MakeRefreshButton onClickRefresh={
                                () => {this.setState({refresh : true})}
                            }
                        />
                    </div>
                </div>
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
                        <div className='textbox-word'>
                            {this.props.word}
                        </div>
                    </div>
                    <TextBoxItems word={this.props.word}/>
                </div>
            </div>
        );
    }
}

export default TextBox;
