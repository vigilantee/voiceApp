import {
  GET_SEARCH_RESULT,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_ERROR,
  EMPTY_STORE,
} from '../constants';

const initialState = {
  isFetching: false,
  error: false,
  allSearchResults: [],
};

const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_RESULT:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case GET_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        allSearchResults: action.data,
      };
    case GET_SEARCH_RESULT_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    case EMPTY_STORE:
      return initialState;
    default:
      return state;
  }
};

export default enquiryReducer;
