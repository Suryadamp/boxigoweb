
import './App.css';
// import './Components/Sidebar/SideBar';
import SideBar from './Components/Sidebar/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moves from './Pages/Moves/Moves';
import Profile from './Pages/Profile/Profile';
import Quote from './Pages/Quote/Quote';
import Logout from './Pages/Logout/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <div className="content">
          <Routes>
          <Route path="/moves" element={<Moves />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<h1>Hello</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
