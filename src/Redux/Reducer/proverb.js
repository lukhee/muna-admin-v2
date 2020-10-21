import * as types from "../actions/actionConstants";
const initialState = {
  proverbs: null,
  active_proverb: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_PROVERBS:
      return {
        ...state,
        loading: false,
      };

      case types.ACTIVE_PROVERB:
      const activeProverb = state.proverbs.find(proverb=>{
        return proverb.id === payload.proverbId})
      return {
        ...state,
        activeProverb: activeProverb,
        loading: false,
      };
      
    default:
      return state;
  }
}
