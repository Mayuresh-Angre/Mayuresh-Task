import { Provider } from 'react-redux';
import './App.css';
import Main from './Main';
import { sliceStore } from './components/redux/sliceStore';

function App() {
  return (
    <Provider store={sliceStore}>
      <Main/>
    </Provider>
  );
}

export default App;
