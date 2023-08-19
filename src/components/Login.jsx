import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const FormField = ({ id, label, type, isRequired, name, value, onChange }) => (
  <FormControl id={id} isRequired={isRequired}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} name={name} value={value} onChange={onChange} />
  </FormControl>
);


const PasswordField = ({ id, label, isRequired, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
        />
        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={() => setShowPassword(showPassword => !showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default function SignupCard() {
  let navigate =useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = event => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handlesubmit = async e => {
    e.preventDefault();
    console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });
    const json = await response.json();
    console.log(json)
    if(!json.success)
    {
      alert('enter valid credentials');

    }
    if(json.success)
    {
    
     navigate("/")

    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
          Welcome back | Sign in
          </Heading>

          <Text fontSize={'2xl'} color={'black'}>
            SMASH CRAVES 🍔
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormField
              id="email"
              label="Email address"
              type="email"
              isRequired
              name="email"
              value={credentials.email}
              onChange={handleChange}
            />
            <PasswordField
              id="password"
              label="Password"
              isRequired
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handlesubmit}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} >
              Register Now?{' '}
              </Text>
              <Text align={'center'}  color={'blue.400'}   _hover={{ textDecoration: 'underline' }} >
               
                <Link
                  to="/signup"

                >
                  Sign up
                </Link>

              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
