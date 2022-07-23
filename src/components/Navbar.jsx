import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";


import logo from "../images/logo.svg"
import { NavLink } from 'react-router-dom'







export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [language, setLanguage] = useState(1)




  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));











  return (
    <div className="navbar-fluid">
      <Nav className="navbar-container" state={isNavOpen ? 1 : 0}>

        <div className="brand">
          <img src={logo} alt="" />
        </div>

        <div className={`links ${isNavOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#about">Biz Haqimizda</a>
            </li>
            <li>
              <a href="#testimonial">Bu kimlar uchun</a>
            </li>
            <li>
              <a href="#services">Xizmatlar</a>
            </li>
            <li>
              <a href="#call">Aloqa</a>
            </li>
          </ul>
        </div>

        <div className="nav-end">

          <div className="language">
            <span onClick={() => {
              setLanguage(1)
            }
            } className={language == 1 ? "active" : ""}>RU</span>

            <span onClick={() => {
              setLanguage(2)
            }
            } className={language == 2 ? "active" : ""}>UZ</span>

          </div>

          <button >Bog’lanish</button>

        </div>

        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>

      </Nav >


    </div >
  );
}

const Nav = styled.nav`
  display: flex;
  max-width: 1480px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 30px 20px;
 

  .brand{
    img{
      width: 210px;
      height: 43px;
      background-size: cover;
      background-position: center;

    }
  }

  .toggle {
    display: none;
  }

  .links {
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      list-style-type: none;
      li {
        a {
          margin:  20px;
          font-size: 20px ;
          color:  #00094C !important;
          text-decoration: none;
          transition: background-size 350ms;
          --bg-h: 100%;
          text-decoration: none;
          color: inherit;
          line-height: 10px;
          --bg-h: 1px;
        
        &:where(:hover, :focus-visible) {
         background-size: 100% var(--bg-h);
         background-position-x: left;
         }
        }
      }
    }
  }

  .nav-end{
    display: flex;
    align-items: center;

    .language {
      display: flex;
      flex-direction: row;
      margin: 0 20px;
      position: relative;
     
      span {
        display: inline-block;
        padding: 0 10px;
        font-size: 24px;
        font-weight: 500;
        color: #9B9B9B;
        cursor: pointer;

      }

      .active {
        color: #00094C;
      }

      span:first-child{
        border-right: 2px solid #D9D9D9
      }
    }

    
    
  }

  @media (max-width: 1430px) {
    button {
      /* display: none; */
      font-size: 18px;
      width: 190px;
      height: 50px;
      
    }
    
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 120px;
      
      img {
        width: 120px;
        height: 25px;
      }
    }

    

    .show {
      opacity: 1 !important;
      visibility: visible !important;
      overflow: hidden;
    }

    .links {
     height: 4rem;
     display: flex;
     justify-content: center;
     align-items: center;
    
       ul {
        display: flex;
        list-style-type: none;
        li {

         a {
          margin:  20px;
          font-size: 18px ;
          color:  #111111;
          text-decoration: none;
          background: linear-gradient(0deg, slateblue, slateblue) no-repeat right bottom / 0 var(--bg-h);
          transition: background-size 350ms;
          --bg-h: 100%;
          text-decoration: none;
          color: inherit;
          line-height: 1;
          padding-bottom: 2px;
          --bg-h: 2px;
        
        &:where(:hover, :focus-visible) {
         background-size: 100% var(--bg-h);
         background-position-x: left;
         }
        }
      }
    }
    }

    .nav-end{
      align-items: center;
      vertical-align: middle;
      
      .language{
        span {
          font-size: 16px;
        }

      }
    }
  }

  @media  (max-width: 1180px) {
    position: relative;
    padding: 10px 20px;
    z-index: 999;
    align-items: center;
    margin: 0;
    button {
      display: none;
    }
    
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      
      img {
        width: 80px;
        height: 20px;
      }
    }

    .toggle {
      display: block;
      transform: translateY(3px);
      z-index: 51;
      font-size: 20px;
      svg {
        color: black;
      }
    }

    .show {
      opacity: 1 !important;
      visibility: visible !important;
      overflow: hidden;
    }

    .links {
      z-index: 50;
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: 100%;
      height: ${({ state }) => (state ? "40vh" : "0")};
      border-bottom: 2px solid blue;
      background-color: white;
      overflow: hidden;
      opacity: 0;
      top: 60px;
      visibility: hidden;
      transition: .4s ease-in-out;
      clip-path: none;

     
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        padding: 0;
        justify-content: center;

        li {

          a {
            color: black;
            border-bottom: 2px solid transparent;
            line-height: 60px;
            font-size: 15px;
            
          }
        }
      }
    }

    .nav-end{
      flex-direction: row-reverse !important;
      align-items: center;
      vertical-align: middle;
      
      .language{
        span {
          font-size: 16px;
        }

      }
    }
  }

  @media (max-width: 600px) {
    padding: 10px 15px;
  }
 
`;