import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import sound from "../sound/click.wav"
import sound2 from "../sound/click2.wav"

import logo from "../images/logo.svg"
import { useTranslation } from "react-i18next";
import i18next, { changeLanguage } from "i18next";







export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [language, setLanguage] = useState(1)




  const html = document.querySelector("html");
  const music = document.querySelector("#music")
  const music2 = document.querySelector("#music2")

  html.addEventListener("click", (e) => {
    setIsNavOpen(false)
  }
  );

  const { t } = useTranslation()


  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang)
  }









  return (
    <div className="navbar-fluid">
      <Nav className="navbar-container" state={isNavOpen ? 1 : 0}>

        <div className="brand">
          <img src={logo} alt="" />

          <audio id="music" src={sound}></audio>
          <audio id="music2" src={sound2}></audio>

        </div>

        <div className={`links ${isNavOpen ? "show" : ""}`}>
          <ul>
            <li>
              <a href="#about">{t("bizhaqimizda")}</a>
            </li>
            <li>
              <a href="#testimonial">{t("kimlaruchun")}</a>
            </li>
            <li>
              <a href="#services">{t("xizmatlar")}</a>
            </li>
            <li>
              <a href="#call">{t("aloqa")}</a>
            </li>
          </ul>
        </div>

        <div className="nav-end">

          <div className="language">
            <span onClick={() => {
              setLanguage(1)
              music.play()
              changeLanguage("ru")

            }
            } className={language == 1 ? "active" : ""}>RU</span>

            <span onClick={() => {
              setLanguage(2)
              music.play()
              changeLanguage("uz")


            }
            } className={language == 2 ? "active" : ""}>UZ</span>

          </div>

          <button >{t("boglanish")}</button>

        </div>

        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => {
              setIsNavOpen(false)
              music.play()
            }
            } />


          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
                music.play()
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
        font-size: 20px;
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
          background: linear-gradient(0deg, #848192, #6a6876) no-repeat right bottom / 0 var(--bg-h) !important;
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