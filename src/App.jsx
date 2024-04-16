import { BrowserRouter } from 'react-router-dom';
import Topbar from './components/Topbar';
import MainRoutes from './routes';

function App(){
  return (
    <BrowserRouter>
      <MainRoutes/>
      <h1 className=' text-white bg-red-400'>Opa, bão</h1>
    </BrowserRouter>
  );
}

export default App;
