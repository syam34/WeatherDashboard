import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import ForecastCard from "./components/ForecastCard";
import useWeather from "./hooks/useWeather";

function App() {
  const [city, setCity] = useState("");
  const { currentWeather, forecast, loading, error } = useWeather(city);
  const { toggleColorMode } = useColorMode();

  // Background gradient adapts to light/dark mode
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.50, teal.100)",
    "linear(to-r, gray.900, blue.800)"
  );
  const textColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box minH="100vh" bgGradient={bgGradient} p={6} color={textColor}>
      <VStack spacing={6} maxW="1200px" mx="auto">
        {/* App Title */}
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Weather Dashboard
        </Heading>

        {/* Toggle Button */}
        <Button
          onClick={toggleColorMode}
          borderRadius="full"
          px={6}
          py={2}
          boxShadow="lg"
          _hover={{ transform: "scale(1.05)" }}
          transition="all 0.2s ease-in-out"
        >
          Toggle Dark Mode
        </Button>

        {/* Search Bar */}
        <SearchBar onSearch={setCity} />

        {/* Loading & Error States */}
        {loading && (
          <Text textAlign="center" fontSize="lg" fontWeight="semibold">
            Loading weather data...
          </Text>
        )}
        {error && (
          <Text color="red.400" textAlign="center" fontSize="lg">
            {error}
          </Text>
        )}

        {/* Weather Data Section */}
        <Box
          w="100%"
          display="grid"
          gap={6}
          gridTemplateColumns={{ base: "1fr", md: "1fr 2fr" }}
        >
          {/* Current Weather */}
          {currentWeather && <CurrentWeather data={currentWeather} />}

          {/* Forecast */}
          {forecast.length > 0 && (
            <Box>
              <Heading as="h2" size="xl" mb={4} fontWeight="bold">
                5-Day Forecast
              </Heading>
              <Box
                display="grid"
                gap={6}
                gridTemplateColumns={{
                  base: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(3, 1fr)",
                }}
              >
                {forecast.map((item, index) => (
                  <ForecastCard key={index} data={item} />
                ))}
              </Box>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
