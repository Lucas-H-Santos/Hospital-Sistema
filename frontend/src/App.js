import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackgroundSVG from './components/layout/BackgroundSVG';
import ChatBot from './components/chatbot/ChatBot';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Appointment from './pages/Appointment';
import DoctorList from './pages/DoctorList';
import DoctorDetails from './pages/DoctorDetails';
import Services from './pages/Services';
import Departments from './pages/Departments';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import NewsPage from './pages/NewsPage';
import NewsDetail from './pages/NewsDetail';
import NewsManager from './components/news/NewsManager';
import NotFound from './pages/NotFound';

// Admin route protection
import PrivateRoute from './components/routing/PrivateRoute';

const App = () => {
  return (
    <Router>
      <BackgroundSVG />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Páginas principais */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:departmentId" element={<Departments />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/appointment/:doctorId" element={<Appointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* Notícias */}
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/noticias/:id" element={<NewsDetail />} />

          {/* Área logada */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/admin/news" element={<PrivateRoute><NewsManager /></PrivateRoute>} />

          {/* Página de erro 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ChatBot />
      <ToastContainer position="bottom-right" autoClose={5000} />
    </Router>
  );
};

export default App;
