export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

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
