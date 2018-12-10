import state0 from './state0'

function rootReducer(state = state0, action) {
  switch (action.type) {
  	case 'COUNTER_INC':
      return Object.assign({}, state, {count: state.count + 1})
    default:
      return state;
  }
}

export default rootReducer
