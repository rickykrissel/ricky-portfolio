import React from 'react'
import { HStack, Image, Text} from '@chakra-ui/react'
import headshot from '../websiteheadshot.jpg'
const MenuBar = () => {
  return (
    <HStack>
      <Image borderRadius='full' src={headshot} boxSize='50px' alt ='Ricky Krissel'/>
      <Text color='black'>Ricky Krissel</Text>
    </HStack>
  )
}

export default MenuBar