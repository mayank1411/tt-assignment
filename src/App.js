import './App.css';
import Home from './Components/Home/Home';
import MidLine from './Components/MidLine/MidLine';
import NavBar from './Components/Nav-bar/NavBar';
import Posts from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
     <div>
     <NavBar/>
     <Home/>
     </div>
     <MidLine/>
     <Posts/>
    </div>
  );
}

export default App;
