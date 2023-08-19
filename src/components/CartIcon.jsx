// src/components/CartIcon.jsx
import React from 'react';
import { Box, Badge, IconButton, useToast } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartIcon = ({ cartItems }) => {
  const toast = useToast();

  const handleCartClick = () => {
    // Display the added items in a toast notification
    if (cartItems.length > 0) {
      toast({
        title: 'Added to Cart',
        description: cartItems.map(item => item.foodName).join(', '),
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Cart is empty',
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <IconButton
        aria-label="Cart"
        icon={<AiOutlineShoppingCart />}
        onClick={handleCartClick}
      />
      {cartItems.length > 0 && (
        <Badge colorScheme="blue" position="absolute" top="-3px" right="-2px">
          {cartItems.length}
        </Badge>
      )}
    </Box>
  );
};

export default CartIcon;
