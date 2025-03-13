import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LegalAssistantPage from './pages/LegalAssistantPage';
import LegalSearchPage from './pages/LegalSearchPage';
import LegalLiteracyPage from './pages/LegalLiteracyPage';
import FormFillingPage from './pages/FormFillingPage';
import LegalAidPage from './pages/LegalAidPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/legal-assistant" element={<LegalAssistantPage />} />
            <Route path="/legal-search" element={<LegalSearchPage />} />
            <Route path="/legal-literacy" element={<LegalLiteracyPage />} />
            <Route path="/form-filling" element={<FormFillingPage />} />
            <Route path="/legal-aid" element={<LegalAidPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;