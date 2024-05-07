import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" padding="4" borderTop="1px" borderColor="gray.200" textAlign="center">
      <Text fontSize="sm" color="brand.900">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights Reserved.
      </Text>
    </Box>
  );
};

export default Footer;
