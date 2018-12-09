import state0 from './state0'

function rootReducer(state = state0, action) {
  switch (action.type) {
    case 'FETCHING_DUCKS':
      return Object.assign({}, state, {loading:true})
    case 'DUCKS_RECEIVED':
      return Object.assign({}, state, {loading:false, ducks:state.ducks.concat(action.ducks)});
    default:
      return state;
  }
}

export default rootReducer
