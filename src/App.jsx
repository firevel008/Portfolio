import React, { useState, useEffect } from 'react';
import './App.css';
import RoutingPage from './components/Router/RoutingPage';
import SideBar from './components/SideBar/SideBar';
import Header from './components/Header/Header';
import { useSelector } from 'react-redux';

function App() {
  //const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(true);
  const isAuthenticatedUser = useSelector((state) => state.auth.isAuthenticated);

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
        {/* Sidebar */}
        {isAuthenticatedUser && <SideBar isOpen={isOpen} />}
        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          {isAuthenticatedUser && <Header setIsOpen={setIsOpen} />}
          {/* Content */}
          <main className="p-6 flex-1 bg-gray-100">
            <RoutingPage />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
