import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <Flex p="4" alignItems="center" justifyContent="space-between" bg={'gray.800'} boxShadow="md">
      <Flex alignItems="center">
        <Link href="/" fontWeight="bold" fontSize="xl" color={'gray.200'} _hover={{ textDecoration: 'none', color: 'blue.500' }}>
          DaivikNet
        </Link>
      </Flex>
      <Flex alignItems="center">
        <Box mx="4">
          <Link
            href="/"
            fontSize="lg"
            color={location.pathname === "/" ? 'gray.800' : 'gray.200'}
            _hover={{ textDecoration: 'none', color: 'blue.500' }}
            bg={location.pathname === "/" ? "white" : ""}
            p={4}
            borderRadius={"10%"}
          >
            Home
          </Link>
        </Box>
        <Box mx="4">
          <Link
            href="/gallery"
            fontSize="lg"
            color={location.pathname === "/gallery" ? 'gray.800' : 'gray.200'}
            _hover={{ textDecoration: 'none', color: 'blue.500' }}
            bg={location.pathname === "/gallery" ? "white" : ""}
            p={4} borderRadius={"10%"}
          >
            Gallery
          </Link>
        </Box>
        <Box mx="4">
          <Link
            href="/login"
            fontSize="lg"
            color={location.pathname === "/login" ? 'gray.800' : 'gray.200'}
            _hover={{ textDecoration: 'none', color: 'blue.500' }}
            bg={location.pathname === "/login" ? "white" : ""}
            p={4}
            borderRadius={"10%"}
          >
            Login
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default NavBar;
