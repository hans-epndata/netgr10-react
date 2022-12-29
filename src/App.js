import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { DeviceProvider } from './contexts/DeviceContext';
import HomeView from './views/HomeView';

function App() {
  return ( 
      <BrowserRouter>
        <DeviceProvider>
        <Routes>
          <Route path="/" element={<HomeView />} />
        </Routes>
        </DeviceProvider>
      </BrowserRouter>
    
  );
}

export default App;
