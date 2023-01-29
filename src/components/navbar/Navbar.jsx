import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.svg";

// const Menu = () => (
//   <>
//     <p>
//       <a href="#home">Home</a>
//     </p>
//     <p>
//       <a href="#wgpt3">What is GPT3?</a>
//     </p>
//     <p>
//       <a href="#possibility">Open AI</a>
//     </p>
//     <p>
//       <a href="#features">Case Studies</a>
//     </p>
//     <p>
//       <a href="#blog">Library</a>
//     </p>
//   </>
// );

const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  // eslint-disable-next-line
  const Menu = () => (
    <>
      <p onClick={() => setToogleMenu(false)}>
        <a href="#home">Home</a>
      </p>
      <p onClick={() => setToogleMenu(false)}>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p onClick={() => setToogleMenu(false)}>
        <a href="#possibility">Open AI</a>
      </p>
      <p onClick={() => setToogleMenu(false)}>
        <a href="#features">Case Studies</a>
      </p>
      <p onClick={() => setToogleMenu(false)}>
        <a href="#blog">Library</a>
      </p>
    </>
  );
  console.log(Menu);
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toogleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToogleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToogleMenu(true)}
          />
        )}

        {toogleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
