import React from 'react'
import { ColorModeContext, HStack, Image, StackDivider, Switch, Text} from '@chakra-ui/react'
import headshot from '../websiteheadshot.jpg'
import ColorModeSwitch from './ColorModeSwitch'
const MenuBar = () => {
  
  const baritems = [
    
  ];
  //about me, projects, github, resume, contact me
  return (
    <HStack spacing={6}>
      <HStack>
        <Image borderRadius='full' src={headshot} boxSize='50px' alt ='Ricky Krissel'/>
        <Text>Ricky Krissel</Text>
      </HStack>
      
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default MenuBar