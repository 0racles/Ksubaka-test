import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import Header from './components/common/Header';
import Home from './components/containers/Home/index';
import MovieDetails from './components/MovieDetails';
import { showResultAction } from './redux/Actions/resultsAction';
import './app.css';

const store = configureStore();
store.dispatch(showResultAction())

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <Header />
            <Switch>
              <Route exact path='/'component={Home} /> 
              <Route path='/movies' component={MovieDetails} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
