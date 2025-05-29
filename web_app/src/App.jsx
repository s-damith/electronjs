import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import ConfigPage from './pages/Configpage';
import InstallPage from './pages/Installpage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/install" element={<InstallPage />} />
      </Routes>
    </HashRouter>   
  )
}

export default App
