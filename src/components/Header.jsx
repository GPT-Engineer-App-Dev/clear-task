import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" width="full" padding="4" borderBottom="1px" borderColor="gray.200" textAlign="center">
      <Heading as="h1" size="lg">
        My Todo App
      </Heading>
    </Box>
  );
};

export default Header;
