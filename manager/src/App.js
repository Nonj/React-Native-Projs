import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router'

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCfnSsUYe3zYsQd4UdfRIYqNeIC16bH0J0',
            authDomain: 'manager-a11fb.firebaseapp.com',
            databaseURL: 'https://manager-a11fb.firebaseio.com',
            projectId: 'manager-a11fb',
            storageBucket: 'manager-a11fb.appspot.com',
            messagingSenderId: '393895630489'
          };
          firebase.initializeApp(config);
    }


    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}

export default App;