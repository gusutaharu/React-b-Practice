import React, { useEffect, useState } from 'react'


const HookTimer = ({init}) => {

  const [count, setCount] = useState(init);
  useEffect(()=>{
    //タイマーを準備
    const t = setInterval(()=>{
      setCount(c => c -1);
    }, 1000);
    //コンポーネント破棄時にタイマーも破棄
    return () => {
      clearInterval(t);
    };
  }, [])

  return (
    <div className={count < 0 ? 'warn' : ''}>
      現在のカウント : {count}
    </div>
  )
}

export default HookTimer