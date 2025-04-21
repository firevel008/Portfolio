import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import RoutingPage from './components/Router/RoutingPage';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';
import { CircleArrowUp } from "lucide-react";

function App() {
  //const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(true);
  const isAuthenticatedUser = useSelector((state) => state.auth.isAuthenticated);
  const topRef = useRef(null);

  const srollToTop = () => {
    if (topRef.current){
      topRef.current.scrollIntoView({behavior: 'smooth' });
    }
  };

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     const authStatus = await isAuthenticated(); // Ensure this returns a Promise
  //     setIsAuthenticatedUser(authStatus);
  //   };

  //   checkAuth();
  // }, []);


  return (
    <>
      <div className="flex h-screen w-full">
        <div ref={topRef}></div>
        {/* Sidebar */}
        {isAuthenticatedUser && <SideBar isOpen={isOpen} />}
        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          {isAuthenticatedUser && <Header setIsOpen={setIsOpen} />}
          {/* Content */}
          <main className="p-6 flex-1 bg-gray-100">
            <RoutingPage />
            <button onClick={srollToTop} className='cursor-pointer' style={{position:'fixed', bottom:'20px', right:'20px'}}>
              <CircleArrowUp className="h-8 w-8" />
            </button>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
