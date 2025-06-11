import { Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import '../aboutapp.css'
import MenuBar from '../assets/components/MenuBar'
function AboutApp() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem  paddingTop={300}area='main' borderTopWidth="2px">
        <Stack justifyContent='center'paddingLeft={520} width={1400}>
        <p>
          Hello, my name is Ricky Krissel. Computer science and programming have been  interests of mine throughout my highschool and college education. I am currently furthering this passion by pursuing a bachelor's degree in Computer Science at Florida State University.
        </p>
        <br></br>
        <p>
           My particular areas of interest within the broader computer science field include software engineering and machine learning, and I am actively seeking out roles in these specialties. However, I still have much to learn and am open to a variety of opportunities across the field of Computer Science. Please head to the contact me page to reach out.
        </p>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default AboutApp