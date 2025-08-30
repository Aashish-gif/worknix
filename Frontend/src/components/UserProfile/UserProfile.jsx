// import "./UserProfile.css";
// import User_plate from "./User_plate";
// import Footer from "../Common/Footer"; // Adjust path as per your folder structure
// import NavigationBar from "../Common/NavigationBar"; // Adjust path as per your folder structure
// import Performance from "./Performance";
// import Goals from "./Goals";
// import Batches from "./Batches";
// import CareerPath from "./CareerPath";

// const UserProfile = () => {
//   return (
//     <div className="user-profile">
//       {/* Sidebar Navigation */}
//       <NavigationBar />

//     <div id='fpage'> 
        
//           <User_plate />
//    <div id='spage'>
//     <div id='tpage'>
//           <Performance />
//           <Goals />
//           <Batches />
//           </div>
     
//           <CareerPath />
//           </div>
//           </div>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default UserProfile;

// import "./UserProfile.css";
// import User_plate from "./User_plate";
// import Footer from "../Common/Footer"; // Adjust path as per your folder structure
// import NavigationBar from "../Common/NavigationBar"; // Adjust path as per your folder structure
// import Performance from "./Performance";
// import Goals from "./Goals";
// import Batches from "./Batches";
// import CareerPath from "./CareerPath";

// const UserProfile = () => {
//   return (
//     <div className="user-profile min-h-screen bg-gray-100">
//       {/* Sidebar Navigation */}
//       <NavigationBar className="fixed top-0 left-0 w-full z-50" />

//       <div id="fpage" className="pt-20 p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* User Plate */}
//         <div className="lg:col-span-1">
//           <User_plate />
//         </div>

//         {/* Middle Section: Performance, Goals, Batches */}
//         <div id="spage" className="lg:col-span-2 grid grid-cols-1 gap-6">
//           <Performance />
//           <Goals />
//           <Batches />
//         </div>

//         {/* Right Section: Career Path */}
//         <div className="lg:col-span-1">
//           <CareerPath />
//         </div>
//       </div>

//       {/* Footer */}
//       <Footer className="mt-6" />
//     </div>
//   );
// };

// export default UserProfile;

// import "./UserProfile.css";
// import User_plate from "./User_plate";
// import Footer from "../Common/Footer";
// import NavigationBar from "../Common/NavigationBar";
// import Performance from "./Performance";
// import Goals from "./Goals";
// import Batches from "./Batches";
// import CareerPath from "./CareerPath";
// import Navbar from "./Navbar"; // Top navbar

// const UserProfile = () => {
//   return (
//     <div className="user-profile flex bg-gray-0 min-h-screen">
//       {/* Sidebar */}
//       <div className="min-h-screen fixed top-0 left-0 w-20 text-white z-0 shadow-lg hidden md:block">
//         <NavigationBar />
//       </div>

     
//         {/* Top Navbar */}
//         <div className="fixed top-0 md:left-0 left-0 right-0 bg-white shadow-md h-16 flex items-center px-6 z-40">
//           <Navbar />
//         </div>

//         {/* Main Content */}
//         <div className="mt-20 px-6 flex-1">
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Profile</h1>
//           <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {/* Left Section - User Info */}
//             <div className="md:col-span-1">
//               <User_plate />
//             </div>

//             {/* Center Section - Performance, Goals, Batches */}
//             <div className="md:col-span-2 space-y-4">
//               <Performance />
//               <Goals />
//               <Batches />
//             </div>

//             {/* Right Section - Career Path */}
//             <div className="md:col-span-1">
//               <CareerPath />
//             </div>
          
//         </div>

//         {/* Footer */}
//         <Footer className="w-full p-2 text-center mt-4" />
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import "./UserProfile.css";
import User_plate from "./User_plate";
import Footer from "../Common/Footer";
import NavigationBar from "../Common/NavigationBar"; // Fixed Sidebar
import Performance from "./performance";
import Goals from "./Goals";
import Batches from "./Batches";
import CareerPath from "./CareerPath";
import Navbar from "./Navbar"; // Top Navbar

const UserProfile = () => {
  return (
    <div className="user-profile flex bg-gray-0 min-h-screen">
    {/* Left Navigation Sidebar (Locked while scrolling) */}
    <div className="fixed top-0 left-0 h-screen w-56  z-20 overflow-y-auto">
        <NavigationBar />
      </div>

      {/* Main Content Wrapper (Shifted Right for Sidebar Space) */}
      <div className="flex-1 md:ml-0">
        {/* Top Navbar */}
        <div className="fixed top-0 left-20 right-0 bg-white shadow-md h-16 flex items-center px-6 z-40">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="mt-20 px-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">P</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Left Section - User Info */}
            <div className="md:col-span-1">
              <User_plate />
            </div>

            {/* Center Section - Performance, Goals, Batches */}
            <div className="md:col-span-2 space-y-4">
              <Performance />
              <Goals />
              <Batches />
            </div>

            {/* Right Section - Career Path */}
            <div className="md:col-span-1">
              <CareerPath />
            </div>
          </div>

          {/* Footer */}
          <Footer className="relative left-[-20px] w-full p-2 text-center mt-4" />
          </div>
      </div>
    </div>
  );
};

export default UserProfile;
