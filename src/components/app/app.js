import React, { Component } from 'react';
import Cards from '../cards/cards';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <header>
          <h1><abbr title="Magic: The Gathering">MTG</abbr> Card Proxy</h1>
        </header>
        <main>
          <Cards />
        </main>
      </div>
    );
  }
}

export default App;
