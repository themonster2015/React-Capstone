import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {
  const data = useSelector((state) => state.covid);
  const { regions } = data;
  /*  const handleClick = (e) => {
    const { id } = e.target.parentElement;
    console.log(id);
  }; */

  const parsed = regions.map((region) => (
    <li key={region.name} id={region.name}>
      {region.name}
      <button type="button">
        <Link to={`/${region.name}`}>
          {' '}
          <i className="fas fa-long-arrow-alt-right" />
        </Link>

      </button>
    </li>
  ));

  return (
    <div>
      Home
      <ul className="grid-container">
        {regions.length > 0 ? parsed : 'Data Loading...'}
      </ul>
    </div>
  );
}
