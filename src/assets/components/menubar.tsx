import React from 'react'
import { HStack, Image, Switch, Text} from '@chakra-ui/react'
import headshot from '../websiteheadshot.jpg'
const MenuBar = () => {
  return (
    <HStack>
      <Image borderRadius='full' src={headshot} boxSize='50px' alt ='Ricky Krissel'/>
      <Text>Ricky Krissel</Text>
      <Switch></Switch>
    </HStack>
  )
}

export default MenuBar