import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeCOntainer from "./components/NewCakeCOntainer";
import IcecreamContainer from "./components/IcecreamContainer";
import ItemContainer from "./components/ItemContainer";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      {/* <HooksCakeContainer /> */}
      {/* <JuiceContainer /> */}
      {/* <NewCakeCOntainer /> */}
      {/* <IcecreamContainer /> */}
      <ItemContainer cake />
      <ItemContainer />
    </Provider>
  );
};

export default App;
