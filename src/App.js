import React, { Component } from 'react';
import Styling from './App.module.scss';
import WordPicker from './WordPicker.js';
import Input from './Input.js';
import TextBox from './TextBox.js';
import { render } from '@testing-library/react';

//<TextBox word={"booglola"}/>
//<GetStringInput />
function App() {
  return (
    <div className={Styling.App}>
      <ArtificialIdea/>

    </div>
  );
}

class ArtificialIdea extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        word: '',
      }
  }

  render(){
    return(
      <div>
        <div className={Styling.wordpicker}>
          <WordPicker 
            callbackObject={word => this.setState({word: word})}
          />
        </div>
        <div className={Styling.input}>
          <Input 
            callbackObject={userString => this.setState({word: userString})}
          />
        </div>
        <div className={Styling.textbox}>
          <TextBox 
            word={this.state.word}
          />
        </div>
      </div>
    );
  }
}

export default App;
