import { Box, Text, Image, useColorModeValue, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const cardBg = useColorModeValue("whiteAlpha.800", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const shadow = useColorModeValue("xl", "dark-lg");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        p={6}
        borderRadius="2xl"
        bg={cardBg}
        color={textColor}
        boxShadow={shadow}
        backdropFilter="blur(12px)"
      >
        <Stack direction={{ base: "column", md: "row" }} spacing={6} align="center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt="Weather icon"
            boxSize="120px"
          />
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize="3xl" fontWeight="bold">
              {data.name}
            </Text>
            <Text fontSize="lg" textTransform="capitalize" mb={2}>
              {data.weather[0].description}
            </Text>
            <Text fontSize="2xl" fontWeight="semibold">
              🌡 {Math.round(data.main.temp)}°C
            </Text>
            <Text fontSize="md">💧 Humidity: {data.main.humidity}%</Text>
            <Text fontSize="md">🌬 Wind: {data.wind.speed} m/s</Text>
          </Box>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default CurrentWeather;
