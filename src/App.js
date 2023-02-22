import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import PrevCount from "./components/PrevCount";
import HookThree from "./components/HookThree";
import HookArray from "./components/HookArray";
import EffectHook from "./EffectHook";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter />
      <PrevCount />
      <HookThree />
      <HookArray />
      <HookThree /> */}
      <EffectHook />
    </div>
  );
}

export default App;
