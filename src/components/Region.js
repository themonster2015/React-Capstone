import React from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Region() {
  const slug = useParams();

  const data = useSelector(
    (state) => state.covid.regions,
  );
  const details = data.filter(
    (region) => region.name === slug.id,
  );
  console.log(useRouteMatch());
  console.log(details[0]);

  return (
    <div>
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
