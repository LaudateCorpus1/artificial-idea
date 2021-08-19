import React, { Component } from 'react';
import Styling from './App.module.scss';
import GetStringInput from './Input.js';
import {generateWord, generateParagraph, generateRatings} from './Generator.js';
import TextBox from './TextBox.js';
import words from './nounlist.json';
import { render } from '@testing-library/react';

//<WordPicker />
//<GetStringInput />
function App() {
  return (
    <div className={Styling.App}>

       <TextBox />
    </div>
  );
}

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

function MakeRefreshButton(props){
  return(
    <div className={Styling.refresh_button_outside}>
      <input 
        type='button' 
        className={Styling.word_refresh}
        onClick={props.onClickRefresh}>
      </input>
    </div>
  );
}

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
      <div className={Styling.word_columnn}>
        {this.renderButtons()}
        {this.renderButtons()}
        {this.renderButtons()}
        {this.renderButtons()}
        {this.renderButtons()}
      </div>
    );
  }
}

class WordPicker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      leftwordcolumn: <WordButtons onUseWord={word => this.handleClick(word)}/>,
      rightwordcolumn: <WordButtons onUseWord={word => this.handleClick(word)}/>,
      
    }
  }

  handleClick(){
    console.log(generateParagraph());
  }

  handleClickRefresh(){
    this.setState({
      leftwordcolumn: <WordButtons onUseWord={word => this.handleClick(word)}/>,
      rightwordcolumn: <WordButtons onUseWord={word => this.handleClick(word)}/>,
    });
  }

  render(){
    return(
      <div className={Styling.word_picker}>
        {this.state.leftwordcolumn}
        <MakeRefreshButton onClickRefresh={() => this.handleClickRefresh()}/>
        {this.state.rightwordcolumn}
      </div>
    );
  }
}

export default App;
