import { Box, Container, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Financial Times
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Your trusted source for financial news and analysis.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Top Stories
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
              <HStack spacing={4}>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://via.placeholder.com/100"
                  alt="Story Image"
                />
                <VStack align="start">
                  <Heading as="h3" size="md">
                    Story Title 1
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </Text>
                </VStack>
              </HStack>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
              <HStack spacing={4}>
                <Image
                  boxSize="100px"
                  objectFit="cover"
                  src="https://via.placeholder.com/100"
                  alt="Story Image"
                />
                <VStack align="start">
                  <Heading as="h3" size="md">
                    Story Title 2
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </Text>
                </VStack>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center">
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <FaLinkedin size="24px" />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;