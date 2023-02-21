import { createBrowserRouter } from "react-router-dom";
import Error404 from "../../component/Error404/Error404";
import Home from "../../component/Home/Home";
import Login from "../../component/Login/Login";
import Register from "../../component/Register/Register";
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
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/register',
            element: <Register></Register>
          }
      ]
    },
    
    {
     path: '*',
     element: <Error404></Error404>

    }
]);