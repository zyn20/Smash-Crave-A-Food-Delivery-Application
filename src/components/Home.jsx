import React, { useState, useEffect } from 'react';
import {
  Box,
  Image,
  Heading,
  Container,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  SimpleGrid
} from '@chakra-ui/react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import BackgroundImage from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import ServicesImg from '../assets/smash.png';
import Cards from './Cards';
import { useDispatchCart } from './ContextReducer';

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFoodItem] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatchCart();

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredFoodItems = fooditem.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFoodItem(filteredFoodItems);
  };

  const clearSearchResults = () => {
    setSearchValue('');
    loadData();
  };

  return (
    <>
      <Box>
        <MyCarousel />
      </Box>
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          width={'fit-content'}
          borderBottom={'4px solid'}
          m={'auto'}
        >
          Smash Craves-Your Ultimate Food Delivery Experience
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image
            src={ServicesImg}
            h={['40', '400']}
            filter={'hue-rotate(-150deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Welcome to Smash Craves, where your hunger meets its match! We are a
            cutting-edge food delivery app that brings a delectable world of
            cuisines right to your doorstep. With a focus on convenience,
            quality, and variety, Smash Craves aims to redefine your food
            ordering experience and leave you craving for more.
          </Text>
        </Stack>
      </Container>

      <InputGroup maxW="md" m="auto" my={8}>
        <Input
          placeholder="Search for food..."
          value={searchValue}
          onChange={handleSearchChange}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search"
            icon={<FaSearch />}
            onClick={handleSearchClick}
          />
          <IconButton
            aria-label="Clear"
            icon={<FaTimes />}
            onClick={clearSearchResults}
          />
        </InputRightElement>
      </InputGroup>

      {foodCat !== [] ? (
        foodCat.map((category) => (
          <div key={category._id}>
            <Heading as="h2" size="lg" mx={10} my={4} color="blue.500">
              {category.CategoryName}
            </Heading>
            <hr />
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6}>
              {fooditem !== [] ? (
                fooditem
                  .filter((item) => item.CategoryName === category.CategoryName)
                  .map((item) => (
                    <div key={item._id}>
                      <Cards
                        foodName={item.name}
                        options={item.options[0]}
                        imgSrc={item.img}
                        price={item.price}
                        onAddToCart={() => {
                          dispatch({
                            type: 'ADD_TO_CART',
                            payload: {
                              id: item._id,
                              foodName: item.name,
                              options: item.options[0],
                              imgSrc: item.img,
                            },
                          });
                        }}
                      />
                    </div>
                  ))
              ) : (
                <div>No such Data Found</div>
              )}
            </SimpleGrid>
          </div>
        ))
      ) : (
        <div>**********************</div>
      )}
    </>
  );
};

const HeadingProperties = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={BackgroundImage} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...HeadingProperties}>
          Delicious.Juicy
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...HeadingProperties}>
          Levish.Taste
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...HeadingProperties}>
          Craving for Everyone
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bg={'blackAlpha.600'} color={'white'} {...HeadingProperties}>
          Love each bite
        </Heading>
      </Box>
    </Carousel>
  );
};

export default Home;
