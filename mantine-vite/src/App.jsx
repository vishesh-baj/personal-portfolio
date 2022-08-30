import "./App.css";
import {
  Button,
  ColorSchemeProvider,
  Loader,
  MantineProvider,
  Paper,
  Text,
} from "@mantine/core";
import Cards from "./components/Cards";
import LightDarkButton from "./components/LightDarkButton";

function App() {
  return (
    <div className="App">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider theme={colorScheme}>
          <Cards />
          <LightDarkButton />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default App;
