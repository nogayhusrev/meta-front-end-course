import React from "react";
import { HStack, VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      padding={4}
      borderRadius="md"
      boxShadow="md"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={imageSrc()} alt={title} borderRadius="md" mb={4} />
      <VStack spacing={2} align="start">
        <Heading as="h2" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack justify="space-between" mt={4}>
        <Text color="blue.500" fontWeight="bold">
          Explore Project
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
