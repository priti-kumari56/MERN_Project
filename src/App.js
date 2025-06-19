import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useState } from "react";


// function App() {
//   return (
//     <div className="container text-center">
//       <h1>Welcome to MERN Projects</h1>
//     </div>
//   );
// }

// export default App;

function App() {
  //Tracking user details in App because app is the component which decides
  //where to navigate based on the current route and it needs to know whether
  //the user is logged in or not
  const [userDetails, setUserDetails] = useState(null);

  //This function takes new value of userDetails and update it using setUserDetails function.
  const updateUserDetails = (updatedData) => {
    setUserDetails(updatedData);
  };
  return (
    <Routes>
      <Route path="/" element={userDetails ?
        <Navigate to='/dashboard' /> :
        <AppLayout>
          <Home />
        </AppLayout>
      } />
      {/*we are passing updateUserDetails function to login because thats where 
      we'll get user information are authentication */}
      <Route path="/login" element={userDetails ?
        <Navigate to='/dashboard' /> :
        <AppLayout>
          <Login updateUserDetails={updateUserDetails} />
        </AppLayout>
      } />

      <Route path="/dashboard" element={userDetails ?
        <Dashboard /> :
        <Navigate to='/login' />
      } />
    </Routes>
  );
}

export default App;