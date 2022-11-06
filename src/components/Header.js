import React from "react";

import { Flex, Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={2}
      bg="white.500"
      color="blackAlpha.900"
      borderBottom="1px solid #CBD5E0"
    >
      <Box></Box>
      <Box>
        <Heading as="h2" size="xl">
          Detection
        </Heading>
      </Box>
      <Box></Box>
    </Flex>
  );
};

export default Header;
