function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('increment likes', state, action);
      const index = action.index;
      return [
        ...state.slice(0,index),
        {...state[index], likes: state[index].likes+1},
        ...state.slice(index+1),
      ]
    default:
      return state;
  }
  return state;
}

export default posts;
