import React, { Component } from 'react';
import Header from './components/Layout/Header';
import FormHandler from './components/FormHandler';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FormHandler />
      </div>
    );
  }
}

export default App;
