import { useState, useEffect } from "react";
import {
  Input,
  Button,
  Box,
  Stack,
  Tag,
  TagLabel,
  TagCloseButton,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);

  const inputBg = useColorModeValue("whiteAlpha.900", "whiteAlpha.200");
  const tagBg = useColorModeValue("gray.200", "gray.600");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentSearches") || "[]");
    setRecentSearches(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      const updatedSearches = [
        ...new Set([city.trim(), ...recentSearches]),
      ].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
      setCity("");
    }
  };

  const handleRecentSearch = (recentCity) => {
    setCity(recentCity);
    onSearch(recentCity);
  };

  const removeSearch = (cityToRemove) => {
    const updated = recentSearches.filter((c) => c !== cityToRemove);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  return (
    <Box mb={6}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            bg={inputBg}
            borderRadius="xl"
            boxShadow="md"
            _focus={{ borderColor: "blue.400", boxShadow: "0 0 0 2px #4299e1" }}
          />
          <Button
            type="submit"
            colorScheme="blue"
            px={6}
            borderRadius="xl"
            leftIcon={<SearchIcon />}
          >
            Search
          </Button>
        </Stack>
      </form>

      {recentSearches.length > 0 && (
        <Box mt={4}>
          <Heading size="sm" mb={2} opacity={0.8}>
            Recent Searches:
          </Heading>
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {recentSearches.map((recentCity, index) => (
              <Tag
                key={index}
                size="lg"
                borderRadius="full"
                variant="solid"
                bg={tagBg}
                cursor="pointer"
                onClick={() => handleRecentSearch(recentCity)}
              >
                <TagLabel>{recentCity}</TagLabel>
                <TagCloseButton
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSearch(recentCity);
                  }}
                />
              </Tag>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
    