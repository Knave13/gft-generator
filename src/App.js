import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import 'firebase/firestore'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './components/home'
import Astronomics from './data/astronomics'
import StellarData from './data/stellarData'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBD4Nz8GMhcvGm5QThjnn2cQBjXTFPBP30",
  authDomain: "gft-generator.firebaseapp.com",
  databaseURL: "https://gft-generator.firebaseio.com",
  projectId: "gft-generator",
  storageBucket: "gft-generator.appspot.com",
  messagingSenderId: "341627566624"
};
firebase.initializeApp(config);
//console.log('Start Auth')
//admin.initializeApp(firebase)
// firebase.auth().signInWithEmailAndPassword('test@test.com', 'test13').catch(function(error) {
//   var errorCode = error.code
//   var errorMessage = error.message
//   console.log(errorCode, errorMessage)
// })
// console.log('End Auth')

var db = firebase.firestore()
Astronomics.initializeData(db, (dataLoaded) => {
  console.log('Astronomics Loaded: ', dataLoaded)
});
// Astronomics.findByKey(db, 'G4V', (data) => {
//    console.log('Astronomics', JSON.stringify(data, null, 2))
// })
StellarData.database(db)
// StellarData.stellarDataByKey('G4V', (data) => {
//   console.log('Astronomics', JSON.stringify(data, null, 2))
// })

//console.log('Galaxies', galaxiesRef.docs.length)
// galaxiesRef.doc().set({
//   name: 'Red', activeIndicator: true, starCount: 0
// }).then(function(data) {
//   console.log('after set')
//   count = galaxiesRef.get().then(function(data){
//     return data.size
//   })
//   console.log(count)
// })



//console.log(count)
class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <PropsRoute path="/" component={Home} db={db} />
      </Router>
      </div>
    )
  }

}

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

export default App;
