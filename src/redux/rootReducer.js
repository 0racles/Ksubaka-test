import { combineReducers } from 'redux';
import resultsReducer from './reducers/results';
import searchResultReducer from './reducers/searchResult';
import selectedTitleReducer from './reducers/selectedTitle';

export default function createReducer() {
  return combineReducers({
    results: resultsReducer,
    searches: searchResultReducer,
    movieSelected: selectedTitleReducer,
  });
}
