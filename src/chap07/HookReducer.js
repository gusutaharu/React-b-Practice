import React, { useReducer } from 'react'

const HookReducer = ({init}) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'update':
          return { count: state.count++};
        default:
          return state;
      }
    },{count: init}
  );
  const handleClick = () => {
    dispatch({ type: 'update' });
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{state.count}回、クリックされました</p>
    </>
  )
}

export default HookReducer