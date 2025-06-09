import React from 'react'
import { Button } from '@chakra-ui/react'
interface Props{
  pgtitle:string;
  pglink:string;
  pgtarget:string;
}
const menubutton = ({pgtitle, pglink} : Props) => {
  return (
    <a href={pglink}>{pgtitle}</a>
  )
}

export default menubutton