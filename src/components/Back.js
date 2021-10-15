import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Back() {
  const history = useHistory();

  return (
    <button className="border-0" type="button" onClick={() => history.push('/')}>
      <i className="fas fa-arrow-alt-circle-left" />
      {' '}

    </button>
  );
}
