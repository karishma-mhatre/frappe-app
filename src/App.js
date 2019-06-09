import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './Reducers'
import List from './Components/List/List';
import Favourites from './Components/Favourites/Favourites';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/common.scss';

const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Header></Header>
      <Route exact path="/" component={List}></Route>
      <Route exact path="/favourites" component={Favourites}></Route>
      </Router>
    </Provider>
  );
}

export default App;
