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

// create a timer with time * seconds of run time in order to wait for proper
// input (basically to avoid spamming of something to keep API calls down)
let checkTimer;
let checkCount = 0;
// the idea is that the last object to be chosen within a time span gets chosen 
// to be updated otherwise just return a false for an if check
/** 
 * Function to return the object from the last call 
 * in a number of calls it has gotten within a certain time span.
 * @param {number} time The time (in seconds)
 * @param {object} object A desired object to be returned
 * @return {object} object of last call after time has been reached
 * @return {bool} false if call is not the last call within the time span
*/
export async function desireLastCall(time, object){
    checkCount = checkCount + 1;
    clearTimeout(checkTimer);
    checkTimer = (resolve, reject) => setTimeout(() => {
        if(checkCount > 1){
            checkCount = checkCount - 1;
            reject();
        }
        else{
            checkCount = checkCount - 1;
            resolve(object);
        }
    }, time * 1000);
    return await new Promise((resolve, reject) => checkTimer(resolve, reject))
        .then(
            (object) => {
                return object;
        })
        .catch(
            () => {
                return false;
            }
        )
}
