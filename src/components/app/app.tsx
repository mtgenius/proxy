import React, { ReactElement } from 'react';
import { Cards, Input } from '..';
import './app.scss';

export default function App(): ReactElement {
  const [input, setInput] = React.useState<string>('');
  const [showInput, setShowInput] = React.useState<boolean>(true);

  const handleCardsClose = React.useCallback((): void => {
    setShowInput(true);
  }, []);

  const handleInputSubmit = React.useCallback((): void => {
    setShowInput(false);
  }, []);

  return (
    <div className="app">
      <h1>Proxy</h1>
      {showInput ? (
        <Input onChange={setInput} onSubmit={handleInputSubmit}>
          {input}
        </Input>
      ) : (
        <Cards onClose={handleCardsClose}>{input}</Cards>
      )}
    </div>
  );
}
