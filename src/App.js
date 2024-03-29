import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/themes";
import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage';
import Gallery from './pages/Gallery';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
