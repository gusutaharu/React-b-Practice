import './App.css';
import MyThemeProvider from './chap07/MyThemeProvider';
import HookThemeButton from './chap07/HookThemeButton';
// import HookContext from './chap07/HookContext';
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
      <MyThemeProvider>
        <HookThemeButton />
      </MyThemeProvider>
    </>
  );
}

export default App;
