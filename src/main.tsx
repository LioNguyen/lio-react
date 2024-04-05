import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactDOM from 'react-dom/client'

import App from '@/App.tsx'
import '@/index.scss'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
})

const colors = {
  // Create new color
  brand: {
    900: '#024fc9',
    800: '#0a69ff',
    700: '#0f7cff',
    600: '#1a8fff',
    500: '#2b98ff',
  },
}

const fonts = {
  // Override default font
  body: 'Tahoma',
  heading: 'Courier New',

  // Create new font
  main: 'Menlo, monospace',
}

const theme = extendTheme({ colors, fonts })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
)
