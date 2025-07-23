

import './App.css'
import { Toaster } from 'react-hot-toast'
import Loader from './components/Loader'
import { lazy, Suspense } from "react";

//Layouts components
import RootLayout from './Layout/RootLayout'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

//Lazy-loaded pages components
const LandingPage = lazy(()=>import("./pages/LandingPage"));
const About = lazy(()=>import('./pages/About'));
const Contact = lazy(()=>import('./pages/Contact'));
const Careers = lazy(()=>import('./pages/Careers'));
const Services = lazy(()=>import('./pages/Services'));
function App() {

  return (
    <>
      {/* Toaster Configuration */}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#4caf50",
            },
          },
          error: {
            style: {
              background: "#f44336",
              color: "#fff",
              fontWeight: "bold",
              padding: "12px 20px",
              borderRadius: "8px",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#f44336",
            },
          },
        }}
        position="top-right"
        reverseOrder={false}
      />

      {/* Routing with Lazy Loading */}

      <BrowserRouter>
        <ScrollToTop/>
        <Suspense fallback={<Loader/>}>

        {/* routes */}
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/careers' element={<Careers />}/>
            <Route path='/contact' element={<Contact/>} />
          </Route>
        </Routes>

        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App
