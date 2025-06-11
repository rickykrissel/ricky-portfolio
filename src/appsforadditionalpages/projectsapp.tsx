import { Grid, GridItem, Stack, Text } from '@chakra-ui/react'
import '../projectapp.css'
import MenuBar from '../assets/components/MenuBar'
function ProjectApp() {

  return (
    <Grid templateAreas={`"nav nav" "main main"`}>
      <GridItem area='nav' paddingBottom='5px'>
        <MenuBar></MenuBar>
      </GridItem>
      <GridItem area='main' borderTopWidth="2px">
        <Stack paddingLeft={520} width={1400}>
          <Text paddingLeft={290} fontFamily='ui-rounded' as='b'fontSize='5xl'>My Projects</Text>
          <Text paddingTop={50}></Text>
          <ul>
            <li>
              <a target='_blank' href='https://rickykrissel.github.io/solitaire/'>Solitaire Web App</a>
              <p>Built a fully playable game of solitaire within a web app. The functionality of the game was built using vanilla JavaScript, and the remainder of the page was built using CSS and HTML.</p>
            </li>
            <li>
              <a target='_blank' href='https://github.com/rickykrissel/emailspamlogreg'>Email Spam Identifier</a>
              <p>Cleaned dataset of spam and ham emails then used the Matplotlib python library to analyze the data. Used scikit-learn to implement and train several models, ultimately yielding one that was able to predict whether emails were spam with an accuracy of approximately 98%.</p>
            </li>
            <li>
              <a target='_blank' href='https://github.com/rickykrissel/housingproj'>Housing Price Prediction Model</a>
              <p>Created a dataset of housing features, such as # of bed and bath, in a chosen area (Philladelphia). Analyzed these features using Matplotlib and implemented and trained several ML models using scikit-learn, fine-tuning them in order to best predict the price of a house within the area given several features.</p>
            </li>
          </ul>
          <p>and more projects available on my GitHub</p>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ProjectApp