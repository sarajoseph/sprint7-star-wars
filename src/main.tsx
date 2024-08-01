/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx';
import { NotFound } from './pages/NotFound.tsx';
import { Starships } from './pages/Starships.tsx';
import { ContextProvider } from './context/Context.tsx';
import { Starship } from './pages/Starship.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
  {
    path: '/starships/starship/:params',
    element: <Starship />,
    errorElement: <NotFound />
  },
])
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ContextProvider>
)
