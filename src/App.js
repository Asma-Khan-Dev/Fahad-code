import logo from './logo.svg';
import './App.css';
import FuncComponent from './component/FuncComponent';
import ClassComponent from './class/ClassComponent';
import StateManage from './state/Statemanage';
import PropsState from './propsState/PropsState';

function App() {



  
  return (



    <div className="App">
      <h1>hello </h1>

      <ClassComponent/>
      <FuncComponent/>
      <StateManage/>
      <PropsState city ="karachi"/>
    </div>
  );
}

export default App;
