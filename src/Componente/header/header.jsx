import { Box, Flex, HStack, Link, Button, Spacer, Text } from '@chakra-ui/react';

function Header() {
  return (
    <Box as="header" bg="white" boxShadow="md" py={4} px={8}>
      <Flex alignItems="center">
        {/* Logo */}
        <Text fontWeight="bold" fontSize="lg">B</Text>
        
        {/* Navegación */}
        <HStack as="nav" spacing={8} ml={10}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Packages</Link>
          <Link href="#">Contact</Link>
        </HStack>

        <Spacer />

        {/* Carrito */}
        <Link href="#" mr={4}>
          Cart [0]
        </Link>

        {/* Botón de consulta */}
        <Button variant="outline" colorScheme="teal">
          Free Consultation
        </Button>
      </Flex>
    </Box>
  );
}

export default Header;