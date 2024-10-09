import { Box, Button, Input, Text, Grid, GridItem, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import Header from './Componente/header/header';

function App() {
  return (
    <>
      <Header />

      {/* Grid responsivo */}
      <Grid 
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}  // base para pantallas pequeñas, 2 columnas para medianas en adelante
        height="100vh"
      >
        {/* Lado izquierdo con el texto */}
        <GridItem 
          bg="blue.900" 
          color="white" 
          display="flex" 
          justifyContent="center" 
          alignItems="center"
          p={4}
        >
          <Box p={8}>
            <Text 
              fontSize={{ base: "2xl", md: "3xl" }} // Tamaño del texto ajustado a pantallas pequeñas y medianas
              fontWeight="bold" 
              mb={4}
            >
              Join us in growing your business.
            </Text>
            <Text mb={4}>
              Elevate your business with Business X, a professional web template.
            </Text>
            <Button 
              colorScheme="teal" 
              size={{ base: "md", md: "lg" }} // Ajuste del tamaño del botón
            >
              Contact us
            </Button>
          </Box>
        </GridItem>

        {/* Lado derecho con el formulario */}
        <GridItem 
          display="flex" 
          justifyContent="center" 
          alignItems="center" 
          bg="gray.50"
          p={4}
        >
          <Box 
            bg="white" 
            p={8} 
            borderRadius="lg" 
            boxShadow="lg" 
            width={{ base: "100%", md: "80%" }}  // Ajuste del ancho para pantallas pequeñas y medianas
          >
            <Text 
              fontSize={{ base: "xl", md: "2xl" }}  // Tamaño del texto del formulario
              fontWeight="bold" 
              mb={4}
            >
              Get a free consultation
            </Text>
            <FormControl id="name" mb={4}>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Enter your name" />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl id="message" mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Type your message here..." />
            </FormControl>
            <Button 
              colorScheme="teal" 
              size={{ base: "md", md: "lg" }}  // Tamaño del botón según el dispositivo
              width="100%"
            >
              Get in Touch
            </Button>
          </Box>
        </GridItem>

      </Grid>
    </>
  );
}

export default App;