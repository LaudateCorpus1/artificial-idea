// main app js to hold overall react app

import React from 'react';
import WordPicker from './WordPicker.js';
import Input from './Input.js';
import TextBox from './TextBox.js';
import './App.scss';

// return app
function App() {
  return (
    <div className='App'>
      <ArtificialIdea/>
    </div>
  );
}

// component used to set up overall artificial idea app
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
        <div className='artfidea-wordpicker'>
          <WordPicker 
            callbackObject={word => this.setState({word: word})}
          />
        </div>
        <div className='artfidea-input'>
          <Input 
            callbackObject={userString => this.setState({word: userString})}
          />
        </div>
        <div className='artfidea-textbox'>
          <TextBox 
            word={this.state.word}
          />
        </div>
      </div>
    );
  }
}

export default App;
