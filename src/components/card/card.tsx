import React, { ReactElement } from 'react';
import './card.scss';

interface Props {
  children: string;
}

export default function Card({ children }: Props): ReactElement {
  const src: string = children.replace(/-(?:medium|thumb)\.jpg$/, '-large.jpg');

  return (
    <div className="card">
      <img alt={children} height="100%" src={src} width="100%" />
    </div>
  );
}
