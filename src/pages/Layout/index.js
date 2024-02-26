import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box bg="#f0f0f0" minH="100vh">
      {/* Title bar */}
      <Flex
        as="header"
        align="center"
        justify="center"
        bg="#333"
        color="white"
        h="60px"
        boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
      >
        <Heading as="h1" size="lg">
          Your Chakra UI App
        </Heading>
      </Flex>

      {/* Main content */}
      <Box p="4">{children}</Box>
    </Box>
  );
};

export default Layout;
