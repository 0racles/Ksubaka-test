import initialState from './initialState';
import { SHOW_SEARCH_RESULT } from '../Actions/showSearchResultAction';
 
const searchResultReducer = (state = initialState.searchOptions, {type, searchResult}) => {

  switch (type) {
      case SHOW_SEARCH_RESULT:
          return searchResult;

      default:
        return state;
  }
};

export default searchResultReducer;
