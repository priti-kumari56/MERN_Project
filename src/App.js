import React from 'react';
import {Route,Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import AppLayout from './layout/AppLayout';

// function App() {
//   return (
//     <div className="container text-center">
//       <h1>Welcome to MERN Projects</h1>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout><Home /></AppLayout>} />
      <Route path="/login" element={<AppLayout><Login /></AppLayout>} />
    </Routes>
  );
}

export default App;