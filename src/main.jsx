import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import AuthProvider from './providers/AuthProvider'
import ThemeProvider from './providers/ThemeProvider'
import Router from './routes/Router'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ThemeProvider>
					<Router />
				</ThemeProvider>
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)

