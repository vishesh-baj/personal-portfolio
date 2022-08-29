import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";
import NewCakeCOntainer from "./components/NewCakeCOntainer";
import IcecreamContainer from "./components/IcecreamContainer";
import ItemContainer from "./components/ItemContainer";
import store from "./store";
import UserContainer from "./components/UserContainer";

const App = () => {
  return (
    <Provider store={store}>
      {/* <HooksCakeContainer /> */}
      {/* <JuiceContainer /> */}
      {/* <NewCakeCOntainer /> */}
      {/* <IcecreamContainer /> */}
      {/* <ItemContainer cake /> */}
      {/* <ItemContainer /> */}
      <UserContainer />
    </Provider>
  );
};

export default App;
