import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TopBar from './TopBar';

export default function Region() {
  const slug = useParams();
  const history = useHistory();

  const details = useSelector(
    (state) => state.covid.regions.filter(
      (region) => region.name === slug.id,
    ),
  );

  if (details.length === 0) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="d-flex ">
        <button className="float-left" type="button" onClick={() => history.push('/')}>
          <i className="fas fa-arrow-alt-circle-left" />
          {' '}

        </button>
        <span className="m-auto">
          <TopBar region={details[0].name} />
          {' '}

        </span>

      </div>
      <div className="region-name d-flex justify-content-between w-75 mr-5">
        <span><i className="fas fa-3x fa-globe-europe big-icon" /></span>
        <div className="d-flex justify-content-center flex-column ">
          <span className="h2">
            {details[0].name}
          </span>
          <span>
            {details[0].today_new_confirmed}
            {' '}
            new confimed cases
          </span>

        </div>
      </div>

      <li className="metric-div d-flex justify-content-between  align-items-center lead">
        <span> Today&#39;s New Confirmed</span>
        <span>{details[0].today_new_confirmed}</span>
      </li>
      <li className="metric-div d-flex justify-content-between  align-items-center lead">
        <span> Total Open Cases</span>
        <span>
          {' '}
          {details[0].today_open_cases}
          {' '}
        </span>
      </li>
      <li className="metric-div d-flex justify-content-between  align-items-center lead">
        <span> Total Deaths to Date </span>

        <span>{details[0].today_deaths}</span>
      </li>

    </div>
  );
}
