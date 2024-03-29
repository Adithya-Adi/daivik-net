import React from "react";
import {
  Flex,
  Text,
} from "@chakra-ui/react";


const Footer = () => {
  return (
    <Flex p="4" alignItems="center" justifyContent="center" bg={'gray.800'} borderTop={"solid"}>
      <Text color="gray.200" fontSize="sm">
        © 2024 DaivikNet. All rights reserved.
      </Text  >
    </Flex>
  );
};

export default Footer;
