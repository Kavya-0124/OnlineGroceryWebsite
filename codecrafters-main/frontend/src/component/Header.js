import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assest/new1.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import "../css/Header.css";

const Header = () => 

{
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email)
  const dispatch = useDispatch();
  const [showOptions, setShowOptions] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };
  // const navigate = useNavigate(); 
  // const handleOptionSelect = (optionValue) => {
  //   setShowOptions(false);
 

  //   if (optionValue === 'Fruits') {
  //     navigate('fruits'); // Navigate to page1
  //   } else if (optionValue === 'Vegetables') {
  //     navigate('vegetables'); // Navigate to page2
  //   }
  // };
  console.log(process.env.REACT_APP_ADMIN_EMAIL)

  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
      <Link to={""}>
    <div className="h-15">
      <img src={logo} className="h-full" style={{ height:'64px' , width: '80px' }} />
    </div>
  </Link>

        <div className="flex items-center gap-4 md:gap-7">
        {/* <div className="container flex justify-left gap-4 md:gap-7"> */}
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"prediction"}>Prediction</Link>
            {/* <Link to={"menu/63f0fdbb3bcc2f97fa53d25d"}>Menu</Link> */}
            {/* <div className="dropdown">
              <button onClick={() => setShowOptions(!showOptions)}>Products <span class="arrow">&#x2304;</span></button>
                {showOptions && (
                <div className="options">
                  <select onChange={(e) => handleOptionSelect(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                  </select>
                </div>
              )}
            </div> */}
            <Link to={"about"}>About Us</Link>
            <Link to={"contact"}>Contact Us</Link>
          </nav>
          
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {/* {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (  */}
                  <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">
                    New product
                  </Link>
                 {/* )}  */}

                {userData.image ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-green-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link to={"login"} className="whitespace-nowrap cursor-pointer px-2">
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  {/* <Link
                    to={"menu/63f0fdbb3bcc2f97fa53d25d"}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link> */}
                  <Link to={"prediction"} className="px-2 py-1">
                Prediction
                  </Link>
                  <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
