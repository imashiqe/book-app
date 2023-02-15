
import './App.css';

import {  RouterProvider } from 'react-router-dom';
import {Routes} from './Routes/Routes/Routes';
function App() {
  return (
    <div >
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  );
}

export default App;
