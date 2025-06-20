import { HStack, Switch, Text, useColorMode} from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode()
  
  return (
    <HStack paddingRight={2}>
      <Switch colorScheme='teal' isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
      <Text>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch