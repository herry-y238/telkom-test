import { FETCH_REPOSITORIES_SUCCESS } from './actions';

const initialState = {
  repositories: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;