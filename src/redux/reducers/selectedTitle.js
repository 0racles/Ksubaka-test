import initialState from './initialState';
import { SHOW_MOVIE_DETAILS } from '../Actions/selectedTitleAction';
 
const selectedTitleReducer = (state = initialState.selectedTitle, {type, titleName}) => {

  switch (type) {
      case SHOW_MOVIE_DETAILS:
          return titleName;

      default:
        return state;
  }
};

export default selectedTitleReducer;
