import React, { Component } from 'react';
import Header from './components/Layout/Header';
import FormHandler from './components/FormHandler';
import User from './components/User';
import Footer from './components/Layout/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FormHandler />
        <User />
        <Footer />
      </div>
    );
  }
}

export default App;
