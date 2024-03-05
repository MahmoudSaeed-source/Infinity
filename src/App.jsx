
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Home from "./pages/ecommercy/home/Home";
import Layout_Dashboard from "./pages/dashboard/layout_page/Layout_Dashboard";
import Home_page from './pages/dashboard/home-page/Home_page'
  import Users from './pages/dashboard/users/Users';
  import Products from './pages/dashboard/products/Products';
import Single from './pages/dashboard/single/Single';
function App() {
  
  const routes = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Layout_Dashboard />,
      children: [
        {
          path: "/dashboard",
          element: <Home_page />,
        },
        {
          path: "/dashboard/users",
          element: <Users />,
          children: [
            {
              path: ":userId",
              element: <Single />,
            },
          ],
        },
        {
          path: "/dashboard/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <main className="app"></main>
    </RouterProvider>
  );
}

export default App
