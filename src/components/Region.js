import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Region() {
  const slug = useParams();
  const history = useHistory();

  const data = useSelector(
    (state) => state.covid.regions,
  );
  const details = data.filter(
    (region) => region.name === slug.id,
  );

  return (
    <div>
      <button type="button" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left" />
      </button>

      Region
      {details[0].name}
      <div>
        Today&#39;s New Confirmed;
        {' '}
        {details[0].today_new_confirmed}
      </div>

    </div>
  );
}
