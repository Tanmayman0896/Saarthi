import './App.css';
import './index.css';
import './mic.css';
import './i18n'; // Initialize i18n
import Header from './MyComponents/Header';
import Footer from './MyPages/Footer';
import Home from './MyPages/Home';
import Hero from './MyPages/Hero';
import Coursecat from './MyPages/Coursecat';
import Aboutus from './MyPages/Aboutus';
import Donation from './MyPages/Donation';
import Ngoenroll from './MyComponents/Ngoenroll';
// import Career from './MyPages/Career';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { Navigate} from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import  Videos  from './MyComponents/Videos';
import Sidebarvideo from './MyComponents/Sidebarvideos';
import { useTranslation } from 'react-i18next'
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Lead from "./MyComponents/leaders"
import Login from './MyComponents/login'
import Popup from './MyComponents/popup'
import Banner from './MyComponents/banner'
import Profile from './MyPages/profile'
import Science from './MyPages/Science'
import Math from './MyPages/mathematics'
import English from './MyPages/English'
import vol from "./images/volume.png"
import VoiceNav from "./MyComponents/VoiceNav"
import FirebaseErrorBoundary from './components/FirebaseErrorBoundary';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { inject } from '@vercel/analytics';
inject();

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/login';
  
  return (
    <div className='App'>
      {!isLoginPage && <Header />}
      <VoiceNav/>
      <Routes>
        <Route path="/" element={<ProtectedRoute requireAuth={false}><Login/></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Hero/></ProtectedRoute>} />
        <Route path="/coursecat" element={<ProtectedRoute><Coursecat/></ProtectedRoute>} />
        <Route path="/recruiter" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/aboutus" element={<ProtectedRoute><Aboutus/></ProtectedRoute>} />
        <Route path="/ngoenroll" element={<ProtectedRoute><Ngoenroll/></ProtectedRoute>} />
        <Route path="/donation" element={<ProtectedRoute><Donation/></ProtectedRoute>} />
        <Route path="/popup" element={<ProtectedRoute><Popup/></ProtectedRoute>} />
        <Route path="/sidebarvideo" element={<ProtectedRoute><Sidebarvideo/></ProtectedRoute>} />
        <Route path="/video" element={<ProtectedRoute><Videos/></ProtectedRoute>} />
        <Route path="/videos" element={<ProtectedRoute><Videos/></ProtectedRoute>} />
        <Route path="/login" element={<ProtectedRoute requireAuth={false}><Login/></ProtectedRoute>}/>
        <Route path="/leaders" element={<ProtectedRoute><Lead/></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path="/banner" element={<ProtectedRoute><Banner/></ProtectedRoute>}/>
        <Route path="/science" element={<ProtectedRoute><Science/></ProtectedRoute>}/>
        <Route path="/mathematics" element={<ProtectedRoute><Math/></ProtectedRoute>}/>
        <Route path="/english" element={<ProtectedRoute><English/></ProtectedRoute>}/>  
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  
  const commands = [
    {
      command: "open *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "go to *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/" + website.split(" ").join(""));
      },
    },
    {
      command: "open courses",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/coursecat");
      },
    },
    {
      command: "enroll for *",
      callback: (website) => {
        window.open("http://shikshaedu.vercel.app/videos");
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "stop",
      callback: () => {
        stopHandle();
      },
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: false,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };  return (
   <ThemeProvider>
     <AuthProvider>
       <LanguageProvider>         <FirebaseErrorBoundary>
           <Router>
             <AppContent />
           </Router>
         </FirebaseErrorBoundary>
   </LanguageProvider>
   </AuthProvider>
   </ThemeProvider>
   
  );
}

export default App;
