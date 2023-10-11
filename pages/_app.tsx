import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'
import { ToastProvider } from 'react-toast-notifications'



const queryClient = new QueryClient()
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    
    return <QueryClientProvider client={queryClient}><ToastProvider><div className={montserrat.className+" max-w-7xl max-h-screen mx-auto"}><Component {...pageProps} /></div></ToastProvider></QueryClientProvider>
}
