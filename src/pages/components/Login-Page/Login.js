// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   InputAdornment,
//   IconButton,
//   InputLabel,
//   Button,
// } from "@mui/material";
// import { Email, Lock, Visibility, VisibilityOff } from "@mui/icons-material";
// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";

// const LoginForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <div className="login-form-section-container">
//               <div className="formContainer">
//                 <h1>Login</h1>
//                 <p>Already have an account? Please, login!</p>
//                 <div className="inputContainer">
//                   <InputLabel className="inputLable">Email</InputLabel>
//                   <TextField
//                     placeholder="Enter your email"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Email sx={{ color: "#F46B5B" }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                     className="inputField"
//                   />
//                 </div>

//                 <div className="inputContainer">
//                   <InputLabel className="inputLable">Password</InputLabel>
//                   <TextField
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Lock sx={{ color: "#F46B5B" }} />
//                         </InputAdornment>
//                       ),
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             onClick={handleClickShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                             edge="end"
//                             sx={{ color: "#F46B5B" }}
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     className="inputField"
//                   />
//                 </div>

//                 <div className="mt-5 mb-4">
//                   <Button className="loginButton">
//                     Login
//                   </Button>
//                 </div>
//                 <div>
//                   <div className="row login-forget-section d-flex align-items-center">
//                     <div className="col-12 col-md-6">
//                       <div className="form-check form-check-inline">
//                         <input
//                           className="form-check-input checkbox-lg"
//                           type="checkbox"
//                           id="termsCheckbox"
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="termsCheckbox"
//                         >
//                           Remember Me
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-6 col-md-6 d-flex justify-content-end align-items-center">
//                       <p className="login-forget-section-text">
//                         Forgot password?
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row  login-with-section ">
//                   <div className="col text-center justify-content-center align-items-center d-flex">
//                     <div className="login-with-section-heading">
//                       Login With:
//                     </div>

//                     <Link href="https://www.instagram.com/">
//                       <Image
//                         src="/pics_svgs/insta-cu.svg"
//                         alt="Description of the image"
//                         width={50}
//                         height={30}
//                         className=" mx-2"
//                         style={{
//                           filter:
//                             "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
//                         }} // Apply filter to change color
//                       />
//                     </Link>
//                     <Link href="https://www.twitter.com/">
//                       <Image
//                         src="/pics_svgs/twiter-cs.svg"
//                         alt="Description of the image"
//                         width={50}
//                         height={30}
//                         className=" mx-2"
//                         style={{
//                           filter:
//                             "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
//                         }} // Apply filter to change color
//                       />
//                     </Link>
//                     <Link href="https://www.facebook.com/">
//                       <Image
//                         src="/pics_svgs/fb-cs.svg"
//                         alt="Description of the image"
//                         width={50}
//                         height={30}
//                         className=" mx-2"
//                         style={{
//                           filter:
//                             "grayscale(100%) sepia(100%) brightness(0.6) hue-rotate(145deg)",
//                         }} // Apply filter to change color
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12 col-md-6">
//             <div className="login-form-section-container">
//               <div className="formContainer">
//                 <h1>Create Account</h1>
//                 <p>Don't have an account yet? Register here!</p>
//                 <div className="inputContainer mt-4">
//                   <InputLabel className="inputLable">Email</InputLabel>
//                   <TextField
//                     placeholder="Enter your email"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Email sx={{ color: "#F46B5B" }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                     className="inputField"
//                   />
//                 </div>

//                 <div className="inputContainer mt-4">
//                   <InputLabel className="inputLable">Password</InputLabel>
//                   <TextField
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Lock sx={{ color: "#F46B5B" }} />
//                         </InputAdornment>
//                       ),
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             onClick={handleClickShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                             edge="end"
//                             sx={{ color: "#F46B5B" }}
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     className="inputField"
//                   />
//                 </div>
//                 <div className="inputContainer  mt-4 mb-5">
//                   <InputLabel className="inputLable ">Confirm Password</InputLabel>
//                   <TextField
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <Lock sx={{ color: "#F46B5B" }} />
//                         </InputAdornment>
//                       ),
//                       endAdornment: (
//                         <InputAdornment position="end">
//                           <IconButton
//                             onClick={handleClickShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                             edge="end"
//                             sx={{ color: "#F46B5B" }}
//                           >
//                             {showPassword ? <VisibilityOff /> : <Visibility />}
//                           </IconButton>
//                         </InputAdornment>
//                       ),
//                     }}
//                     className="inputField"
//                   />
//                 </div>
//                 <div className="mt-5 mb-5">
//                   <Button variant="contained" className="loginButton">
//                     Register
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default LoginForm;
import React from 'react'

const Login = () => {
  return (
    <div>
    Login page
      
    </div>
  )
}

export default Login
