import { SHOW_RESULT_SUCCESS, showResultAction } from "../resultsAction";

describe('results Action', () => {
  it('should create a SHOW_RESULT_SUCCESS action', () => {
    return new Promise(resolve => setTimeout(resolve, 4000))
    const result = {Title: 'meaty loaf', Actors: 'Jackie Chan', Year: '2017'};
    const expectedAction = {
      type: SHOW_RESULT_SUCCESS,
      result: result
    };
  const action = showResultAction(result);
  expect(action).toEqual(expectedAction);
  });
});
