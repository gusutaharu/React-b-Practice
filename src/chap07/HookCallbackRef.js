import React, { useEffect, useRef, useState } from 'react'

const HookCallbackRef = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  // const address = useRef(null);
  const callbackRef = elem => elem?.focus();

  // useEffect(() => {
  //   if (address.current) {
  //     address.current.focus();
  //   }
  // },[show])

  return (
    <>
      <div>
        <label htmlFor="name">名前:</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="email">メールアドレス:</label>
        <input id="email" type="text" />
        <button onClick={handleClick}>拡張表示</button>
      </div>
      {show && 
        <div>
          <label htmlFor="address">住所:</label>
          <input id="address" type="text" ref={callbackRef} />
        </div>
      }
    </>
  );
}

export default HookCallbackRef