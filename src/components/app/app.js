import React from 'react';
import Cards from '../cards/cards';
import Counter from '../counter/counter';
import './app.scss';

/*
No ReactN demo
*/

const App = () =>
  <>
    <header>
      <h1>Magic: The Gathering Card Proxies</h1>
      <Counter />
    </header>
    <main>
      <Cards />
    </main>
  </>;

export default App;
