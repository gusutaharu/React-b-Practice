import { Button } from '@mui/material';
import React, { useContext } from 'react'
import ThemaContext from './ThemaContext';

const HookThemeButton = () => {
  const { mode, toggleMode } = useContext(ThemaContext);
  return (
    <Button variant='contained' onClick={toggleMode}>
      Mode {mode}
    </Button>
  )
}

export default HookThemeButton