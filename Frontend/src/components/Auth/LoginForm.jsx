// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && <motion.div className="text-red-600 bg-red-100 p-2 rounded-md">{errorMessage}</motion.div>}
//         <input type="email" placeholder="Email" className="input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
//         <div className="relative">
//           <input type={showPassword ? "text" : "password"} placeholder="Password" className="input" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
//           <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </div>
//         <motion.button type="submit" className="btn" disabled={isLoading}>{isLoading ? <div className="loader"></div> : "Login"}</motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//           console.log("Token stored:", sessionStorage.getItem("token")); // Debugging
//           setTimeout(() => navigate("/home"), 300); // Small delay before navigating
//         }
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json();

//       if (response.ok) {
//         console.log("✅ Login successful:", data);

//         if (data.token) {
//           sessionStorage.setItem("token", data.token);
//           console.log("✅ Token stored:", sessionStorage.getItem("token"));

//           // 🚀 Force Navigation with Refresh
//           navigate("/home", { replace: true });
//           setTimeout(() => {
//             window.location.reload();
//           }, 500);
//         }
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("❌ Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";

// export function LoginForm() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           sessionStorage.setItem("username", data.user.username); // Store username
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }




// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext"; // Import the context

// export function LoginForm() {
//   const { setUsername } = useContext(UserContext); // Access setUsername from context
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("username", data.user.username); // Store username
//           setUsername(data.user.username); // Set the username in the context
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }


// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext"; // Import the context

// function LoginForm() {
//   const { setUsername } = useContext(UserContext); // Access setUsername from context
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await fetch(
//         "https://worknix-lgin-and-signup.onrender.com/login",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("username", data.user.username); // Store username
//           setUsername(data.user.username); // Set the username in the context
//         }
//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// export default LoginForm;  // Default export here
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUsername } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     role: "employee", // Default role
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;
//       if (response.status === 200) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("username", data.user.username);
//           setUsername(data.user.username);
//         }
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.role}
//             onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// export default LoginForm;

// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext"; // Import the context
// import axios from "axios"; // Import axios

// function LoginForm() {
//   const { setUsername } = useContext(UserContext); // Access setUsername from context
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee", // Default selection
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data; // Extract data from response

//       if (response.status === 200) {
//         console.log("Login successful:", data);
//         if (data.token) {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("userType", data.userType); // Store user type

//           // Assuming backend sends `data.name` (if not, replace it with the correct field)
//           const username = data.name || "User"; // Fallback if name is missing
//           localStorage.setItem("username", username);
//           setUsername(username); // Set in context
//         }

//         navigate("/home"); // Redirect user after login
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const inputClasses =
//     "w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200";
//   const buttonClasses =
//     "w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden";

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         {/* User Type Selection */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className={inputClasses}
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         {/* Email Input */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className={inputClasses}
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             required
//           />
//         </motion.div>

//         {/* Password Input */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.1 }}
//           className="relative"
//         >
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className={inputClasses}
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         {/* Remember Me & Forgot Password */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.2 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a
//             href="#"
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </a>
//         </motion.div>

//         {/* Submit Button */}
//         <motion.button
//           type="submit"
//           className={buttonClasses}
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: 0.3 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// export default LoginForm; // Default export here
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUsername } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         // ✅ Extract user details from backend response
//         const userId = data.userId; // Comes from backend
//         const username = data.name || "User";

//         // ✅ Store in localStorage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("username", username);
//         setUsername(username);

//         // ✅ Alert Notification with User ID
//         alert(`Login successful! User ID: ${userId}`);

//         // ✅ Redirect after alert
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* ✅ Error Message */}
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         {/* User Type Selection */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">Select User Type</label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         {/* Email Input */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         {/* Password Input */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         {/* Remember Me & Forgot Password */}
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
//           <label className="flex items-center">
//             <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors" />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a href="#" className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium">
//             Forgot Password?
//           </a>
//         </motion.div>

//         {/* Submit Button */}
//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// // export default LoginForm;
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUsername } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         const userId = data.userId;
//         const username = data.name || "User";

//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("username", username);
//         setUsername(username);

//         alert(`Login successful! User ID: ${userId}`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 bg-red-100 p-2 rounded-md">
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">Select User Type</label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
//           <label className="flex items-center">
//             <input type="checkbox" className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors" />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <a href="#" className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium">Forgot Password?</a>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Login"}
//         </motion.button>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mt-4">
//           <p className="text-gray-600">Don't have an account? 
//             <span 
//               onClick={() => navigate("/signup")} 
//               className="text-teal-600 font-medium cursor-pointer hover:underline"
//             >   Sign up</span>
//           </p>
//         </motion.div>
//       </form>
//     </AuthLayout>
//   );
// }

// export default LoginForm;
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUsername } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [resetEmail, setResetEmail] = useState("");
//   const [isResetModalOpen, setIsResetModalOpen] = useState(false);
//   const [resetSuccessMessage, setResetSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // Handle Password Reset Request
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       setErrorMessage("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-reset-password.onrender.com/api/password-reset",
//         { email: resetEmail }
//       );

//       setResetSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error resetting password."
//       );
//     }
//   };

//   // Handle Login Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         const userId = data.userId;
//         const username = data.name || "User";

//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("username", username);
//         setUsername(username);

//         alert(`Login successful! User ID: ${userId}`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <button
//             type="button"
//             onClick={() => setIsResetModalOpen(true)}
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>

//       {/* Password Reset Modal */}
//       {isResetModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">Reset Password</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//             />
//             <button
//               onClick={handlePasswordReset}
//               className="w-full bg-teal-600 text-white py-2 mt-3 rounded-lg hover:bg-teal-700"
//             >
//               Send Reset Link
//             </button>
//             <button
//               onClick={() => setIsResetModalOpen(false)}
//               className="mt-2 text-gray-600 underline"
//             >
//               Close
//             </button>
//             {resetSuccessMessage && <p className="text-green-600">{resetSuccessMessage}</p>}
//           </div>
//         </div>
//       )}
//     </AuthLayout>
//   );
// }

// export default LoginForm;
// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUsername } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [resetEmail, setResetEmail] = useState("");
//   const [isResetModalOpen, setIsResetModalOpen] = useState(false);
//   const [resetSuccessMessage, setResetSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Handle Password Reset Request
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       setErrorMessage("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/password-reset",
//         { email: resetEmail }
//       );

//       setResetSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error resetting password."
//       );
//     }
//   };

//   // ✅ Handle Login Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         const userId = data.userId;
//         const username = data.name || "User";

//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("username", username);
//         setUsername(username);

//         alert(`Login successful! User ID: ${userId}`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <button
//             type="button"
//             onClick={() => setIsResetModalOpen(true)}
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>

//       {/* Password Reset Modal */}
//       {isResetModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">Reset Password</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//             />
//             <button onClick={handlePasswordReset} className="w-full bg-teal-600 text-white py-2 mt-3 rounded-lg hover:bg-teal-700">
//               Send Reset Link
//             </button>
//             <button onClick={() => setIsResetModalOpen(false)} className="mt-2 text-gray-600 underline">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </AuthLayout>
//   );
// }

// export default LoginForm;


// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import axios from "axios";

// function LoginForm() {
//   const { setUser } = useContext(UserContext);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [resetEmail, setResetEmail] = useState("");
//   const [isResetModalOpen, setIsResetModalOpen] = useState(false);
//   const [resetSuccessMessage, setResetSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Handle Password Reset Request
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       setErrorMessage("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/password-reset",
//         { email: resetEmail }
//       );

//       setResetSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error resetting password."
//       );
//     }
//   };

//   // ✅ Handle Login Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         // Store user details in local storage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", data.userId);
//         localStorage.setItem("username", data.name || "User");
//         localStorage.setItem("email", data.email);
//         localStorage.setItem(
//           "profilePic",
//           data.profilePic || "https://via.placeholder.com/150"
//         );

//         // Update UserContext
//         setUser({
//           userId: data.userId,
//           username: data.name || "User",
//           email: data.email,
//           userType: data.userType,
//           profilePic: data.profilePic || "https://via.placeholder.com/150",
//         });

//         alert(`Login successful! Welcome, ${data.name || "User"}.`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred. Please try again.");
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <button
//             type="button"
//             onClick={() => setIsResetModalOpen(true)}
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>

//       {/* Password Reset Modal */}
//       {isResetModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">Reset Password</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//             />
//             <button onClick={handlePasswordReset} className="w-full bg-teal-600 text-white py-2 mt-3 rounded-lg hover:bg-teal-700">
//               Send Reset Link
//             </button>
//             <button onClick={() => setIsResetModalOpen(false)} className="mt-2 text-gray-600 underline">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </AuthLayout>
//   );
// }

// export default LoginForm;


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../RED/userSlice"; // Import the Redux action

// function LoginForm() {
//   const dispatch = useDispatch(); // Redux dispatch function
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [resetEmail, setResetEmail] = useState("");
//   const [isResetModalOpen, setIsResetModalOpen] = useState(false);
//   const [resetSuccessMessage, setResetSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Handle Password Reset Request
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       setErrorMessage("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/password-reset",
//         { email: resetEmail }
//       );

//       setResetSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error resetting password."
//       );
//     }
//   };

//   // ✅ Handle Login Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         // Determine the name based on user type
//         const name = data.userType === "employee" ? data.username : data.companyName;

//         // Store user details in local storage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", data.userType);
//         localStorage.setItem("userId", data.userId || data.companyId); // Use userId or companyId
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", data.email);
//         localStorage.setItem(
//           "profilePic",
//           data.profilePic || "https://via.placeholder.com/150"
//         );

//         // Dispatch the loginUser action to update Redux store
//         dispatch(
//           loginUser({
//             userId: data.userId || data.companyId, // Use userId or companyId
//             name: name, // Can be username or companyName
//             email: data.email,
//             userType: data.userType,
//             profilePic: data.profilePic || "https://via.placeholder.com/150",
//           })
//         );

//         alert(`Login successful! Welcome, ${name}.`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="flex items-center justify-between"
//         >
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="rounded border-gray-300 text-teal-600 focus:ring-teal-500 transition-colors"
//             />
//             <span className="ml-2 text-sm text-gray-600">Remember me</span>
//           </label>
//           <button
//             type="button"
//             onClick={() => setIsResetModalOpen(true)}
//             className="text-sm text-teal-600 hover:text-teal-500 transition-colors font-medium"
//           >
//             Forgot Password?
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>

//       {/* Password Reset Modal */}
//       {isResetModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-lg font-bold">Reset Password</h2>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3 mt-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//             />
//             <button onClick={handlePasswordReset} className="w-full bg-teal-600 text-white py-2 mt-3 rounded-lg hover:bg-teal-700">
//               Send Reset Link
//             </button>
//             <button onClick={() => setIsResetModalOpen(false)} className="mt-2 text-gray-600 underline">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </AuthLayout>
//   );
// }

// export default LoginForm;







// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Eye, EyeOff } from "lucide-react";
// import { AuthLayout } from "./AuthLayout";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../Redux/authSlice"; // Unified Redux action

// function LoginForm() {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     userType: "employee",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [resetEmail, setResetEmail] = useState("");
//   const [isResetModalOpen, setIsResetModalOpen] = useState(false);
//   const [resetSuccessMessage, setResetSuccessMessage] = useState("");
//   const navigate = useNavigate();

//   // ✅ Handle Password Reset Request
//   const handlePasswordReset = async () => {
//     if (!resetEmail) {
//       setErrorMessage("Please enter your email.");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/password-reset",
//         { email: resetEmail }
//       );

//       setResetSuccessMessage(response.data.message);
//       setErrorMessage("");
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error resetting password."
//       );
//     }
//   };

//   // ✅ Handle Login Submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://worknix-2.onrender.com/auth/login",
//         formData
//       );

//       const data = response.data;

//       if (response.status === 200 && data.token) {
//         console.log("Login successful:", data);

//         const userDetails = {
//           id: data.userId || data.companyId, // Use userId for employees, companyId for companies
//           username: data.username || null,
//           companyName: data.companyName || null,
//           email: data.email,
//           profilePic: data.profilePic || "https://via.placeholder.com/150",
//           userType: formData.userType,
//         };

//         // Store user details in local storage
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("userType", formData.userType);
//         localStorage.setItem("userId", userDetails.id);
//         localStorage.setItem("name", userDetails.username || userDetails.companyName);
//         localStorage.setItem("email", userDetails.email);
//         localStorage.setItem("profilePic", userDetails.profilePic);

//         // Dispatch Redux action to set user
//         dispatch(setUser(userDetails));

//         alert(`Login successful! Welcome, ${userDetails.username || userDetails.companyName}.`);
//         navigate("/home");
//       } else {
//         setErrorMessage(data.message || "Login failed. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "An error occurred. Please try again."
//       );
//       console.error("Error logging in:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <AuthLayout title="Welcome Back">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {errorMessage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-red-600 bg-red-100 p-2 rounded-md"
//           >
//             {errorMessage}
//           </motion.div>
//         )}

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <label className="block text-gray-700 font-medium mb-2">
//             Select User Type
//           </label>
//           <select
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.userType}
//             onChange={(e) =>
//               setFormData({ ...formData, userType: e.target.value })
//             }
//             required
//           >
//             <option value="employee">Employee</option>
//             <option value="company">Company</option>
//           </select>
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//           <input
//             type="email"
//             placeholder="Email or Mobile Number"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             required
//           />
//         </motion.div>

//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
//             value={formData.password}
//             onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//             required
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//         </motion.div>

//         <motion.button
//           type="submit"
//           className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
//           disabled={isLoading}
//           whileTap={{ scale: 0.98 }}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//         >
//           {isLoading ? (
//             <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//           ) : (
//             "Login"
//           )}
//         </motion.button>
//       </form>
//     </AuthLayout>
//   );
// }

// export default LoginForm;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";
import { AuthLayout } from "./AuthLayout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/authSlice"; // Adjust path as needed

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "employee", // Default to employee
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Clear previous errors

    try {
      const response = await axios.post(
        "https://worknix-2.onrender.com/auth/login",
        formData
      );

      const data = response.data;

      if (response.status === 200 && data.token) {
        console.log("Login successful:", data);

        // Construct user details based on userType
        const userDetails = {
          id: data.userId || data.companyId,
          username: data.username || null,
          companyName: data.companyName || null,
          email: data.email,
          profilePic: data.profilePic || "https://via.placeholder.com/150",
        };

        // Dispatch to Redux store with user and userType
        dispatch(
          setUser({
            user: userDetails,
            userType: formData.userType,
          })
        );

        // Store token and essential data in localStorage for persistence
        localStorage.setItem("token", data.token);
        localStorage.setItem("userType", formData.userType);
        localStorage.setItem("userId", userDetails.id);
        localStorage.setItem(
          "name",
          userDetails.username || userDetails.companyName
        );
        localStorage.setItem("email", userDetails.email);
        localStorage.setItem("profilePic", userDetails.profilePic);

        alert(
          `Login successful! Welcome, ${
            userDetails.username || userDetails.companyName
          }.`
        );
        navigate("/home");
      } else {
        setErrorMessage(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
      console.error("Error logging in:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit} className="space-y-6">
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 bg-red-100 p-2 rounded-md"
          >
            {errorMessage}
          </motion.div>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <label className="block text-gray-700 font-medium mb-2">
            Select User Type
          </label>
          <select
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            value={formData.userType}
            onChange={(e) =>
              setFormData({ ...formData, userType: e.target.value })
            }
            required
          >
            <option value="employee">Employee</option>
            <option value="company">Company</option>
          </select>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-[#008080] text-white py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
          disabled={isLoading}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Login"
          )}
        </motion.button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => navigate("/forgot-password")}
            className="text-teal-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default LoginForm;