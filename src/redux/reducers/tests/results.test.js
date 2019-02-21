import initialState from '../initialState';
import resultsReducer from '../results';
import { showResultSuccess } from '../../Actions/resultsAction';

describe('resultsReducer', () => {
  it('should return state for unknown action', () => {
    const mockState = { test: 'testItem' };
    const mockAction = { type: 'mystery-meat' };
    const result = resultsReducer(mockState, mockAction);
    expect(result).toEqual(mockState);
  });

  it('should use initial state if state not provided', () => {
    const mockAction = { type: 'mystery-meat' };
    const result = resultsReducer(undefined, mockAction);
    expect(result).toEqual(initialState.result);
  });

  it('should add items on SHOW_RESULT_SUCCESS', () => {
    const state = {
      result: []
    };
    return new Promise(resolve => setTimeout(resolve, 4000))
    const mockAction = showResultSuccess({ Title: 'Rush Hour', Actor: 'Jackie Chan' }, { Title: 'Meaty Loaf', Actor: 'Dwayne Johnson' });
    const returnedVal = resultsReducer(state, mockAction);
    expect(returnedVal.result).toHaveLength(2);
    expect(returnedVal.result[0].Title).toEqual('Rush Hour');
    expect(returnedVal.result[1].Actor).toEqual('Dwayne Johnson');
  });
});
