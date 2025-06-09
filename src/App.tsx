import { Grid, GridItem} from '@chakra-ui/react'
import './App.css'
import MenuBar from './assets/components/menubar'
function App() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' bg='#ffffff'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' bg='dodgerblue'>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
