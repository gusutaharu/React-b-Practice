import React, { useContext } from 'react';
import { MyAppContext } from './HookContext';

export function HookContextChild() {
  return (
    <div id='c_child'>
      <HookContextChildGrnd />
    </div>
  )
}
export function HookContextChildGrnd() {
  const {title, lang} = useContext(MyAppContext);
  return (
    <div id='c_child_grand'>
      {title} ({lang})
    </div>
  )
}
