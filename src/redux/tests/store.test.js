import { createStore } from 'redux';
import createReducer from '../rootReducer';
import { showResultSuccess } from '../Actions/resultsAction';

describe('Store', () => {
  it('should handle fetching results', () => {
    const initialState = {};
    const store = createStore(createReducer(), initialState);
    const results = [{
      Title: 'Rush Hour',
      Actors: 'Jackie Chan',
      Year: '2017'
    }];
    const action = showResultSuccess(results);
    store.dispatch(action);

    const actual = store.getState().results[0][0];
    const expected = [{
      Title: 'Rush Hour',
      Actors: 'Jackie Chan',
      Year: '2017'
    }];

    expect(actual).toEqual(expected[0]);
  })
});
