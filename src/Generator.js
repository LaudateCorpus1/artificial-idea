// This file is for generating text, ratings, and images using strings via 
// DeepAI API and some custom methods
import Words from './nounlist.json';
//<!--OpenAI CDN library-->
//<!--<script src="https://cdnjs.deepai.org/deepai.min.js"></script>-->

export function generateWord(){
    return(
        Words['nouns'][(Math.floor(Math.random() * (Words['nouns'].length)))]
    );
}

export function generateParagraph(){
    return(
        "Filler text is the best text to possibly have! Filler text is the best text to possibly have! Filler text is the best text to possibly have! Filler text is the best text to possibly have! Filler text is the best text to possibly have! "
    );
}

export function generateRatings(){
    Math.std();
}
