import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

const ToPage = () => {
  const [ , setCount] = useOutletContext();
  useEffect(()=> setCount( c => c+1 ), [setCount]);
  return (
    <p>トップページです。</p>
  )
}

export default ToPage