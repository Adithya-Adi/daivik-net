import React from 'react';
import { Box, Flex, Link, Stack, Image } from '@chakra-ui/react';
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  const location = useLocation();

  return (
    <Flex p="4" alignItems="center" justifyContent="space-between" bg={'gray.800'} boxShadow="md" flexDirection={{ base: 'column', md: 'row' }}>
      <Flex alignItems="center">
        <Image src={logo} alt="DaivikNet Logo" width="200px" />
      </Flex>
      <Stack
        spacing={4}
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        mt={{ base: 4, md: 0 }}
      >
        <Box mx="4">
          <Link
            href="/"
            fontSize="lg"
            color={location.pathname === "/" ? 'gray.200' : '#fd7736'}
            _hover={{ textDecoration: 'none', color: location.pathname === "/" ? 'black' : 'white' }}
            bg={location.pathname === "/" ? "#fd7736" : ""}
            p={2}
            borderRadius={"10%"}
          >
            Home
          </Link>
        </Box>
        <Box mx="4">
          <Link
            href="/gallery"
            fontSize="lg"
            color={location.pathname === "/gallery" ? 'gray.200' : '#fd7736'}
            _hover={{ textDecoration: 'none', color: location.pathname === "/gallery" ? 'black' : 'white' }}
            bg={location.pathname === "/gallery" ? "#fd7736" : ""}
            p={2} borderRadius={"10%"}
          >
            Gallery
          </Link>
        </Box>
        <Box mx="4">
          <Link
            href="/login"
            fontSize="lg"
            color={location.pathname === "/login" ? 'gray.200' : '#fd7736'}
            _hover={{ textDecoration: 'none', color: location.pathname === "/login" ? 'black' : 'white' }}
            bg={location.pathname === "/login" ? "#fd7736" : ""}
            p={2}
            borderRadius={"10%"}
          >
            Login
          </Link>
        </Box>
      </Stack>
    </Flex>
  );
};

export default NavBar;
