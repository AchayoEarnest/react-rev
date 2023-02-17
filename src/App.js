import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import PrevCount from './components/PrevCount';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      <PrevCount />
    </div>
  );
}

export default App;
