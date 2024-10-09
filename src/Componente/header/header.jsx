import { Box, Flex, HStack, Link, Button, Spacer, Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';  // Importa los íconos desde react-icons

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="white" boxShadow="md" py={4} px={8}>
      <Flex alignItems="center">
        {/* Logo */}
        <Text fontWeight="bold" fontSize="lg">B</Text>
        
        {/* Navegación - visible en pantallas medianas y grandes */}
        <HStack as="nav" spacing={8} ml={10} display={{ base: 'none', md: 'flex' }}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Pages</Link>
          <Link href="#">Packages</Link>
          <Link href="#">Contact</Link>
        </HStack>

        <Spacer />

        {/* Carrito - visible en pantallas medianas y grandes */}
        <Link href="#" mr={4} display={{ base: 'none', md: 'block' }}>
          Cart [0]
        </Link>

        {/* Botón de consulta - visible en pantallas medianas y grandes */}
        <Button variant="outline" colorScheme="teal" display={{ base: 'none', md: 'block' }}>
          Free Consultation
        </Button>

        {/* IconButton hamburguesa - visible solo en pantallas pequeñas */}
        <IconButton
          icon={isOpen ? <FiX /> : <FiMenu />}  // Usa los íconos de react-icons
          aria-label="Open Menu"
          display={{ base: 'block', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Menú colapsable para pantallas pequeñas */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
          <DrawerBody>
            <VStack as="nav" spacing={4} alignItems="start">
              <Link href="#" onClick={onClose}>Home</Link>
              <Link href="#" onClick={onClose}>About</Link>
              <Link href="#" onClick={onClose}>Pages</Link>
              <Link href="#" onClick={onClose}>Packages</Link>
              <Link href="#" onClick={onClose}>Contact</Link>
              <Link href="#" onClick={onClose}>Cart [0]</Link>
              <Button variant="outline" colorScheme="teal" width="100%" onClick={onClose}>
                Free Consultation
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Header;