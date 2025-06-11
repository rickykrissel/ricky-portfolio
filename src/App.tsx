import { Grid, GridItem, Stack, Text, Image, HStack} from '@chakra-ui/react'
import './App.css'
import MenuBar from './assets/components/MenuBar'
function App() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' borderTopWidth="2px">
        <HStack paddingTop={170} justifyContent='center'>
        <Stack>
          <Text paddingRight={95} fontFamily='ui-rounded' fontSize='5xl'>Ricky Krissel</Text>
          <Text paddingRight={175} fontFamily='ui-rounded' fontSize='2xl'>Software Engineer</Text>
          <ul>
            <li>Based in Florida</li>
            <li>Currently studying at Florida State University</li>
          </ul>
          
        </Stack>
        <Image width={400}  alt='Programming And Web Technology Vector With Computer Illustration Image by pngtree.com'src='./src/assets/components/computerimg.png'></Image>
        </HStack>
        
      </GridItem>
    </Grid>
  )
}

export default App
