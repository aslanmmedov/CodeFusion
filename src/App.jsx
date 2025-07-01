
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Routes from './router/router';
const routers = createBrowserRouter(Routes);
import './App.css'

function App() {
  
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
