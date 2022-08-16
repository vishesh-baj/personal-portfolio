import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadio from "./components/MuiRadio";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextfields from "./components/MuiTextfields";
import MuiTypography from "./components/MuiTypography";

const App = () => {
  return (
    <div>
      <MuiTypography />
      <MuiButton />
      <MuiTextfields />
      <MuiSelect />
      <MuiRadio />
      <MuiCheckbox />
      <MuiSwitch />
    </div>
  );
};

export default App;
