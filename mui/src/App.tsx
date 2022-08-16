import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiBox from "./components/MuiLayout";
import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadio from "./components/MuiRadio";
import MuiRating from "./components/MuiRating";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextfields from "./components/MuiTextfields";
import MuiTypography from "./components/MuiTypography";
import MuiCard from "./components/MuiCard";
import MuiAccordian from "./components/MuiAccordian";
import MuiImageList from "./components/MuiImageList";

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
      <MuiRating />
      <MuiAutocomplete />
      <MuiBox />
      <MuiCard />
      <MuiAccordian />
      <MuiImageList />
    </div>
  );
};

export default App;
