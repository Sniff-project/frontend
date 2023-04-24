import "./Styles/App.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import AddPet from './Pages/AddPet';
import SingUp from './Pages/SingUp';
import About from './Pages/About';
import Profile from "./Pages/Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/addPet" element={<AddPet />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
