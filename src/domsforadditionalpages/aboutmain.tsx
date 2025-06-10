import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import AboutApp from '../appsforadditionalpages/aboutapp'
import theme from '../theme'
import '../index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript>
      <AboutApp />
    </ChakraProvider>
  </React.StrictMode>,
)