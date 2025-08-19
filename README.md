# Weather Dashboard

The Weather Dashboard is a responsive web application built with React and Chakra UI, providing real-time weather data and a 5-day forecast via the OpenWeatherMap API, with features like recent searches and optional geolocation. It utilizes Vite for fast development, Axios for API calls, and Framer Motion for animations, offering a modern and user-friendly interface.

## Features
- Search for current weather and 5-day forecast by city name.
- Store and display up to five recent searches using local storage.
- Responsive design with Chakra UI components.
- Optional geolocation support to fetch weather based on user location.
- Smooth animations with Framer Motion.
- Dark mode toggle (optional implementation).

## Technologies Used
- **React**: v18.3.1 - Core framework for building the single-page application.
- **Vite**: Latest - Build tool and development server with hot module replacement.
- **Chakra UI**: v2.8.2 - Component library for styling and layout.
- **Axios**: Latest - HTTP client for API requests.
- **Framer Motion**: v10.18.0 - Animation library for component transitions.
- **OpenWeatherMap API**: Data source for weather information.
- **JavaScript (ES Modules)**: Application logic and custom hooks.
- **CSS**: Managed via Chakra UI's styled-system approach.

## Prerequisites
- Node.js (v18.x or later recommended)
- npm (comes with Node.js)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard

## Install dependencies:
```bash
npm install

Create a .env file in the root directory and add your OpenWeatherMap API key:
textVITE_API_KEY=your_api_key_here

Obtain an API key from OpenWeatherMap.


Start the development server:
```bash
npm run dev

Open http://localhost:5173 in your browser.

## Usage

Enter a city name in the search bar to view its weather data.
Use the "Use My Location" button (if implemented) to fetch weather based on your location.
Toggle dark mode (if implemented) with the button.
Recent searches are displayed below the search bar for quick access.

## Deployment
To deploy the app (e.g., on Vercel):

###Build the project:
```bash
npm run build

Use a platform like Vercel:

Install the Vercel CLI: npm install -g vercel.
Run vercel and follow the prompts.
Add VITE_API_KEY as an environment variable in the deployment dashboard.



## Contributing
Feel free to fork this repository, submit issues, or create pull requests. Suggestions for new features or improvements are welcome!
License
This project is open-source under the MIT License (specify if you choose a different license).
Acknowledgments

Thanks to OpenWeatherMap for providing weather data.
Inspired by modern web development practices and React ecosystem tools.

## Next Steps

Implement geolocation for automatic location-based weather.
Add dark mode toggle for theme switching.
Enhance with hourly forecasts or additional weather details.
Optimize for performance and accessibility.
