// import logo from './public/logo.svg';
import '../css/App.css';
import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

function App() {
  return <Provider store={store}>
    <div>
      <h1>Search For a Package</h1>
      <RepositoriesList />
    </div>
  </Provider>
};

export default App;
