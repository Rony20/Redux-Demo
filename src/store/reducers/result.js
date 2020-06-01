import actionTypes from '../actions'

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
        return {
            ...state,
            results: state.results.concat({id: new Date(), value: action.counter})
        }
    case actionTypes.DELETE_RESULT:
        const updatedResultArray = state.results.filter(result => result.id !== action.resultElId)
        return {
            ...state,
            results: updatedResultArray
        }
    default:
      return state;
  }
};

export default reducer;
