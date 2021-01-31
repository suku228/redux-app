import logo from './logo.svg';
import './App.css';
import balanceContext from './BalanceContext'
import Parent from './components/hierarchy/Parent';
import React from 'react'
import {store} from './redux/store/store';
import {Provider} from 'react-redux'
import Cakecontainer from './containers/CakeContainer'

function App() {
  const [val, setVal] = React.useState(10);
  return (
    <div className="App">
      
      <header className="App-header">
        <Provider store={store}>
          <h1>app.js</h1>
           <Cakecontainer /> 
        </Provider>
      {/* <balanceContext.Provider value={[val, setVal]}>
        <h1>Home page  {val}</h1>
        <Parent></Parent>
      </balanceContext.Provider> */}
      </header>
    </div>
  );
}

export default App;
