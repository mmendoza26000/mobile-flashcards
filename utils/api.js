import { AsyncStorage } from 'react-native';

const UDACICARDS_STORAGE_KEY = 'UdaciCards:mmendoza26000';

export function fetchDecks(){
    return AsyncStorage.getItem(UDACICARDS_STORAGE_KEY)
        .then( decks => decks )
}