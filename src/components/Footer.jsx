import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" padding="4" borderTop="1px" borderColor="gray.200" textAlign="center">
      <Text fontSize="sm">&copy; {new Date().getFullYear()} My Company, Inc. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
