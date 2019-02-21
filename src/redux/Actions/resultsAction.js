import { api_url } from '../../service';

export const SHOW_RESULT_SUCCESS = `SHOW_RESULT_SUCCESS`;
export const SHOW_RESULT_ERROR = `SHOW_RESULT_ERROR`;

const api_fetch = () => {
  const api_request = fetch(api_url);
  return api_request;
};

export const showResultSuccess = result => {
  return {
      type: SHOW_RESULT_SUCCESS,
      result
  }
}

export const showResultFailure = error => {
  return {
      type: SHOW_RESULT_ERROR,
      error
  }
}

export const showResultAction = result => {
  return (dispatch) => {
    api_fetch().then(response => {
      response.json().then(data => {
        dispatch(showResultSuccess(data));
      }).catch(err => {
        dispatch(showResultFailure(err));
      })
    })
  }
};
