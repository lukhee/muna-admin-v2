import * as types from "../Actions/actionContents";
const initialState = {
  proverbs: null,
  activeProverb: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_PROVERBS:
      return {
        ...state,
        proverbs: payload.data,
        loading: false,
      };

      case types.CREATE_PROVERB:
      return {
        ...state,
        proverbs: [payload.data,...state.proverbs],
        loading: false,
      };

      case types.ACTIVE_PROVERB:
      return {
        ...state,
        activeProverb: payload,
        loading: false,
      };

      case types.DELETE_PROVERB:
      return {
        ...state,
        laoding: false,
        proverb: state.proverbs.filter(proverb=> proverb.id !== payload)

      }

      case types.CREATE_TRANSLATION:
        state.activeProverb.translation.push(payload)
        return {
          ...state,
          activeProverb:{...state.activeProverb } ,
          loading: false,
        };

        case types.CREATE_INTERPRETATION:
        state.activeProverb.interpretation.push(payload)
        return {
          ...state,
          activeProverb:{...state.activeProverb } ,
          loading: false,
        };
      
    default:
      return state;
  }
}
