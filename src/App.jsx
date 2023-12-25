
import './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store/store';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App;
