// This file is for generating text, ratings, and images using strings via 
// DeepAI API and some custom methods
import Words from './nounlist.json';
//<!--OpenAI CDN library-->
//<!--<script src="https://cdnjs.deepai.org/deepai.min.js"></script>-->

// returns a word gotten from a list of nouns from a json file
export function generateWord(){
    return(
        Words['nouns'][(Math.floor(Math.random() * (Words['nouns'].length)))]
    );
}

// generates a paragraph of text
export function generateParagraph(){
    return(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
}

// generates an image
export function generateImage(){
    
}
