import { 
    ADD_CARD, 
    ADD_DECK,
    saveDeckToStorage
} from '../actions';

export const saveDeck = store => next => action => {

    let result = next(action);

    if(action.type === ADD_CARD || action.type === ADD_DECK ) {
        console.log('Deckname', action.deckName);
        // console.log('Deck to save', store.getState()[action.deckName] );
        store.dispatch(saveDeckToStorage( store.getState()[action.deckName] ));
    }

    return result;
}