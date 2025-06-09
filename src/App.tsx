import { Grid, GridItem} from '@chakra-ui/react'
import './App.css'
import MenuBar from './assets/components/menubar'
function App() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' borderTopWidth="2px">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
