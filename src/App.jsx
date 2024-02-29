
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from "./pages/ecommercy/Home";
  import Home_Dashboard from './pages/dashboard/home/Home_Dashboard'
  import Users from './pages/dashboard/users/Users';
  import Products from './pages/dashboard/products/Products';
function App() {
  
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Home_Dashboard />,
      children: [
      {
          path: '/dashboard/users',
          element:<Users/>
        },
        {
          path: '/dashboard/products',
          element:<Products/>
        }

      ]
    },

    {
      path: '/',
      element:<Home/>
    }

  ]);
  return (
    <RouterProvider router={router}>
      <main className="app">
      </main>
    </RouterProvider>
  );
}

export default App
