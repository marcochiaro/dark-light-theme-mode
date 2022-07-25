import { LayoutCards } from "./components/LayourCard";
import { Switch } from "./components/Switch";
import { Title } from "./components/Title";

const App = () => {
  return (
    <div className="container">
      <Title />
      <Switch />
      <LayoutCards />
    </div>
  );
};
export default App;
