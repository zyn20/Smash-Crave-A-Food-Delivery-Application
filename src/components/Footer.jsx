import React from 'react'
import { Box ,Stack,VStack,HStack,Heading,Button,Input,Text} from '@chakra-ui/react';
import {AiFillInstagram, AiOutlineSend} from "react-icons/ai"
import {AiOutlineLinkedin} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineGithub} from "react-icons/ai"
import logo from "../assets/logoimg.png"

const Footer = () => {
  return (
   <>
   <Box bgColor={'blackAlpha.900'} minH={"40"} p={16} color={'white'}>
<Stack direction={['column','row']} >

    <VStack alignItems={'stretch'} w={'full'} p={'4'}>
<Heading textTransform={'uppercase'} size={'md'} textAlign={'center'}>Subscribe to get more offers</Heading>
<HStack borderBottom={'4px solid'}py={'2'}>
    <Input border={'none'} borderRadius={'none'} focusBorderColor={'none'} outline = {'none'} placeholder='Enter Email...'/>
    <Button p={'0'} colorScheme='facebook' variant={'ghost'} borderRadius={'0 20px 20px 0'}> 
<AiOutlineSend/>
    </Button>
</HStack>
    </VStack>
    <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
<Heading textTransform={'uppercase'} textAlign={'center'}>
<img src={logo} alt="" />
</Heading>
<Text>
   Copyright &copy; All rights reserved SmashCraves
</Text>


    </VStack>
    <VStack w={'full'} >

        <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
        </Heading>
        <HStack>
        <Button variant={'link'} colorScheme='whatsapp'>
          <a href="https://wa.me/+923159616526" target='_blank'> <AiOutlineWhatsApp size={'40'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='linkedin'>
          <a href="https://www.linkedin.com/in/zyn20/" target='_blank'> <AiOutlineLinkedin size={'40'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='facebook'>
          <a href="https://www.facebook.com/mrzyn20" target='_blank'> <AiFillFacebook size={'40'}/></a>
        </Button>
        </HStack>
        <HStack>
        <Button variant={'link'} colorScheme='twitter'>
          <a href="https://twitter.com/zen____8" target='_blank'> <AiOutlineTwitter size={'40'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='linkedin'>
          <a href="https://github.com/zyn20" target='_blank'> <AiOutlineGithub size={'40'}/></a>
        </Button>
        <Button variant={'link'} colorScheme='messenger'>
          <a href="https://www.instagram.com/_zyn20/"> <AiFillInstagram size={'40'}/></a>
        </Button>
        </HStack>
       
    </VStack>
</Stack>
   </Box>
   </>
  )
}

export default Footer;