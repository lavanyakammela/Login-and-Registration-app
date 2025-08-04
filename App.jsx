import { Routes, Route, Navigate } from 'react-router-dom'; // ✅ Added Navigate
import Index from './Pages/Index';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;