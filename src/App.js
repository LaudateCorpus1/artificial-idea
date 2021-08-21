import React, { Component } from 'react';
import Styling from './App.module.scss';
import GetStringInput from './Input.js';
import {generateWord, generateParagraph, generateRatings} from './Generator.js';
import TextBox from './TextBox.js';
import WordPicker from './WordPicker.js';
import { render } from '@testing-library/react';

//<TextBox word={"booglola"}/>
//<GetStringInput />
function App() {
  return (
    <div className={Styling.App}>
       <WordPicker />

    </div>
  );
}

export default App;
