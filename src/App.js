require('events').EventEmitter.prototype._maxListeners = 0;
import './App.css';
import Routes from "./Routes/Routes"

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
