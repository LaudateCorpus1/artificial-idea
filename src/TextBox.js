// This file is for generating/intearcting with boxes of text
// to get a user input
import React from 'react';
import  {desireLastCall, generateImage, generateParagraph} from './MakeData.js';
import {MakeImage, MakeParagraph, MakeRefreshButton} from './MakeObject.js';
import './TextBox.scss';
import bagicon from './assets/logo512.png';

const defaultparagraph = 'Pick an idea above and see what Artificial Idea gets generated!';
// component to generate/update state of textbox objects
class TextBoxItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            refresh: false,
            word: this.props.word,
            image: <MakeImage 
                image={bagicon}
            />,
            paragraph: <MakeParagraph 
                paragraph={defaultparagraph}
            />,
        }
    }

    componentDidUpdate(){
        // if there is a desire to refresh the state
        if(this.state.refresh){
            //console.log('will commit to update');
            // if the componenet updates with no idea, set default objects
            if(this.props.word === ''){
                this.setState({
                    refresh: false,
                    image: <MakeImage 
                        image={bagicon}
                    />,
                    paragraph: <MakeParagraph 
                        paragraph={defaultparagraph}
                    />,
                })
            }
            else{
                // else there is a change of idea, so update 
                // objects with newly generated data 
                (async () => {
                    let lastcall = await desireLastCall(3, this.state.word);
                    if(lastcall){
                        //console.log('chosen word: ' + lastcall);
                        let imagesrc = await generateImage(this.state.word);
                        let paragraphtext = await generateParagraph(this.state.word);
                        this.setState({
                            refresh: false,
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
        // if there has been a change in idea(word)
        if(this.state.word !== this.props.word){
            this.setState({
                refresh: true,
                word: this.props.word
            })
        }
    }

    // if the user uses the refresh button, generate new info for the idea at hand
    render(){
        return(
            <div>
                <div className='textbox-refresh-outside'>
                    <div className='textbox-refresh'>
                        <MakeRefreshButton 
                            active={this.state.refresh}
                            onClickRefresh={
                                () => {this.setState({
                                    refresh : true,
                                })}
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
// rendering and returning of the textbox component on users choice of idea
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
