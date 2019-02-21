import initialState from './initialState';
import { SHOW_RESULT_SUCCESS, SHOW_RESULT_ERROR } from '../Actions/resultsAction';
 
const resultsReducer = (state = initialState.result, {type, result, error}) => {

  switch (type) {
      case SHOW_RESULT_SUCCESS:
          return [...state, Object.assign({}, result)];

      case SHOW_RESULT_ERROR:
          console.log('Error found', error);
          return state;

      default:
        return state;
  }
};

export default resultsReducer;
