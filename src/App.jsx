
import './App.scss'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,Route
} from 'react-router-dom'
import Home from "./pages/ecommercy/Home";
  import Home_Dashboard from './pages/dashboard/Home_Dashboard'
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard">
          <Route index element={<Home_Dashboard />} />
        </Route>
      </>
    )
  );
  return (
    <RouterProvider router={router}>
      <main className="app">
        
      </main>
    </RouterProvider>
  );
}

export default App
