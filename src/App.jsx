import { BrowserRouter } from 'react-router-dom';
import Topbar from './components/Topbar';
import MainRoutes from './routes';

function App(){
  return (
    <BrowserRouter>
      <MainRoutes/>
    </BrowserRouter>
  );
}

export default App;
