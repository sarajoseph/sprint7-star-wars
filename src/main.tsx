/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { NotFound } from './pages/NotFound.tsx'
import { Starships } from './pages/Starships.tsx'
import { Starship } from './pages/Starship.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store'
import { Provider } from 'react-redux'
import { Login } from './pages/Login.tsx'
import { Register } from './pages/Register.tsx'

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
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <NotFound />
  },
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
)
