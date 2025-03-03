// import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import routesLink from './chap08/routesLink';
import routesParam from './chap08/routesParam';
import StateBasic from './chap03/StateBasic';
import ForNest from './chap03/ForNest';
import books from './chap03/books';
import HookTimer from './chap07/HookTimer';
// import HookMemo from './chap07/HookMemo';
// import HookReducerUp from './chap07/HookReducerUp';
// import HookReducer from './chap07/HookReducer';
// import HookCallbackRef from './chap07/HookCallbackRef';
// import HookRefForward from './chap07/HookRefForward';
// import HookRef from './chap07/HookRef';
// import HookRefNg from './chap07/HookRefNg';
// import HookTimer from './chap07/HookTimer';

function App() {
  return (
    <>
      {/* <HookTimer init={10} /> */}
      {/* <HookRefNg /> */}
      {/* <HookRef /> */}
      {/* <HookRefForward /> */}
      {/* <HookCallbackRef /> */}
      {/* <HookReducer init={0} /> */}
      {/* <HookReducerUp init={0}/> */}
      {/* <HookContext /> */}
      {/* <MyThemeProvider>
        <HookThemeButton />
      </MyThemeProvider> */}
      {/* <RecoilRoot>
        <RecoilCounter />
      </RecoilRoot> */}
      {/* <HookMemo /> */}
      {/* <RouterProvider router={routesParam} /> */}
      {/* <StateBasic init={0}/> */}
      {/* <ForNest src={books} /> */}
      <HookTimer init={0} />
    </>
  );
}

export default App;
