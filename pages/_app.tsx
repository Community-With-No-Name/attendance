import '@/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'



const queryClient = new QueryClient()
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    
    return  (
    <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
    <div className={montserrat.className+" max-h-screen md:px-10 px-2 md:overflow-hidden pb-4"}>
            <Component {...pageProps} />
            </div>
         </Hydrate>
        </QueryClientProvider>
            )
}
