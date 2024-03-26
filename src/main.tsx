import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import '@/index.scss'
import { Loader } from '@/shared/components/atoms/loader'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <App />
      <Loader />
      <ReactQueryDevtools initialIsOpen={false} />
    </ChakraProvider>
  </QueryClientProvider>,
)
