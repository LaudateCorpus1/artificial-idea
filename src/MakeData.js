// This file is for getting words, text, and images using strings via 
// DeepAI API and some custom methods
import Words from './nounlist.json';
import {deepaikey} from './keys.js';

const deepai = require('deepai');
deepai.setApiKey(deepaikey);

// returns a word gotten from a list of nouns from a json file
export function generateWord(){
    return(
        Words['nouns'][(Math.floor(Math.random() * (Words['nouns'].length)))]
    );
}

// uses a Promise async/await to help in generating a paragraph of text
export async function generateParagraph(word){
    var resp = await deepai.callStandardApi("text-generator", {
        text: word,
    }).then(
        (resp) => {
            return resp.output;
        }
    )
    .catch(
        () => {
            return false;
        }
    )
    //console.log(resp);
    return resp;
} 

// uses a Promise async/await to help in generating an image
export async function generateImage(word){
    var resp = await deepai.callStandardApi("text2img", {
        text: word,
    }).then(
        (resp) => {
            return resp.output_url;
        }
    )
    .catch(
        () => {
            return false;
        }
    )
    //console.log(resp);
    return resp;
}

