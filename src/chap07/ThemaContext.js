import { createContext } from 'react'

const ThemaContext = createContext({
  mode: 'light',
  toggleMode: () => {}
});

export default ThemaContext