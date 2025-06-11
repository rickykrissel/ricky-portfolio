import { Grid, GridItem, HStack, Stack, Text } from '@chakra-ui/react'
import '../contactapp.css'
import MenuBar from '../assets/components/MenuBar'
function ContactApp() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' borderTopWidth="2px">
        <HStack paddingTop={300} justifyContent='center'>
          <Stack>
            <Text paddingRight={95} fontFamily='ui-rounded' fontSize='5xl'>
              Contact Me Below At:
            </Text>
            <a href="mailto:rmk23d@fsu.edu">rmk23d@fsu.edu</a>  
          </Stack>
        </HStack>
      </GridItem>
    </Grid>
    
  )
}

export default ContactApp