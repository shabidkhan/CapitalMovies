import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import { StoreProvider } from '../utils/Store';
// import {useEffect} from 'react'
// import Slider from '@material-ui/core/Slider';


function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider anchorOrigin={{vertical:"top", horizontal:"center"}}>
      <StoreProvider>
          <Component {...pageProps} />
      </StoreProvider>
     </SnackbarProvider>
  )
}

export default MyApp
