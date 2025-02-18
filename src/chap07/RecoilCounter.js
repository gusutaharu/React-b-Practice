import React from 'react'
import { useRecoilState } from 'recoil'
import { counterAtom } from '../store/atom'

const RecoilCounter = () => {
  const [counter, setCounter] = useRecoilState(counterAtom)

  const handleClick = () => {
    setCounter(c => c + 1);
  };

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{counter}回、クリックされました。</p>
    </>
  )
}

export default RecoilCounter