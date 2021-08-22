import './App.css';
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"

function App() {
  return (
    <div className="app">
        <Header />
        <div className="container">
          <Aside />
        </div>
    </div>
  );
}

export default App;
