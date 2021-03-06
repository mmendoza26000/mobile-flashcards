import { fetchDecks, submitDeck } from '../utils/api'

export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const GET_ALL_DECKS = 'GET_ALL_DECKS';


export function saveDeckToStorage(deck) {
    return dispatch => {
        submitDeck(deck)
    }
}

export function getDecks() {    
    return dispatch => {
        fetchDecks()
            .then( decks =>
                dispatch(getAllDecks(decks))
            )
    }
}



export function getAllDecks(decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function addDeck(deckName){
    return {
        type: ADD_DECK,
        deckName
    }
}

export function addQuestion(deckName, question){
    return {
        type: ADD_CARD,
        deckName,
        question
    }
}
