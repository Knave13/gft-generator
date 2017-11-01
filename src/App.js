import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import 'firebase/firestore'
import Galaxies from './components/galaxies'
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
var galaxiesRef = db.collection('galaxies')
Astronomics.initializeData(db, (dataLoaded) => {
  console.log('Astronomics Loaded: ', dataLoaded)
});
Astronomics.findByKey(db, 'G4V', (data) => {
   console.log('Astronomics', JSON.stringify(data, null, 2))
})
StellarData.database(db)
StellarData.stellarDataByKey('G4V', (data) => {
  console.log('Astronomics', JSON.stringify(data, null, 2))
})

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
    this.state = { "count": -1 }
    galaxiesRef.get().then(data => {
      this.setState({"count" : data.size})

      console.log(data.size)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Galaxies: {this.state.count}
        </p>
        <Galaxies 
          addStarSystem={this.addStarSystem.bind(this)}
          addAstronomicalDatra={this.addAstronomicalData.bind(this)} />
      </div>
    );
  }

  addStarSystem() {
    alert('add starsystem')
  }

  addAstronomicalData() {

  }
}

export default App;
