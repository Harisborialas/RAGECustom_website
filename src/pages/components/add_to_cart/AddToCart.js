// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import Navbar from "../navbar/Navbar";
// import Footer from "../footer/Footer";
// import { useRouter } from "next/router";

// const AddToCart = () => {
//   const [carts, setCarts] = useState([]);
//   const [total, setTotal] = useState(0);
//   const router = useRouter();

//   useEffect(() => {
//     const cartData = JSON.parse(localStorage.getItem("cart")) || [];
//     setCarts(cartData);
//   }, []);

//   useEffect(() => {
//     const total = carts.reduce((acc, item) => {
//       return acc + item.price * item.quantity;
//     }, 0);
//     setTotal(total);
//   }, [carts]);

//   const handleInc = (id) => {
//     const updateCart = carts.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: item.quantity + 1,
//         };
//       }
//       return item;
//     });
//     setCarts(updateCart);
//     localStorage.setItem("cart", JSON.stringify(updateCart));
//   };

//   const handleDec = (id) => {
//     const updatedCart = carts.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: item.quantity - 1,
//         };
//       }
//       return item;
//     });

//     setCarts(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeProduct = (id) => {
//     const updatedCart = carts.filter((item) => item.id !== id);
//     setCarts(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   if (carts.length === 0) {
//     return (
//       <div className="flex justify-center items-center font-bold text-4xl h-[55vh]">
//         Cart Is Empty
//       </div>
//     );
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="row mt-5">
//           <div className="col-12">
//             <h3 className="mycartheading">My Cart</h3>
//           </div>
//         </div>
//         <div className="row mt-5">
//           <div className="col-12">
//             <div className="card">
//               <div className="row">
//                 <div className="col-md-8 cart">
//                   <div className="title">
//                     <div className="row">
//                       <div className="col">
//                         <h4>
//                           <b>Shopping Cart</b>
//                         </h4>
//                       </div>
//                       <div className="col align-self-center text-right text-muted">
//                         {carts?.length} items
//                       </div>
//                     </div>
//                   </div>
//                   {carts?.map((cart) => {
//                     return (
//                       <>
//                         <div className="row border-top border-bottom">
//                           <div className="row main align-items-center">
//                             <div className="col-2">
//                               <img className="img-fluid" src={cart.image} />
//                             </div>
//                             <div className="col">
//                               <div className="row text-muted">{cart.title}</div>
//                               <div className="row">{cart.category}</div>
//                             </div>
//                             <div className="col">
//                               <button onClick={() => handleDec(cart.id)} className="btn border me-2">
//                                 {" "}
//                                 -{" "}
//                               </button>
//                               <a href="#" className="">
//                                 {cart.quantity}
//                               </a>
//                               <button onClick={() => handleInc(cart.id)} className="btn border ms-2">
//                                 {" "}
//                                 +{" "}
//                               </button>
//                             </div>
//                             <div className="col">
//                               &euro; {cart?.price}{" "}
//                               <span
//                                 className="close ms-3"
//                                 onClick={() => removeProduct(cart.id)}>
//                                 &#10005;
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </>
//                     );
//                   })}

//                   <div className="back-to-shop">
//                     <a href="#">&leftarrow;</a>
//                     <span className="text-muted">Back to shop</span>
//                   </div>
//                 </div>
//                 <div className="col-md-4 summary">
//                   <div>
//                     <h5>
//                       <b>Summary</b>
//                     </h5>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div
//                       className="col"
//                       //   style="padding-left:0;"
//                     >
//                       {carts?.length} items
//                     </div>
//                     <div className="col text-right">$ {total.toFixed()}</div>
//                   </div>
//                   <form>
//                     <p>SHIPPING</p>
//                     <select>
//                       <option className="text-muted">
//                         Standard-Delivery- &euro;10.00
//                       </option>
//                     </select>
//                     <p>GIVE CODE</p>
//                     <input id="code" placeholder="Enter your code" />
//                   </form>
//                   <div
//                     className="row"
//                     //   style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;"
//                   >
//                     <div className="col">Total:</div>
//                     <div className="col text-right">
//                       $ {(total + 10).toFixed()}
//                     </div>
//                   </div>
//                   <button className="btn">CHECKOUT</button>
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

// export default AddToCart;
