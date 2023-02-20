import { createBrowserRouter } from "react-router-dom";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login";
import Main from "../../layout/Main";


 export const Routes = createBrowserRouter([
    {
      path: '/',
      element: <Main> </Main>,
      children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
            path: 'login',
            element: <Login></Login>
          }
      ]
    }
]);