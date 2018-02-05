import { AsyncStorage } from 'react-native';

const UDACICARDS_STORAGE_KEY = 'UdaciCards:mmendoza26000';

export function fetchDecks(){
    // return AsyncStorage.removeItem(UDACICARDS_STORAGE_KEY)
        

    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
        .then( decks => {
            return JSON.parse(decks);
        })
}

export function submitDeck( deck ) {
    return AsyncStorage.mergeItem(UDACICARDS_STORAGE_KEY, JSON.stringify({
        [deck.title]: deck
    }))
}