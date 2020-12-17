import {
  BASE_URL,
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_ERROR,
} from '../constants';

const getSearchResultsData = () => ({
  type: GET_SEARCH_RESULT,
});

const getSearchResultsDataValue = (data) => ({
  type: GET_SEARCH_RESULT_SUCCESS,
  data,
});

const getSearchResultsDataFailure = () => ({
  type: GET_SEARCH_RESULT_ERROR,
});

const getSearchResultsFromAPI = () => {
  return (dispatch) => {
    dispatch(getSearchResultsData());
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.dataList);
        dispatch(getSearchResultsDataValue(responseJson.dataList));
      })
      .catch((error) => {
        dispatch(getSearchResultsDataFailure());
      });
  };
};

export {getSearchResultsFromAPI};
