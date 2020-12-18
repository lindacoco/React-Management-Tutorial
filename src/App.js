import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} lat="logo" />
        <h2>management system</h2>
          
      </div>
    );
  }
}

