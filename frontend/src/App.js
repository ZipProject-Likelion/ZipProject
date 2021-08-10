import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Curations from './components/pages/Curations';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CurationAdd from './components/pages/CurationAdd';
import itemAdd from './components/pages/ItemAdd';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/curations' component={Curations} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/curation-add' component={CurationAdd} />
          <Route path='/item-add' component={itemAdd} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
