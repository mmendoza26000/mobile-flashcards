import {ADD_CARD, ADD_DECK} from '../actions';

const decksInitialState = {
    
    React: {
        title: 'React',
        questions: [
        {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
        },
        {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
        }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
        {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
        ]
    }
}

export function decks(state = decksInitialState, action){
    switch(action.type){
        case ADD_DECK:

        case ADD_CARD:

        default:
            return state;
    }
}