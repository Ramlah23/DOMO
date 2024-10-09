import { Box, Text, Link, HStack, Stack } from '@chakra-ui/react';

function Footer() {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Stack
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        px={{ base: 4, md: 8 }}
        spacing={8}
      >
        {/* Sección de Texto */}
        <Text fontSize="lg" fontWeight="bold">B</Text>

        {/* Navegación */}
        <HStack spacing={8}>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>
            Home
          </Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>
            About
          </Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>
            Packages
          </Link>
          <Link href="#" _hover={{ textDecoration: 'underline' }}>
            Contact
          </Link>
        </HStack>

        {/* Derechos reservados */}
        <Text fontSize="sm" textAlign="center" color="gray.400">
          © 2024 Cinthia Sosa. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
}

export default Footer;