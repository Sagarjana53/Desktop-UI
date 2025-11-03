import { useState } from 'react'
import asset0 from './assets/asset 0.png'
import asset1 from './assets/asset 1.svg'
import asset2 from './assets/asset 2.svg'
import asset3 from './assets/asset 3.png'
import asset4 from './assets/asset 4.png'
import asset5 from './assets/asset 5.png'
import asset6 from './assets/asset 6.png'
import asset7 from './assets/asset 7.png'
import asset8 from './assets/asset 8.png'
import asset9 from './assets/asset 9.png'
import asset10 from './assets/asset 10.png'
import asset11 from './assets/asset 11.png'
import asset12 from './assets/asset 12.png'
import asset13 from './assets/asset 13.png'
import asset14 from './assets/asset 14.png'
import asset15 from './assets/asset 15.png'
import asset16 from './assets/asset 16.png'
import asset17 from './assets/asset 17.png'
import asset18 from './assets/asset 18.png'
import asset19 from './assets/asset 19.png'
import asset20 from './assets/asset 20.png'
import asset21 from './assets/asset 21.png'
import asset22 from './assets/asset 22.png'
import asset23 from './assets/asset 23.png'
import asset24 from './assets/asset 24.png'
import asset25 from './assets/asset 25.png'
import asset26 from './assets/asset 26.png'
import asset27 from './assets/asset 27.svg'
import asset28 from './assets/asset 28.png'
import asset29 from './assets/asset 29.png'
import asset30 from './assets/asset 30.png'
import asset31 from './assets/asset 31.png'
import asset32 from './assets/asset 32.svg'
import asset33 from './assets/asset 33.jpeg'
import asset34 from './assets/asset 34.png'
import asset35 from './assets/asset 35.png'
import asset36 from './assets/asset 36.jpeg'
import asset37 from './assets/asset 37.svg'
import asset38 from './assets/react.svg'
import asset66 from './assets/asset 66.svg'
import asset44 from './assets/asset 44.svg'
import './App.css'
import { useEffect } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

  // === Constants for initial transforms ===
  const initialTranslateLTR = -48 * 4; // matches Tailwind: -translate-x-48
  const initialTranslateRTL = 36 * 4;  // matches Tailwind: translate-x-36

  function setupIntersectionObserver(element, isLTR, speed) {
    // --- Define the scroll animation handler ---
    function scrollHandler() {
      // Distance between viewport bottom and element top
      const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
      let totalTranslate = 0;

      // Calculate direction
      if (isLTR) {
        totalTranslate = translateX + initialTranslateLTR;
      } else {
        totalTranslate = -(translateX + initialTranslateRTL);
      }

      // ✅ Clamp movement so it doesn’t slide out or create gaps
      const maxTranslate = 200; // adjust this for desired travel distance
      totalTranslate = Math.max(Math.min(totalTranslate, maxTranslate), -maxTranslate);

      // Apply transform
      element.style.transform = `translateX(${totalTranslate}px)`;
    }

    // --- Intersection Observer setup ---
    const intersectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start animating when visible (only once)
          document.addEventListener("scroll", scrollHandler, { passive: true });
          scrollHandler(); // run immediately
        } else {
          // Stop animating when not visible
          document.removeEventListener("scroll", scrollHandler);
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback);
    observer.observe(element);
  }

  // --- React useEffect for initialization ---
  useEffect(() => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");

    if (line1 && line2 && line3) {
      setupIntersectionObserver(line1, true, 0.15);
      setupIntersectionObserver(line2, false, 0.15);
      setupIntersectionObserver(line3, true, 0.15);
      setupIntersectionObserver(line4, true, 0.8);
    } else {
      console.warn("Some line elements not found in DOM");
    }

    // ✅ Cleanup on unmount
    return () => { };

  }, []);


  return (
    <>
      {/* ================== NAVBAR SECTION ================== */}
      <nav className="p-3 flex bg-white justify-between items-center shadow-black">
        {/* ---------- BRAND / LOGO ---------- */}
        <a href="#" id="brand" className="flex gap-2 items-center flex-1">
          <img
            src={asset0}
            alt="logo"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="text-lg font-medium font-[Poppins]">
            ToDesktop
          </span>
        </a>

        {/* ---------- DESKTOP MENU ---------- */}
        <div id="nav-menu" className="hidden lg:flex gap-12">
          <a href="#" className="font-medium hover:text-[#3238f2]">Pricing</a>
          <a href="#" className="font-medium hover:text-[#3238f2]">Docs</a>
          <a href="#" className="font-medium hover:text-[#3238f2]">Changelog</a>
          <a href="#" className="font-medium hover:text-[#3238f2]">Blogs</a>
          <a href="#" className="font-medium hover:text-[#3238f2]">Login</a>
        </div>

        {/* ---------- DESKTOP CTA BUTTON ---------- */}
        <div className="hidden lg:flex flex-1 justify-end">
          <button className="flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600 cursor-pointer">
            <img src={asset1} alt="logo" />
            <span>Electron Developers</span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* ---------- MOBILE MENU ICON ---------- */}
        <button
          className="p-2 lg:hidden hover:bg-gray-100 cursor-pointer rounded-lg"
          onClick={handleMenu}
        >
          <i
            className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'
              } text-gray-600`}
          ></i>
        </button>

        {/* ---------- MOBILE MENU ---------- */}
        <div
          id="nav-dialog"
          className={`${menuOpen ? 'block' : 'hidden'
            } fixed z-10 lg:hidden bg-slate-50 inset-0 p-3 transition-all duration-300`}
        >

          {/* ----- MOBILE NAVBAR HEADER ----- */}
          <div id="nav-bar" className="flex justify-between">
            <a href="#" id="brand" className="flex gap-2 items-center">
              <img
                src={asset0}
                alt="logo"
                className="object-cover max-w-12 max-h-12"
              />
              <span className="text-lg font-medium font-[Poppins]">
                ToDesktop
              </span>
            </a>
            <button className="p-2 lg:hidden" onClick={handleMenu}>
              <i className="fa-solid fa-xmark text-gray-600"></i>
            </button>
          </div>

          {/* ----- MOBILE NAV LINKS ----- */}
          <div className="mt-6">
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Pricing</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Docs</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Changelog</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Blogs</a>
            <a href="#" className="font-medium m-3 p-3 hover:bg-gray-100 block rounded-lg">Login</a>
          </div>

          {/* ----- DIVIDER LINE ----- */}
          <div className="h-[1px] bg-gray-300"></div>

          {/* ----- MOBILE CTA BUTTON ----- */}
          <button className="mt-6 w-full flex gap-2 items-center px-6 py-4 rounded-lg hover:bg-gray-100">
            <img src={asset1} alt="logo" />
            <span>Electron Developers</span>
          </button>
        </div>
      </nav>

      {/* ================== MAIN SECTION ================== */}
      <main>

        {/* ================== HERO SECTION ================== */}
        <div
          id="hero"
          className="min-h-screen bg-gradient-to-br from-cyan-100 via-green-100 to-transparent"
        >

          {/* ---------- HERO CONTAINER ---------- */}
          <div
            id="hero-container"
            className="max-w-4xl mx-auto pt-6 px-6 py-32 flex flex-col sm:items-center sm:text-center sm:pt-12"
          >

            {/* ---------- VERSION TEXT ---------- */}
            <div
              id="version-text"
              className="flex items-center my-6 gap-2 border border-cyan-300 bg-cyan-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition group"
            >
              {/* Version Indicator Dot */}
              <div className="w-2 h-2 bg-cyan-400 rounded-full border border-cyan-600"></div>

              {/* Version Info Text */}
              <p className="font-[Poppins] font-medium text-cyan-600">
                v0.21.1: <span className="text-cyan-800">Find-in-page bug fixes</span>
              </p>

              {/* Arrow Icon */}
              <i className="fa-solid fa-arrow-right text-cyan-600 group-hover:translate-x-1 transition duration-300"></i>
            </div>

            {/* ---------- HERO FEATURES ---------- */}
            <div id="hero-features" className="hidden sm:flex gap-8 my-6">

              {/* Feature 1 */}
              <div className="flex justify-center gap-2 items-center text-cyan-800">
                <i className="fa-regular fa-file-code text-sm"></i>
                <p>Code Optional</p>
              </div>

              {/* Feature 2 */}
              <div className="flex justify-center gap-2 items-center text-cyan-800">
                <i className="fa-solid fa-hand-back-fist"></i>
                <p>Drag & drop builder</p>
              </div>

              {/* Feature 3 */}
              <div className="flex justify-center gap-2 items-center text-cyan-800">
                <i className="fa-solid fa-laptop"></i>
                <p>Windows, Mac, Linux</p>
              </div>
            </div>

            {/* ---------- HERO HEADING ---------- */}
            <h1 className="text-4xl text-gray-800 font-semibold leading-snug mt-4 sm:text-6xl sm:leading-normal">
              Web app to desktop app in minutes
            </h1>

            {/* ---------- HERO SUBTEXT ---------- */}
            <p className="text-xl mt-4 sm:text-2xl sm:mt-8 text-gray-800">
              Take your web app codebase and transform it into a cross platform desktop app
              with native functionality.
            </p>

            {/* ---------- HERO BUTTONS ---------- */}
            <div id="buttons-container" className="mt-12 flex gap-4 flex-col sm:flex-row">

              {/* Download Button */}
              <button className="px-8 py-3 font-semibold rounded-lg text-white bg-blue-700 shadow-sm hover:bg-blue-500/90 hover:cursor-pointer hover:transition">
                Download now
              </button>

              {/* Docs Button */}
              <button className="px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 hover:border-gray-800 hover:cursor-pointer hover:transition">
                Read Docs
              </button>
            </div>
          </div>
          <div id="companies-container" className='flex flex-col gap-8'>
            <div id="companies-title" className='flex justify-center gap-2'>
              <img className='translate-y-2' src={asset2} alt="logo" />
              <span className='font-medium font-[Poppins]'>APPS POWERED BY TODESKTOP</span>
              <img className='-scale-x-100 translate-y-2' src={asset2} alt="logo" />
            </div>
            <div id="lines-group" className="flex flex-col gap-4 overflow-hidden w-full items-center md:items-stretch">
              <div id="line1" className="flex gap-4 w-full transition-transform ease-linear md:translate-x-0">
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset3} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset4} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset5} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset6} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset7} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset8} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset9} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset10} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset11} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset12} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset13} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset14} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
              </div>
              <div id="line2" className="flex gap-4 w-full transition-transform ease-linear md:translate-x-0">
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset15} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset16} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset17} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset18} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset19} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset20} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset21} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset22} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset23} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset24} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset15} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400 md:min-h-32 md:min-w-32">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset26} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
              </div>
              <div id="line3" className='flex md:hidden gap-4 w-full -translate-x-48 transition-transform ease-linear'>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset27} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset28} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset29} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset30} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset31} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset32} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset33} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset34} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset35} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset36} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset37} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
                <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-cyan-50 rounded-xl border border-cyan-400">
                  <img className='w-12 h-12 md:w-16 md:h-13' src={asset38} alt="" />
                  <span className='text-[12px] md:text-[16px] font-semibold'>Unbounce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* step by step */}
        <div id="steps" className="flex flex-col gap-6 px-6 sm:px-10 lg:px-12 py-12 mt-16 overflow-hidden sm:justify-between items-center">
          <h2 className="font-[Poppins] text-5xl font-medium sm:font-semibold mb-14 self-start text-left">How it works</h2>
          <div id="step1" className="rounded-xl border border-cyan-500 px-8 py-12 flex flex-col lg:flex-row justify-around">
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <span className='border border-cyan-300 bg-cyan-50 text-cyan-700 w-fit px-3 py-1 rounded-lg font-medium font-[Poppins]'>Step1</span>
              <h3 className='text-4xl font-[Poppins] font-medium'>Bootstrap straight from your web app</h3>
              <p className='text-lg font-light font-[Poppins]'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
              <ul className='grid grid-cols-2 gap-2'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
              </ul>
            </div>
            <div className='pt-12 sm:m-auto'>
              <img src={asset66} alt="" />
            </div>
          </div>
          <div id="step2" className="rounded-xl border border-cyan-500 px-8 py-12 flex flex-col lg:flex-row justify-around">
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <span className='border border-cyan-300 bg-cyan-50 text-cyan-700 w-fit px-3 py-1 rounded-lg font-medium font-[Poppins]'>Step2</span>
              <h3 className='text-4xl font-[Poppins] font-medium'>Bootstrap straight from your web app</h3>
              <p className='text-lg font-light font-[Poppins]'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
              <ul className='grid grid-cols-2 gap-2'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
              </ul>
            </div>
            <div className='pt-12 sm:m-auto'>
              <img src={asset66} alt="" />
            </div>
          </div>
          <div id="step3" className="rounded-xl border border-cyan-500 px-8 py-12 flex flex-col lg:flex-row justify-around">
            <div className='flex flex-col gap-6 lg:w-1/2'>
              <span className='border border-cyan-300 bg-cyan-50 text-cyan-700 w-fit px-3 py-1 rounded-lg font-medium font-[Poppins]'>Step3</span>
              <h3 className='text-4xl font-[Poppins] font-medium'>Bootstrap straight from your web app</h3>
              <p className='text-lg font-light font-[Poppins]'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
              <ul className='grid grid-cols-2 gap-2'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <a href="#" className="text-lg font-light border-b-2 border-[cyan/0.3] hover:border-blue-300">
                    Multiple windows
                  </a>
                </li>
              </ul>
            </div>
            <div className='pt-12 sm:m-auto'>
              <img src={asset66} alt="" />
            </div>
          </div>
        </div>

        {/* bento grid  */}
        <div id='bento-grid' className='gap-6 px-6 sm:px-10 lg:px-12 py-12 mt-16 overflow-hidden sm:justify-between items-center'>
          <h2 className='font-[Poppins] text-5xl font-medium sm:font-semibold mb-14 self-start text-left max-w-2xl leading-normal'>ToDesktop handles the details</h2>
          <div id="grid-container" className='flex flex-col gap-6 lg:grid lg:grid-cols-3 [grid-auto-rows:96px]'>
            <div className='row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <img src={asset28} alt="" />
              </div>
            </div>
            <div className='row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                <img src={asset29} alt="" />
              </div>
            </div>
            <div className='row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <img src={asset30} alt="" />
              </div>
            </div>
            <div className='row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                <img src={asset31} alt="" />
              </div>
            </div>
            <div className='row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <img src={asset28} alt="" />
              </div>
            </div>
            <div className='row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200'>
              <div className='bg-slate-50 rounded-2xl w-full h-full p-6 flex flex-col gap-4 items-center group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50'>
                <h3 className='text-2xl font-medium font-[Poppins]'>Native Notifications</h3>
                <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                <img src={asset29} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* companies feture line */}

        <div id='feature-line' className='gap-6 px-6 sm:px-10 lg:px-12 py-12 mt-2 overflow-hidden sm:justify-between items-center'>

          <div className='border border-slate-200 rounded-lg flex justify-center p-4 overflow-hidden'>
            <div id="line4" className='flex gap-8 p-6'>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Download Analytics</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Deep Linking</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Trays</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Multi-window support</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Launch at starting</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Download Analytics</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Deep Linking</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Trays</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Multi-window support</h3>
              <span>•</span>
              <h3 className='whitespace-nowrap my-0 mx-2 text-2xl font-semibold font-[Poppins]'>Launch at starting</h3>
              <span>•</span>
            </div>
          </div>
        </div>

        {/* testimonials */}

        <div id="testimonials" className='gap-6 px-6 sm:px-10 lg:px-12 py-12 mt-16 overflow-hidden sm:justify-between items-center'>
          <h2 className='font-[Poppins] text-5xl font-medium sm:font-semibold mb-14 self-start text-left'>Customer stories</h2>
          <div className='rounded-xl border border-slate-200 flex flex-col lg:flex-row items-end'>
            <div className='flex flex-col p-8 gap-12'>
              <div className='h-4 w-fit'>
                <img src={asset44} alt="" />
              </div>
              <h3 className='font-[Poppins] font-medium text-xl leading-relaxed'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
              <div id="tag-container" className='flex gap-3 flex-wrap'>
                <div className='flex gap-2 items-center justify-center bg-cyan-50 w-fit border border-cyan-300 px-3 py-1 rounded-md text-cyan-700'>
                  <i className="fa-solid fa-check"></i>
                  <span className='font-[Poppins] font-medium'>Chromeless UI</span>
                </div>
                <div className='flex gap-2 items-center justify-center bg-cyan-50 w-fit border border-cyan-300 px-3 py-1 rounded-md text-cyan-700'>
                  <i className="fa-solid fa-check"></i>
                  <span className='font-[Poppins] font-medium'>Native spellcheck</span>
                </div>
                <div className='flex gap-2 items-center justify-center bg-cyan-50 w-fit border border-cyan-300 px-3 py-1 rounded-md text-cyan-700'>
                  <i className="fa-solid fa-check"></i>
                  <span className='font-[Poppins] font-medium'>Task time in menubar</span>
                </div>
                <div className='flex gap-2 items-center justify-center bg-cyan-50 w-fit border border-cyan-300 px-3 py-1 rounded-md text-cyan-700'>
                  <i className="fa-solid fa-check"></i>
                  <span className='font-[Poppins] font-medium'>Notification count in the dock</span>
                </div>
                <div className='flex gap-2 items-center justify-center bg-cyan-50 w-fit border border-cyan-300 px-3 py-1 rounded-md text-cyan-700'>
                  <i className="fa-solid fa-check"></i>
                  <span className='font-[Poppins] font-medium'>Global hotkey to create task</span>
                </div>
              </div>
              <p className='text-lg font-light text-gray-700'>“ToDesktop provided us with <span className='text-cyan-900 font-semibold'>a polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-cyan-900 font-semibold'>new and improved features</span> to our customers within days.”</p>
              <div id="user-card" className='flex gap-4'>
                <div className='w-12'>
                  <img src={asset33} className='rounded-full' alt="" />
                </div>
                <div className='flex flex-col'>
                  <h3>Zeb Evans</h3>
                  <p className='text-gray-500'>Founder & CEO, <a href="#" className='border-b border-dotted border-y-cyan-300 hover:border-solid hover:border-cyan-600'>ClickUp</a></p>
                </div>
              </div>
            </div>
            <div id="right">
              <img src={asset34} alt="" className='pl-12 lg:mt-2' />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-4 mt-6">
            <div className="flex rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200 group">
              <div className="w-full h-full rounded-2xl group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50 bg-slate-50 flex flex-col p-6 gap-6">
                <div className="flex p-6 items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h3 className="font-[Poppins] text-2xl font-bold">Native APIs</h3>
                </div>
                <p className='font-[Poppins] text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                      <img src={asset35} className=' min-w-16 min-h-16' alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                      <img src={asset36} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className='font-[Poppins]'>Rick Pastoor</h3>
                    <a href="#" className='border-b border-dotted border-y-cyan-300 hover:border-solid hover:border-cyan-600 w-fit text-gray-500'>Rise</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200 group">
              <div className="w-full h-full rounded-2xl group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50 bg-slate-50 flex flex-col p-6 gap-6">
                <div className="flex p-6 items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h3 className="font-[Poppins] text-2xl font-bold">Native APIs</h3>
                </div>
                <p className='font-[Poppins] text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                      <img src={asset35} className=' min-w-16 min-h-16' alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                      <img src={asset36} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className='font-[Poppins]'>Rick Pastoor</h3>
                    <a href="#" className='border-b border-dotted border-y-cyan-300 hover:border-solid hover:border-cyan-600 w-fit text-gray-500'>Rise</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-teal-200 hover:via-cyan-200 hover:to-emerald-200 group">
              <div className="w-full h-full rounded-2xl group-hover:bg-gradient-to-br group-hover:from-teal-50 group-hover:via-cyan-50 group-hover:to-emerald-50 bg-slate-50 flex flex-col p-6 gap-6">
                <div className="flex p-6 items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 flex items-center justify-center rounded-full">
                    <i className="fa-solid fa-code"></i>
                  </div>
                  <h3 className="font-[Poppins] text-2xl font-bold">Native APIs</h3>
                </div>
                <p className='font-[Poppins] text-lg font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="-mr-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                      <img src={asset35} className=' min-w-16 min-h-16' alt="" />
                    </div>
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white">
                      <img src={asset36} alt="" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className='font-[Poppins]'>Rick Pastoor</h3>
                    <a href="#" className='border-b border-dotted border-y-cyan-300 hover:border-solid hover:border-cyan-600 w-fit text-gray-500'>Rise</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='rounded-xl bg-black flex flex-col lg:flex-row mt-6'>
            <div className='flex flex-col p-8 gap-4 lg:gap-8'>
              <span className='font-[Poppins] text-gray-400 font-medium'>READY TO START BUILDING?</span>
              <h2 className='font-[Poppins] font-medium text-4xl  lg:text-5xl leading-tight text-cyan-100'>Create your desktop app for free*</h2>
              <p className='font-[Poppins] text-lg lg:text-xl font-light text-cyan-200'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
              <button className='bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-600 flex justify-center items-center gap-4 cursor-pointer'>
                <i className="fa-solid fa-download"></i>
                <span className='font-[Poppins] '>Download ToDestop Builder</span>
              </button>
              <p className='font-[Poppins] text-xs font-light text-cyan-200 italic leading-tight'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
            </div>
            <div >
              <img src={asset34} alt="" className='pl-12 lg:mt-2' />
            </div>
          </div>
        </div>

        {/* pricing */}

        <div className="gap-6 px-6 sm:px-10 lg:px-12 py-12 mt-16 overflow-hidden sm:justify-between items-center w-full">
          <h2 className='font-[Poppins] text-5xl font-medium sm:font-semibold mb-14 text-left max-w-2xl leading-normal'>
            Choose a plan that fits your needs
          </h2>
          <div className="flex flex-col lg:flex-row mt-6 gap-6 w-full">

            <div className="rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:flex-1 border-none bg-slate-100">
              <h3 className='font-[Poppins] font-medium text-cyan-800 text-4xl'>Free</h3>
              <p className='text-lg font-light text-cyan-700'>For personal use or testing your app.</p>
              <p className='uppercase text-cyan-800'>Key Features</p>
              <ul className='space-y-3'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
              </ul>
              <button className='border border-cyan-300 px-8 py-3 text-blue-800 rounded-lg hover:border-cyan-700 font-medium font-[Poppins]'>
                Read Docs
              </button>
            </div>

            <div className="rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:flex-1 border-none bg-slate-100">
              <h3 className='font-[Poppins] font-medium text-cyan-800 text-4xl'>Essential</h3>
              <p className='text-lg font-light text-cyan-700'>For simple desktop apps.</p>
              <p className='uppercase text-cyan-800'>
                <span className='font-bold text-2xl font-[Poppins]'>$99</span>/month
              </p>
              <ul className='space-y-3'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
              </ul>
              <button className='border border-cyan-300 px-8 py-3 text-blue-800 rounded-lg hover:border-cyan-700 font-medium font-[Poppins]'>
                Read Docs
              </button>
            </div>

            <div className="relative rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6 lg:flex-1 border-none bg-slate-100">
              <p className='text-cyan-800 text-sm bg-cyan-100 rounded-full w-fit px-4 py-2 font-[Poppins] font-semibold absolute top-0 right-8 -translate-y-1/2'>
                Most Popular
              </p>
              <h3 className='font-[Poppins] font-medium text-cyan-800 text-4xl'>Professional</h3>
              <p className='text-lg font-light text-cyan-700'>For sophisticated desktop apps.</p>
              <p className='uppercase text-cyan-800'>
                <span className='font-bold text-2xl font-[Poppins]'>$240</span>/month
              </p>
              <ul className='space-y-3'>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-check text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
                <li className='flex items-center gap-4'>
                  <i className="fa-solid fa-xmark text-cyan-700"></i>
                  <span className='text-cyan-700 font-light'>Free for personal use</span>
                </li>
              </ul>
              <button className='bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-600 flex justify-center items-center gap-4 cursor-pointer'>
                Read Docs
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default App
