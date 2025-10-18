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
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleMenu() {
    setMenuOpen(!menuOpen)
  }

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
            } fixed z-10 lg:hidden bg-white inset-0 p-3 transition-all duration-300`}
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
        </div>
      </main>

    </>
  )
}

export default App
