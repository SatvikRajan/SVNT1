import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import { CareersPage } from './pages/Carrer';
import CaseStudies from './pages/CaseStudies'
import { About } from './pages/About';
import Services from './pages/Services';
import Admin from './pages/Admin';
import AdminPage from './pages/AdminPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="casestudies" element={<MainLayout><CaseStudies /></MainLayout>} />
        <Route path="careers" element={<MainLayout><CareersPage /></MainLayout>} />
        <Route path="about" element={<MainLayout><About /></MainLayout>} />
        <Route path="services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="admin/*" element={<Admin />} />
        <Route path="admin-main" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const MainLayout = ({ children }) => (
  <>
    {/* <Navbar /> */}
    {children}
    <Footer />
  </>
);

export default App;