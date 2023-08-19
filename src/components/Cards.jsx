import React from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Button,
  Tooltip,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import img2 from '../assets/2.jpg';

const data = {
  isNew: true,
  imageURL:
    img2,
  name: 'Wayfarer Classic',
  price: 150,
  numReviews: 34,
};

function Cards(props) {

let options = props.options;
let priceOptions = Object.keys(options);
const handleadtocart = ()=>
{
  
}




  return (
    <Flex p={50} w="full" alignItems="flex-start" justifyContent="flex-start">

      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image src={props.imgSrc} alt={`Picture of ${props.name}`} roundedTop="lg" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {props.foodName}
            </Box>
            <Tooltip label="Add to cart" bg="white" placement={'top'} color={'gray.800'} fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Button onClick={handleadtocart}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </Button>
            
              </chakra.a>
            </Tooltip>
          </Flex>

          <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              £
            </Box>
            {data.price.toFixed(2)}
          </Box>

          {/* First Select */}
          <Box mt={4}>
            <label htmlFor="quantity">Quantity:</label>
            <select id="quantity" name="quantity">
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </Box>

          {/* Second Select */}
          <Box mt={4}>
            <label htmlFor="portion">Portion:</label>
            <select id="portion" name="portion">
             {
              priceOptions.map((data)=>
              {
                return <option key={data } value={data}>{data}</option>
              })
             }
            </select>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default Cards;
