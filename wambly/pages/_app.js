import '@/styles/globals.css'
import MainLayout from '../src/components/MainLayout'

export default function App({Component,pageProps}){
  return(
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
