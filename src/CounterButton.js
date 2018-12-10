import React from 'react'
import { connect } from 'react-redux'
import { counterInc } from './actions'

//--noncontainer to go inside container

const CounterButtonComponent = ({counterInc, count})=>(
  <div>
    <h2>Counter Button</h2>
    <button onClick={counterInc}>
      Click me... {count}
    </button> 
   </div>
)

//--container--

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  counterInc: () => dispatch(counterInc())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterButtonComponent)
