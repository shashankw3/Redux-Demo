import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeComponet from './components/CakeComponet';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <h1>this is cake app</h1>
      {console.log(store.getState())}
     <CakeComponet/>
    </div>
    </Provider>
   
  
  );
}

export default App;
