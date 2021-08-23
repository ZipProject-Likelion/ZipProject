import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Curations from './components/pages/Curations';
import ProductCategory from './components/pages/ProductCategory';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import CurationAdd3 from './components/pages/CurationAdd3';
import CurationDetail from './components/pages/CurationDetail';
import ProductDetail from './components/pages/ProductDetail';
import itemAdd from './components/pages/ItemAdd';
import Signin from './components/pages/Signin';
import Profile from './components/pages/Profile';
import axios from 'axios';


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
          <Route path='/curation-add' component={CurationAdd3} />
          <Route path='/curation-detail/:id' component={CurationDetail} />
          <Route path='/product-category/:category' component={ProductCategory} />
          <Route path='/product-detail/:id' component={ProductDetail} />
          <Route path='/item-add' component={itemAdd} />
          <Route path='/sign-in' component={Signin} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
