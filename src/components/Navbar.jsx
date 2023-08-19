import React from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logo from '../assets/logoimg.png';
import { Link as ReactLink } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <ReactLink
    to={to}
    style={{
      padding: '8px 16px',
      borderRadius: '4px',
      textDecoration: 'none',
      fontWeight: 'bold',
      _hover: {
        background: useColorModeValue('yellow.200', 'yellow.700'),
        textDecoration: 'none',
      },
    }}
  >
    {children}
  </ReactLink>
);

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box bg={useColorModeValue('green.600', 'green.900')} px={4}>
      <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems="center">
          <Link to="/">
            <img src={logo} alt="Smash Craves" />
          </Link>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </Flex>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Nav;
