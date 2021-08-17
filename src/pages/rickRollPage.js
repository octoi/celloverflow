import React from 'react';
import getRandomRickRollLink from '../utils/rickRoll';

export default function RickRollPage() {
  const url = getRandomRickRollLink();
  window.location.href = url;

  return (
    <div>
      Never gonna give u up 😉
    </div>
  )
}
