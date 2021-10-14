import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

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

  const parsed = filteredData.map((region) => (
    <div className="card" key={region.name} id={region.name}>
      <div className="card-header d-flex justify-content-end border-0">
        <button type="button">
          <Link to={`/${region.name}`}>
            {' '}
            <i className="fas fa-long-arrow-alt-right" />
          </Link>

        </button>
      </div>

      <div className="card-img-top"><i className="fas fa-3x fa-globe-europe" /></div>
      <div className="card-body d-flex justify-content-end">
        <div>
          <h5 className="card-title">
            {' '}
            {region.name}
          </h5>
          <p className="card-text">
            {region.today_new_confirmed > 0 ? `${region.today_new_confirmed} new confirmed cases` : 'No new confirmed cases.'}

          </p>
        </div>
      </div>
    </div>

  ));

  return (
    <div>
      <TopBar />
      <header className="d-flex justify-content-center align-items-center">
        <i className="fas fa-3x fa-sun" />
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
          <button type="button" className="btn btn-info" id="all" onClick={handleClick}>VIEW ALL</button>
          <button type="button" className="btn btn-success" id="zero" onClick={handleClick}>REGIONS WITH NO NEW CASES TODAY</button>
          <button type="button" className="btn btn-warning" id="highest" onClick={handleClick}>REGIONS WITH HIGHEST CASES TODAY</button>

        </div>

      </header>

      <ul className="grid-container">
        {filteredData.length > 0 ? parsed : 'No Data...'}
      </ul>
    </div>
  );
}
