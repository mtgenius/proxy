import React from 'react';
import Cards from '../cards/cards';
import Counter from '../counter/counter';
import './app.scss';

export default class App extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Magic: The Gathering Card Proxies</h1>
          <Counter />
        </header>
        <main>
          <Cards />
        </main>
      </React.Fragment>
    )
  }
}
