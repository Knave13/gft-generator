import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase'
import 'firebase/firestore'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/home'
import GalaxyList, {GalaxyDetails} from './components/galaxy/index'
import PlanetList, {PlanetDetails} from './components/planet/index'
import StarSystemListDG, {StarSystemDetails} from './components/starSystem/index'
import TestHeader, {TestTemperature, TestAlbedo} from './components/tests/index'

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
// console.log('Start Auth') admin.initializeApp(firebase)
// firebase.auth().signInWithEmailAndPassword('test@test.com',
// 'test13').catch(function(error) {   var errorCode = error.code   var
// errorMessage = error.message   console.log(errorCode, errorMessage) })
// console.log('End Auth')

var db = firebase.firestore()

// console.log('Galaxies', galaxiesRef.docs.length) galaxiesRef.doc().set({
// name: 'Red', activeIndicator: true, starCount: 0 }).then(function(data) {
// console.log('after set')   count = galaxiesRef.get().then(function(data){
// return data.size   })   console.log(count) }) console.log(count)
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">GFT Galaxy Generator</h1>
                </header>
                <Router>
                    <Switch>
                        <PropsRoute path="/galaxy/tests/temperature" component={TestTemperature} db={db} />
                        <PropsRoute path="/galaxy/tests/albedo" component={TestAlbedo} db={db} />
                        <PropsRoute path="/galaxy/tests" component={TestHeader} db={db} />

                        <PropsRoute path="/galaxy/:id/starSystems/:star/planets/:orbit" component={PlanetDetails} db={db} />
                        <PropsRoute path="/galaxy/:id/starSystems/:star/planets" component={PlanetList} db={db} />
                        <PropsRoute path="/galaxy/:id/starSystems/:star" component={StarSystemDetails} db={db} />
                        <PropsRoute path="/galaxy/:id/starSystems" component={StarSystemListDG} db={db} />
                        <PropsRoute path="/galaxy/:id" component={GalaxyDetails} db={db} />
                        <PropsRoute path="/galaxy" component={GalaxyList} db={db} />
                        <PropsRoute path="/" component={Home} db={db} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest);
    return (React.createElement(component, finalProps));
}

const PropsRoute = ({
    component,
    ...rest
}) => {
    return (<Route
        {...rest}
        render={routeProps => {
        return renderMergedProps(component, routeProps, rest);
    }}/>);
}

export default App;
