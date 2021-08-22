import './App.css';
import Header from "./components/Header/Header"
import Aside from "./components/Aside/Aside"
import Main from './components/Main/Main';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="container">
          <Aside />
          <Main />
        </div>
    </div>
  );
}

export default App;
