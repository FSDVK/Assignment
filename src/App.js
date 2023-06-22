import './App.css';
import Welcome from './welcome/Welcome';
import Login from './login/Login';
import SignUp from './signup/Signup';
import Home from './home/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
  ]);

  return (
    // <div>
    //   <Welcome />  
    //   <Login />
    //   <SignUp />
    //   <Home />
    // </div>
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
