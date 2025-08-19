import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          textAlign="center"
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg="red.50"
          mt={4}
        >
          <Text fontSize="xl" fontWeight="bold" color="red.600">
            Something went wrong 😢
          </Text>
          <Text color="gray.600" mt={2}>
            {this.state.error?.message || "Unexpected error occurred."}
          </Text>
          <Button
            colorScheme="red"
            mt={4}
            onClick={this.handleReload}
          >
            Reload App
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
