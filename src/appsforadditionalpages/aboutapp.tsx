import { Grid, GridItem} from '@chakra-ui/react'

import MenuBar from '../assets/components/MenuBar'
function AboutApp() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' borderTopWidth="2px">
        About me
      </GridItem>
    </Grid>
  )
}

export default AboutApp