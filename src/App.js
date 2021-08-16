import React, { Component } from 'react';
import './App.css';
import GetStringInput from './Input';
import words from './nounlist.json';

function App() {
  return (
    <div className="App">
       <button type="button" onClick={() => console.log(CreateWord())}>use me!!!</button>
       <GetStringInput />
       <p>{}</p>
    </div>
  );
}

function CreateWord() {
  return(
    words['nouns'][(Math.floor(Math.random() * (words['nouns'].length)))]
  );
}

/*
class generalText extends React.Component {
  constructor(props){
    super(props);
    
  }
  
}

*/

export default App;
