import covidReducer from '../redux/covid/covid';

const GET_GENERAL_COVID_DATA = 'covidStore/covid/GET_GENERAL_COVID_DATA';
const GET_REGION_DATA = 'covidStore/covid/GET_REGION_DATA';

const mockedStore = {
  general: [],
  regions: [],
};

describe('Covid data reducer', () => {
  test('return the initial state', () => {
    expect(covidReducer(undefined, {})).toEqual({ general: [], regions: [] });
  });

  test('return updated store with new general data', () => {
    const data = [{ today_new_confirmed: 1932, today_new_deaths: 48 }];
    const action = {
      type: GET_GENERAL_COVID_DATA,
      payload: data,
    };
    expect(covidReducer(mockedStore, action)).toEqual(
      { general: [{ today_new_confirmed: 1932, today_new_deaths: 48 }], regions: [] },
    );
  });

  test('return updated store with new region data', () => {
    const data = [{
      id: 'aragon',
      name: 'Aragon',
      today_new_confirmed: 1000,
      today_new_deaths: 10,
    }];
    const action = {
      type: GET_REGION_DATA,
      payload: data,
    };
    expect(covidReducer(mockedStore, action)).toEqual(
      {
        general: [],
        regions: [{
          id: 'aragon',
          name: 'Aragon',
          today_new_confirmed: 1000,
          today_new_deaths: 10,
        }],
      },
    );
  });
});
