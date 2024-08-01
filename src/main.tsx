/* eslint-disable react/react-in-jsx-scope */
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './store'
import { Provider } from 'react-redux'
import { App } from './pages/App.tsx'
import { StarwarsProvider } from './context/StarwarsContext.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <StarwarsProvider>
        <App />
      </StarwarsProvider>
    </QueryClientProvider>
  </Provider>
)
