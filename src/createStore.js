export default function createStore(reducer){

}

// solution
export default function createStore(reducer){
  let state;

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state;
  }
  dispatch({type: '@@INIT'})
  return {dispatch: dispatch, getState: getState}
}

function render(){
  let container = document.getElementById('container')
}
