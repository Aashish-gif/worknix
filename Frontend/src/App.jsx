
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home"; // Ensure correct import path
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Community from "./components/Community/community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action'
// function App() {
//     return (
//         <Router>
//             <Routes>
            
//                 <Route path="/" element={<Login />} />
//                 <Route path="/signup" element={<Signup />} />
//                 <Route path="/home" element={<Home />} />
//                 <Route path="/community" element={<Community />} />
//                 <Route path="/todays-stats" element={<TodaysStats />} />
//                 <Route path="/user-profile" element={<UserProfile />} />
//                 <Route path="/action" element={<Action />} />

//             </Routes>
//         </Router>
//     );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/community";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action';
// import ProtectedRoute from "./components/ProtectedRoute";  // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/action"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from './components/TodaysStats/TodaysStats';
// import UserProfile from './components/UserProfile/UserProfile';
// import Action from './components/Actions.jsx/Action';
// import WorkflowPage from './components/Workflow/WorkflowPage'; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute";  // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/community"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/action"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login/Login";
// import Signup from "./components/Signup/Signup";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from "./components/TodaysStats/TodaysStats";
// import UserProfile from "./components/UserProfile/UserProfile";
// import Action from "./components/Actions.jsx/Action";
// import WorkflowPage from "./components/Workflow/Workflow"; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
        
//         {/* Community Route Fix: Allow nested routes */}
//         <Route
//           path="/community/*"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/action"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "./components/Login/Login";
// // import Signup from "./components/Signup/Signup";
//  import Auth from "./components/Auth/Auth"
// import Home from "./components/Home/Home";
// // import { Home } from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from "./components/TodaysStats/TodaysStats";
// import UserProfile from "./components/UserProfile/UserProfile";
// import Action from "./components/Action/Action";
// import WorkflowPage from "./components/Workflow/Workflow"; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct
// import Attendance from "./components/Attendance/Attendance"; // Import the Workflow component


// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Auth/>} />
//         {/* <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} /> */}

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
        
//         {/* Community Route Fix: Allow nested routes */}
//         <Route
//           path="/community/*"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/actions"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow/*"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "./components/Login/Login";
// // import Signup from "./components/Signup/Signup";
//  import Auth from "./components/Auth/Auth"
// // import Home from "./components/Home/Home";
// import  Home  from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from "./components/TodaysStats/TodaysStats";
// import UserProfile from "./components/UserProfile/UserProfile";
// import Action from "./components/Action/Action";
// import WorkflowPage from "./components/Workflow/Workflow"; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct
// import Attendance from "./components/Attendance/Attendance"; // Import the Attendance component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Auth/>} />
//         {/* <Route path="/" element={<Login />} />
//         <Route path="/signup" element={<Signup />} /> */}

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />
        
//         {/* Community Route Fix: Allow nested routes */}
//         <Route
//           path="/community/*"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/actions"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow/*"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/attendance"
//           element={
//             <ProtectedRoute>
//               <Attendance />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // Import necessary components
// import Auth from "./components/Auth/Auth";
// import Home from "./components/Home/Home";
// import Community from "./components/Community/Community";
// import TodaysStats from "./components/TodaysStats/TodaysStats";
// import UserProfile from "./components/UserProfile/UserProfile";
// import Action from "./components/Action/Action";
// import WorkflowPage from "./components/Workflow/Workflow"; // Import the Workflow component
// import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct
// import Attendance from "./components/Attendance/Attendance"; // Import the Attendance component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Auth />} />

//         {/* Protected Routes */}
//         <Route
//           path="/home"
//           element={
//             <ProtectedRoute>
//               <Home />
//             </ProtectedRoute>
//           }
//         />

//         {/* Community Route: Allow nested routes */}
//         <Route
//           path="/community/*"
//           element={
//             <ProtectedRoute>
//               <Community />
//             </ProtectedRoute>
//           }
//         />

//         {/* Other protected routes */}
//         <Route
//           path="/todays-stats"
//           element={
//             <ProtectedRoute>
//               <TodaysStats />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/user-profile"
//           element={
//             <ProtectedRoute>
//               <UserProfile />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/actions"
//           element={
//             <ProtectedRoute>
//               <Action />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/workflow/*"
//           element={
//             <ProtectedRoute>
//               <WorkflowPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/attendance"
//           element={
//             <ProtectedRoute>
//               <Attendance />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// App.jsx


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext"; // Import the UserProvider
import LoginForm from "./components/Auth/LoginForm"; // Your LoginForm component
import Home from "./components/Home/Home"; // Your Home component
import Community from "./components/Community/Community"; // Your Community component
import TodaysStats from "./components/TodaysStats/TodaysStats";
import UserProfile from "./components/UserProfile/UserProfile";
import Action from "./components/Action/Action";
import WorkflowPage from "./components/Workflow/Workflow"; // Your Workflow component
import ProtectedRoute from "./components/ProtectedRoute"; // Ensure the path is correct
import Attendance from "./components/Attendance/Attendance"; // Your Attendance component
import { SignupForm } from "./components/Auth/SignupForm";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
function App() {
  return (
    <UserProvider> {/* Wrap the entire app with UserProvider */}
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/Signup" element={<SignupForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
           <Route path="/reset-password/:token" element={<ResetPassword />} />

          {/* Protected Routes */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Community Route */}
          <Route
            path="/community/*"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />

          {/* Other protected routes */}
          <Route
            path="/todays-stats"
            element={
              <ProtectedRoute>
                <TodaysStats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-profile"
            element={
              <ProtectedRoute>
                <UserProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/actions"
            element={
              <ProtectedRoute>
                <Action />
              </ProtectedRoute>
            }
          />
          <Route
            path="/workflow/*"
            element={
              <ProtectedRoute>
                <WorkflowPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attendance"
            element={
              <ProtectedRoute>
                <Attendance />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
