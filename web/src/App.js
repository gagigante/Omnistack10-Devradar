import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Main from './pages/Main';
import EditItem from './pages/EditItem';

import './css/global.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/edit/:id' component={EditItem} />
      </Switch>  
    </Router>
  );
}

export default App;
