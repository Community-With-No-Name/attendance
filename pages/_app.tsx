import '@/styles/globals.css'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { Montserrat } from 'next/font/google'



const queryClient = new QueryClient()
const montserrat = Montserrat({ subsets: ['latin'] })


export default function App({ Component, pageProps }: AppProps) {
    
    return  <div className={montserrat.className+" h-screen md:px-10 px-2"}>
    <QueryClientProvider client={queryClient}>
         <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
         </Hydrate>
        </QueryClientProvider>
            </div>
}
