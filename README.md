# MyReads App

This is the React App "mobile-flashcards" developed for Udacity's React Nanodegree, by Manuel Mendoza (mmendoza26000@gmail.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

In order to use the App in this repository you must have in your computer:

```
git (download from https://git-scm.com/)
```

and 
```
yarn (download from https://yarnpkg.com)
```


### Installing

To install this app in your computer,

clone the repository

```
git clone https://github.com/mmendoza26000/mobile-flashcards.git
```

'cd' into the new directory, and install dependencies with yarn

```
yarn install
```

Start the server with:
```
yarn start
```

### Running the App

Once "yarn start" is ready, follow the instructions on the screen to open the app in a device or an emulator:

```
 › Press a to open Android device or emulator, or i to open iOS emulator.
 › Press q to display QR code.
 › Press r to restart packager, or R to restart packager and clear cache.
 › Press d to toggle development mode. (current mode: development)
```

### Platforms tested
All tests where performed on iOS and Android emulators:

- Android: Nexus 5X, 1080x1920:420dpi, API 23, Android 6.0.
- iOS: iPhone 6, iOS 9.2

Virtual devices are not the most new, but due to work and time constraints couldn't risk updating the computer and breaking something for other projects.
However, all development is very standard and should work on newer versions as well.


## Technical comments

- App includes two default decks, those shown in section “Data” of the project details. Any changes made to the default decks will be saved to AsynStorage.

- <Button/> is a reusable component used for all buttons in the app

- The app uses Redux for state management

- After adding a new deck, a reset is issued to the navigator using a NavigationAction, in order to allow the user to go to the list of decks when he touches the back button in the header, otherwise the app will navigate to the “New Deck View”.

- All Quiz functionality is contained in QuizView component
regarding saving changes to AsyncStorage, I’m using only the function “getDecks" recommend as a tip in the project details. Since the state is managed using Redux, the reducer manages all the adding decks and adding questions functionality, and when there is a change, using a middleware in redux saves automatically the affected deck, whether it is a new one or an old one with a new question. Also, since the decks are all cached in the redux store, there is no need for a “getDeck” method accessing AsyncStorage, this job is done in the mapStateToProps function of the component that requieres it.

- NOTIFICATIONS: 
on iOS emulator Permissions.NOTIFICATIONS returns ‘undetermined’, even though permission has been granted. On Android works as expected.

You can test local notifications in a faster way by commenting and uncommenting code in /utils/notifications.js and /components/Root.js. Out of the box the code works as requested in the rubric, commenting and uncommenting code in those files make the notification fire one minute after the app es loaded if no quiz is completed in that time. To prevent this, complete a quiz in under a minute :)   (notification will fire one minute after the quiz is completed).  Search for the string "Notification for one minute ahead” and comment and uncomment the code for ‘minute’or for ‘day’. Just remember to comment/uncomment both files.


