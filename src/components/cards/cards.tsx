import React, { ReactElement } from 'react';
import { Card } from '..';
import './cards.scss';

interface Props {
  children: string;
  onClose(): void;
}

export default function Cards({ children, onClose }: Props): ReactElement {
  return (
    <div className="cards">
      <button onClick={onClose}>Back</button>
      <div>
        {children.split('\n').map(
          (card: string): ReactElement => (
            <Card>{card}</Card>
          ),
        )}
      </div>
    </div>
  );
}
