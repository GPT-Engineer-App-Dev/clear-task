import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="header" width="full" padding="4" borderBottom="1px" borderColor="gray.200" textAlign="center">
      <Heading as="h1" size="lg" color="brand.900">
        Your Task Organizer
      </Heading>
    </Box>
  );
};

export default Header;
