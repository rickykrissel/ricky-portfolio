import { HStack, Image, Text } from "@chakra-ui/react";
import headshot from "../websiteheadshot.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import MenuButton from "./MenuButton";
import { Webpage } from "../../data/WebpageInterface";

const MenuBar = () => {

  const pages : Webpage[] = [
    {pgtitle: 'Home', pglink:'index.html', pgtarget: ''},
    {pgtitle: 'About Me', pglink:'about-me.html', pgtarget: ''},
    {pgtitle: 'Projects', pglink:'projects.html', pgtarget: ''},
    {pgtitle: 'GitHub', pglink:'https://github.com/rickykrissel', pgtarget: '_blank'},
    {pgtitle: 'Resume', pglink:'/ricky-krissel-resume.pdf', pgtarget: '_blank'},
    {pgtitle: 'Contact Me', pglink:'contact-me.html', pgtarget: ''},
  ];
  
  return (
    <HStack spacing={6} justifyContent='space-between'>
      <HStack paddingLeft={2}>
        <Image
          borderRadius="full"
          src={headshot}
          boxSize="50px"
          alt="Ricky Krissel"
        />
        <Text>Ricky Krissel</Text>
      </HStack>
      <HStack spacing={140}>
        {pages.map(page => <MenuButton webpage={page}></MenuButton>)}
      </HStack>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default MenuBar;
