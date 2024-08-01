/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { Starships } from './pages/Starships.tsx';
import { ContextProvider } from './context/Context.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/starships',
    element: <Starships />,
    errorElement: <NotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
