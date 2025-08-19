import { Box, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ForecastCard = ({ data }) => {
  const date = new Date(data.dt * 1000).toLocaleDateString();

  const cardBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const shadow = useColorModeValue("md", "dark-lg");

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        p={5}
        borderRadius="2xl"
        bg={cardBg}
        color={textColor}
        boxShadow={shadow}
        backdropFilter="blur(10px)"
        textAlign="center"
      >
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          {date}
        </Text>
        <Image
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather icon"
          boxSize="70px"
          mx="auto"
          mb={2}
        />
        <Text fontSize="md" textTransform="capitalize">
          {data.weather[0].description}
        </Text>
        <Text fontSize="lg" fontWeight="semibold" mt={1}>
          🌡 {Math.round(data.main.temp)}°C
        </Text>
      </Box>
    </motion.div>
  );
};

export default ForecastCard;
