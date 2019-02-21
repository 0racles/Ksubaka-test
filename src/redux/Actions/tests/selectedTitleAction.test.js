import { SHOW_MOVIE_DETAILS, selectedTitleAction } from "../selectedTitleAction";

describe('results Action', () => {
  it('should create a SHOW_MOVIE_DETAILS action', () => {
    const titleName = 'The gods are not to blame';
    const expectedAction = {
      type: SHOW_MOVIE_DETAILS,
      titleName: titleName
    };
  const action = selectedTitleAction(titleName);
  expect(action).toEqual(expectedAction);
  });
});
