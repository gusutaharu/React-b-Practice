import React, { useRef, useState } from 'react'

const HookRef = () => {
  const id = useRef(null);
  const [count, setCount] = useState(0);

  const handleStart = () => {
    if (id.current === null) {
      id.current = setInterval(() => setCount(c => c + 1),1000);
    }
  };

  const handleEnd = () => {
    clearInterval(id.current);
    id.current = null;
  };


  return(
    <>
      <button onClick={handleStart}>開始</button>
      <button onClick={handleEnd}>終了</button>
      <p>{count}秒経過</p>
    </>
  )
}

export default HookRef