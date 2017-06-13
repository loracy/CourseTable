
import React, {Component} from 'react';
import { DrawerRouter } from './Router';
import * as firebase from 'firebase';


class App extends Component {
  
componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBjNFf-bzV4OP_h2k2IOz2GsqEvgsjCMhg",
      authDomain: "app-wk12.firebaseapp.com",
      databaseURL: "https://app-wk12.firebaseio.com",
      projectId: "app-wk12",
      storageBucket: "app-wk12.appspot.com",
      messagingSenderId: "135531379667"
    });
  }
  
  render() {
      return(
            <DrawerRouter />
      );
  }      
}

export default App;
