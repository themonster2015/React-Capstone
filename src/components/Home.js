import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {
  const data = useSelector((state) => state.covid);
  const { regions } = data;
  const [filteredData, setFilteredData] = useState(regions);
  useEffect(() => {
    setFilteredData(regions);
  }, [regions]);
  const handleClick = (e) => {
    const type = e.target.id;
    if (type === 'zero') {
      return setFilteredData(regions.filter((region) => region.today_new_confirmed === 0));
    } if (type === 'highest') {
      const filtered = regions.filter(
        (region) => region.today_new_open_cases > 100,
      ).sort((a, b) => b.today_new_confirmed - a.today_new_confirmed);
      return setFilteredData(filtered);
    }
    return setFilteredData(regions);
  };
  /*  const handleClick = (e) => {
    const { id } = e.target.parentElement;
    console.log(id);
  }; */

  const parsed = filteredData.map((region) => (
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
      <h1>COVID DATA for SPAIN</h1>
      {filteredData.length > 0 ? (
        <>
          <span>
            Today&#39;s New Confirmed:
            {data.general[0].today_new_confirmed}
          </span>
          <br />
          <span>
            Today&#39;s New Deaths:
            {data.general[0].today_new_deaths}
          </span>
        </>
      ) : 'Loading...'}
      <p>Sort By:</p>
      <button type="button" id="all" onClick={handleClick}>VIEW ALL</button>
      <button type="button" id="zero" onClick={handleClick}>REGIONS WITH NO NEW CASES TODAY</button>
      <button type="button" id="highest" onClick={handleClick}>REGIONS WITH HIGHEST CASES TODAY</button>
      <ul className="grid-container">
        {filteredData.length > 0 ? parsed : 'No Data...'}
      </ul>
    </div>
  );
}
