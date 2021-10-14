const initialState = { general: [], regions: [] };

const api = 'https://api.covid19tracking.narrativa.com/api/';
const country = 'Spain';

const GET_GENERAL_COVID_DATA = 'covidStore/covid/GET_GENERAL_COVID_DATA';
const GET_REGION_DATA = 'covidStore/covid/GET_REGION_DATA';

export const getGeneralData = () => async (dispatch) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = `${today.getFullYear()}-${month}-${today.getDate()}`;
  await fetch(`${api}/${date}/country/${country}`)
    .then((res) => res.json())
    .then((data) => {
      const res = Object.entries(data)[0][1][date].countries[country];
      const { regions } = res;
      const detailedData = [];

      regions.forEach((region) => {
        detailedData.push(region);
      });
      const covidData = [];
      covidData.push({
        today_new_confirmed: res.today_new_confirmed,
        today_new_deaths: res.today_new_deaths,
      });
      dispatch({
        type: GET_GENERAL_COVID_DATA,
        payload: covidData,
      });
      dispatch({
        type: GET_REGION_DATA,
        payload: detailedData,
      });
    })
    .catch((err) => console.log(err));
};

export const getRegionData = () => () => {
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENERAL_COVID_DATA:
      return { ...state, general: [...action.payload] };
    case GET_REGION_DATA:
      return { ...state, regions: [...action.payload] };
    default:
      return state;
  }
};

export default covidReducer;
