
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import Routes from './router/router';
const routers = createBrowserRouter(Routes);
import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  
  return (
    <>
      <RouterProvider router={routers}/>
       <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
