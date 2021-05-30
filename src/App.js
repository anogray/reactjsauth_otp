import logo from './logo.svg';
import './App.css';
import Main from './components/Photos';
import CheckState from './checkState';
import Routes from './Routes';
import axios from "axios";
import { Provider } from 'react-redux';
import  {configureStore} from './redux/configureStore';
import { composeWithDevTools } from 'redux-devtools-extension';
import LoggingAuth from './components/auth/LoggingAuth';

const store = configureStore();

axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
    <Provider store = {store}>
   <LoggingAuth/>   
    <Routes/>
    {/* <CheckState/>
      <Main/> */}
  </Provider>
    </div>
  );
}

export default App;
